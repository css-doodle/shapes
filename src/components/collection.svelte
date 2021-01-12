<Popup onClose={onClose} bind:this={popup}>
  <div class="container">
    <div class="collection">
      <h2>Select to edit</h2>
      <div class="list">
        {#each shapes as shape, i}
          <Doodle onClick={select(shape)} shape={shape} delay={150} />
        {/each}
      </div>
      <Back onClose={handleBack} />
    </div>
  </div>
</Popup>

<script>
  import Popup from './popup.svelte';
  import Back from './back.svelte';
  import shapes from '../shapes';
  import Doodle from './doodle.svelte';

  export let onClose;
  export let onSelect;

  let popup;
  let delay = 200;

  function handleBack(e) {
    popup.handleClose(e);
  }

  function select(shape) {
    return e => {
      if (typeof onSelect === 'function') {
        onSelect(shape);
      }
      handleBack(e);
    }
  }
</script>

<style>
  .container {
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
  }

  .collection {
    margin: auto;
    padding-bottom: 3em;
  }

  h2 {
    font-size: 2em;
    margin-bottom: 1em;
    color: var(--color-text);
  }

  .list {
    margin: auto;
    display: grid;
    gap: 1vmin;
    grid-template-columns: repeat(6, 1fr);
    margin-bottom: 2em;
  }

  @media screen and (max-width: 47.5em) {
    .list {
      grid-template-columns: repeat(5, 1fr);
    }
  }
  @media screen and (max-width: 33.2em) {
    .list {
      grid-template-columns: repeat(4, 1fr);
    }

    .collection {
      margin-top: 4em;
    }
  }
  @media screen and (max-width: 24em) {
    .list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
