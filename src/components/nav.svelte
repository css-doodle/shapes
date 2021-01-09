<ul class="nav">
  <li><a on:click={() => display('about', true)} href="#about">About</a></li>
  <li><a on:click={() => display('collection', true)} href="#collection">Collection</a></li>
  <li>
    <a href="https://github.com/css-doodle/shapes" target="_blank" rel="noopener noreferrer" class="external-link">
      <span>GitHub</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </a>
  </li>
</ul>

{#if displayFlag.about}
  <About onClose={() => display('about', false)} />
{/if}

{#if displayFlag.collection}
  <Collection
    onClose={() => display('collection', false)}
    onSelect={onSelect}
  />
{/if}

<script>
  import About from './about.svelte';
  import Collection from './collection.svelte';

  export let onSelect;

  let displayFlag = {
    about: false,
    collection: false
  };

  function display(name, value) {
    displayFlag[name] = value;
  }
</script>

<style>
  .nav {
    list-style: none;
    text-align: center;
    color: rgba(255, 255, 255, .5);
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    transition: .2s ease;
    margin-bottom: 4em;
  }

  .nav li {
    margin: 0 6px;
  }

  .nav a:link, .nav a:visited {
    color: rgba(255, 255, 255, .5);
  }

  .nav a:hover, .nav a:active {
    color: #ffc107;
  }

  .external-link {
    display: flex;
    align-items: center;
  }

  .external-link svg {
    width: 1em;
    height: 1em;
  }
</style>
