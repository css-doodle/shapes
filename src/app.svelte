<div class="container">
  <div class="graph">
    <Graph
      bind:this={graph}
      onColorChange={handleColorChange}
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
    <Nav onSelect={ handleSelect } />
  </div>

</div>

<script>
  import { onMount } from 'svelte';
  import Graph from './components/graph.svelte';
  import Editor from './components/editor.svelte';
  import Nav from './components/nav.svelte';
  import shapes from './shapes';

  import throttle from 'lodash/throttle';

  let graph;
  let graphColor = '#fff';

  let editor;
  let mode = 'rule';

  let content = shapes[Math.floor(Math.random() * shapes.length)];

  let updateHash = throttle(_updateHash, 500);

  function _updateHash(value, color) {
    if (history.replaceState && value.length) {
      history.replaceState({}, '',
        '?rule=' + encodeURIComponent(value) +
        '&color=' + encodeURIComponent(color)
      );
    }
  }

  function handleColorChange(value) {
    graphColor = value;
    updateHash(content, graphColor);
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
    editor.setToggle('rule');
    editor.update(shape);
    if (history.replaceState) {
      history.replaceState({}, '', '?');
    }
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

  onMount(() => {
    let { rule, color } = parseQueryString(location.search);
    if (color) {
      graphColor = color;
    }
    if (rule) {
      handleChange(rule, true);
      editor.update(rule);
    } else {
      handleChange(content, true);
    }
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
    margin: 0 auto 7em;
  }

  .nav {
    margin-top: auto;
    padding-top: 5em;
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
      margin: 4em auto;
    }

    :global(iframe[src*="twitter"]) {
      display: none;
    }
  }
</style>
