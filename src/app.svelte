<div class="container">
  <div class="graph">
    <Graph bind:this={graph} />
  </div>

  <div class="editor" class:fixed={mode == 'rule'}>
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

  let graph;
  let editor;
  let mode = 'css';
  let content = shapes[Math.floor(Math.random() * shapes.length)];

  function handleChange(value, initial) {
    content = value;
    graph.update(`
      clip-path: @shape(
        ${ value }
      );
    `);

    if (!initial) {
      updateHash(value);
    }
  }

  function handleToggle(name) {
    mode = name;
    if (name == 'rule') {
      let value = graph.getShapeStyle();
      editor.update(value, { triggerChange: false });
    } else {
      editor.update(content, { triggerChange: false });
    }
  }

  function handleSelect(shape) {
    editor.update(shape);
    if (history.replaceState) {
      history.replaceState({}, '', '?');
    }
  }

  function updateHash(value) {
    if (history.replaceState && value.length) {
      history.replaceState({}, '', '?rule=' + encodeURIComponent(value));
    }
  }

  onMount(() => {
    let rule = location.search.split('rule=')[1];
    if (rule) {
      rule = decodeURIComponent(rule);
      handleChange(decodeURIComponent(rule), true);
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
    margin: 0 auto 8em;
  }

  .nav {
    margin-top: auto;
    padding-top: 2em;
  }

  @media screen and (max-width: 420px) {
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
