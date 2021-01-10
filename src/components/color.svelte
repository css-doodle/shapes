<button reset bind:this={button}>
  <label for="color-picker">
    <span class="handler" style="--color: {color}"></span>
    <input
      type="color"
      id="color-picker"
      tabindex="-1"
      value={color}
      on:input={handleInput}
      bind:this={input}
    />
  </label>
</button>

<script>
  import { onMount } from 'svelte';

  export let onInput;
  export let color = '#fff';

  let button;
  let input;

  function handleInput(e) {
    color = e.target.value;
    if (typeof onInput === 'function') {
      onInput(color);
    }
  }

  onMount(() => {
    button.addEventListener('click', e => {
      input.click();
    });
  });

</script>

<style>
  .handler {
    display: block;
    width: 48px;
    height: 24px;
    border: 1px solid var(--color-button-border);
    cursor: pointer;
    transition: border-color .2s ease;
    position: relative;
    border-radius: 3px;
  }

  .handler:after {
    content: '';
    position: absolute;
    --offset: 4px;
    left: var(--offset);
    top: var(--offset);
    right: var(--offset);
    bottom: var(--offset);
    background: var(--color);
  }

  .handler:hover {
    border-color: var(--color-main);
  }

  label {
    position: relative;
    margin: 0;
    padding: 0;
    display: block;
  }
  input[type="color"] {
    position: absolute;
    top: 0;
    left: 0;
    outline: none;
    overflow: hidden;
    border: none;
    opacity: 0;
    z-index: -1;
  }
</style>
