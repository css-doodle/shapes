<Popup onClose={onClose} bind:this={popup}>
  <div class="container">
    <div class="collection">
      <h2>Select to edit</h2>
      <div class="list">
        {#each shapes as shape, i}
          <Doodle onClick={select(shape.value)} shape={shape.value} {delay} />
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
  let delay = 150;

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
    grid-template-columns: repeat(12, 1fr);
    margin-bottom: 2em;
  }

  @media screen and (min-width: 80em) {
    .list {
      grid-template-columns: repeat(12, 1fr);
    }
  }
  @media screen and (max-width: 80em) {
    .list {
      grid-template-columns: repeat(8, 1fr);
    }
  }
  @media screen and (max-width: 51.25em) {
    .list {
      grid-template-columns: repeat(5, 1fr);
    }
  }
  @media screen and (max-width: 32em) {
    .list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media screen and (max-width: 25em) {
    .list {
      grid-template-columns: repeat(3, 1fr);
    }
  }

</style>
