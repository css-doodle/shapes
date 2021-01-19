<div class="container">

  <div class="theme-switcher">
    <ThemeSwitcher {theme} onClick={handleThemeChange} />
  </div>

  <div class="graph">
    <Graph
      bind:this={graph}
      onColorChange={handleColorChange}
      onContainerClick={handleContainerClick}
      color={graphColor}
    />
  </div>

  <div class="editor" class:fixed={mode == 'css'}>
    <Editor
      content={ content }
      onChange={ handleChange }
      onToggle={ handleToggle }
      bind:this={ editor }
    />
  </div>

  <div class="nav">
    <Nav onSelect={ handleSelect } bind:this={nav} />
  </div>

</div>

<script>
  import { onMount } from 'svelte';
  import Graph from './components/graph.svelte';
  import Editor from './components/editor.svelte';
  import Nav from './components/nav.svelte';
  import ThemeSwitcher from './components/theme-switcher.svelte';

  import shapes from './shapes';
  import Theme from './theme';

  import throttle from 'lodash/throttle';

  let theme = Theme.getTheme();

  let graph;
  let editor;
  let mode = 'rule';

  let colors = {
    dark: '#eeeeee',
    light: '#222222'
  };

  let excludedColor = {
    light: ['#ffffff', '#fff', '#eee', '#eeeeee'],
    dark: ['#000000', '#000', '#222222', '#222']
  };

  let nav;
  let content = shapes[Math.floor(Math.random() * shapes.length)];

  $: graphColor = setGraphColor(theme);
  function setGraphColor(theme) {
    let { _, color } = parseQueryString(location.search);
    if (color && !excludedColor[theme].includes(color)) {
      return color;
    } else {
      return colors[theme];
    }
  }

  let updateHash = throttle(_updateHash, 500);
  function _updateHash(value, color) {
    if (history.replaceState && value.length) {
      history.replaceState({}, '',
        '?rule=' + encodeURIComponent(value) +
        '&color=' + encodeURIComponent(color)
      );
    }
  }

  let updateCSSEditor = throttle(_updateCSSEditor, 500);
  function _updateCSSEditor() {
    let value = graph.getShapeStyle();
    editor.update(value, { triggerChange: false });
  }

  function handleColorChange(value) {
    graphColor = value;
    updateHash(content, graphColor);
    if (mode === 'css') {
      updateCSSEditor();
    }
  }

  function handleChange(value, initial) {
    content = value;
    graph.update(`
      clip-path: @shape(
        ${ value }
      );
    `);

    if (!initial) {
      updateHash(value, graphColor);
    }
  }

  function handleToggle(name) {
    mode = name;
    if (name == 'css') {
      let value = graph.getShapeStyle();
      editor.update(value, { triggerChange: false });
    } else {
      editor.update(content, { triggerChange: false });
    }
  }

  function handleSelect(shape) {
    mode = 'rule';
    editor.setToggle('rule');
    editor.update(shape);
    if (history.replaceState) {
      history.replaceState({}, '', '?');
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function handleContainerClick() {
    nav.display('collection', true);
  }

  function parseQueryString(str) {
    let groups = str.substr(1).split('&');
    let ret = {};
    groups.forEach(group => {
      let [name, value] = group.split('=');
      ret[name] = decodeURIComponent(value);
    });
    return ret;
  }

  function handleThemeChange(value) {
    theme = value;
    Theme.saveTheme(value);
  }

  onMount(() => {
    Theme.writeAttribute();
    Theme.onChange(data => {
      if (data.type === 'local') {
        theme = data.theme;
        Theme.writeAttribute();
      } else {
        theme = Theme.getTheme();
      }
    });

    let { rule, color } = parseQueryString(location.search);
    if (rule) {
      handleChange(rule, true);
      editor.update(rule);
    } else {
      handleChange(content, true);
    }

    document.body.classList.add('ready');
  });
</script>

<style>
  .container {
    height: 100%;
    padding-top: 9em;
    display: flex;
    flex-direction: column;
  }

  .editor {
    margin: 0 auto;
    min-width: 420px;
    max-width: 90%;
  }

  .fixed {
    max-width: 500px;
  }

  .graph {
    margin: 0 auto 6em;
  }

  .nav {
    margin-top: auto;
    padding-top: 5em;
  }

  .theme-switcher {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
  }

  @media screen and (max-width: 26.25em) {
    .container {
      padding: 0;
    }
    .editor {
      min-width: 95%;
      width: 95%;
      max-width: 95%;
    }
    .graph {
      margin: 4.5em auto;
    }
  }
</style>
