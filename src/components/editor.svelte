<div class="container">
  <div class="toggler">
    <Toggler
      onChange={handleToggleChange}
      name={toggleMode}
    />
  </div>

  <textarea bind:this={textarea} />
</div>

<script>
  import { onMount } from 'svelte';
  import CodeMirror from 'codemirror';
  import 'codemirror/lib/codemirror.css';
  import 'codemirror/theme/monokai.css';
  import 'codemirror/mode/css/css.js';

  import Toggler from './toggler.svelte';

  export let config = {};
  export let onChange;
  export let onToggle;
  export let content;
  export let id;

  let textarea;
  let editor;
  let lastId;
  let lastContent;
  let toggleMode = 'rule';
  let triggerChange = true;

  $: if (id !== lastId) {
    lastId = id;
    if (editor) {
      lastContent = content;
      editor.setValue(content);
      editor.clearHistory();
    }
  }

  const defaultConfig = {
    mode: 'css',
    theme: 'monokai',
    insertSoftTab: true,
    matchBrackets: true,
    smartIndent: true,
    tabSize: 2,
    autofocus: false,
  }

  function handleToggleChange(name) {
    toggleMode = name;
    if (typeof onToggle === 'function') {
      onToggle(name);
    }
    if (toggleMode == 'css') {
      editor.setOption('readOnly', 'nocursor');
    } else {
      editor.setOption('readOnly', '');
      triggerChange = true;
    }
  }

  export function update(value, option) {
    if (option) {
      triggerChange = option.triggerChange;
    } else {
      triggerChange = true;
    }
    editor.setValue(value.trim());
    editor.clearHistory();
  }

  export function setToggle(name) {
    toggleMode = name;
  }

  onMount(() => {
    CodeMirror.keyMap.default['Shift-Tab'] = 'indentLess';
    CodeMirror.keyMap.default['Tab'] = 'indentMore';

    editor = CodeMirror.fromTextArea(textarea, {
      ...defaultConfig,
      ...config
    });
    editor.setValue(content);
    editor.clearHistory();
    editor.on('change', (_, obj) => {
      let value = editor.getValue().trim();
      if (lastContent == value) {
        return false;
      }
      lastContent = value;
      if (typeof onChange == 'function' && triggerChange) {
        onChange(value);
      }
    });
  });
</script>

<style>
  .container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  :global(.CodeMirror) {
    height: auto;
    padding: 1em;
    line-height: 1.6;
    border-radius: 5px;
    font-size: 1.2em;
  }

  :global(.cm-s-monokai span.cm-tag) {
    color: #a6e22e;
  }

  :global(.cm-s-monokai.CodeMirror) {
    background: var(--color-editor-bg);
  }

  .toggler {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }

  @media screen and (max-width: 26.25em) {
    :global(.CodeMirror) {
      font-size: 1em;
    }
  }

</style>
