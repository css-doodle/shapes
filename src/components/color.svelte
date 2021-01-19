<button reset>
  <label>
    <span class="handler" style="--color: {color}"></span>
    <input
      type="color"
      tabindex="-1"
      value={color}
      on:input={handleInput}
    />
  </label>
</button>

<script>
  export let onInput;
  export let color = '#eeeeee';

  function handleInput(e) {
    color = e.target.value;
    if (typeof onInput === 'function') {
      onInput(color);
    }
  }

</script>

<style>
  .handler {
    display: block;
    width: 48px;
    height: 24px;
    border: 1px solid var(--color-button-border);
    background: var(--color-button-bg);
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
