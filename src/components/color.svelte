<label>
  <span class="handler" style="--color: {color}"></span>
  <input type="color" value={color} on:input={handleInput} />
</label>

<script>
  export let onInput
  export let color = '#fff';

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
    border: 1px solid rgba(255, 255, 255, .2);
    cursor: pointer;
    transition: border-color .2s ease;
    position: relative;
  }

  .handler:after {
    content: '';
    position: absolute;
    --offset: 4px;
    left: var(--offset);
    top: var(--offset);
    right: var(--offset);
    bottom: var(--offset);
    background: var(--color, #fff);
  }

  .handler:hover {
    border-color: #ffc107;
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
    width: 0;
    height: 0;
    overflow: hidden;
    border: none;
    opacity: 0;
    z-index: -1;
  }
</style>
