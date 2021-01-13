<div class="container" on:click|preventDefault={onContainerClick}>
  <css-doodle use="var(--bg)" bind:this={doodle}></css-doodle>
</div>

<div class="control">
  <Color onInput={handleInput} color={color} />
  <button reset class="download" on:click={handleDownload} class:pending={pending}>
    <span>SAVE</span>
    {#if pending }
      <css-doodle use="var(--rain)"></css-doodle>
    {/if}
  </button>
</div>

<script>
  import Color from './color.svelte';
  export let color = '#fff';
  export let onColorChange;
  export let onContainerClick;

  let doodle;
  let code = '';;

  let pending = false;

  function resetPending() {
    setTimeout(() => {
      pending = false;
    }, 1500);
  }

  function handleDownload() {
    if (pending) return false;
    pending = true;
    let promise = doodle.export({ download: true, scale: 6 });
    promise
      .then(resetPending)
      .catch(resetPending);
  }

  function handleInput(value) {
    color = value;
    doodle.update(code + `;background: ${color};`);
    if (typeof onColorChange === 'function') {
      onColorChange(color);
    }
  }

  $: if (color && doodle) {
    doodle.update(code + `;background: ${color};`);
  }

  export function update(value) {
    code = value;
    doodle.update(code + `;background: ${color};`);
  }

  export function getShapeStyle() {
    let cell = doodle.shadowRoot.querySelector('cell');
    let value = '';
    if (cell) {
      let style = window.getComputedStyle(cell);
      value = style['clip-path'] || style['-webkit-clip-path'];
    }
    return (
`
.shape {
  background: ${color};
  width: 300px; height: 300px;
  clip-path: ${ value };
}
`);
  }
</script>

<style>
  .container {
    width: 310px; height: 310px;
    display: grid;
    place-items: center;
    --lg: linear-gradient(
      var(--color-border-focus),
      var(--color-border-focus)
    );
    background:
      var(--lg) 0 0 / 1px 10px,
      var(--lg) 0 0 / 10px 1px,
      var(--lg) 100% 0 / 1px 10px,
      var(--lg) 100% 0 / 10px 1px,
      var(--lg) 0 100% / 1px 10px,
      var(--lg) 0 100% / 10px 1px,
      var(--lg) 100% 100% / 1px 10px,
      var(--lg) 100% 100% / 10px 1px;
    background-repeat: no-repeat;
    box-shadow: inset 0 0 0 1px var(--color-shape-bg);
  }

  css-doodle {
    width: 100%;
    height: 100%;
    padding: 5px;
    --bg: (
      transition: clip-path .2s ease;
    );

    --rain: (
      :doodle {
        @grid: 25x1 / 100%;
        overflow: hidden;
        --c: var(--color-main);
      }
      @size: 1px @r(2px, 15px);
      position: absolute;
      left: @r(100%);
      top: @r(-50px, -20px);
      background: @var(--c);
      animation: down @r(.1s, 1.5s) linear;
      @keyframes down {
        to {
          transform: translateY(70px);
        }
      }
    );
  }

  .control {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .download {
    margin-left: 10px;
    transition: .2s ease;
    height: 24px;
    border: 1px solid var(--color-button-border);
    line-height: 0;
    width: 48px;
    text-align: center;
    color: var(--color-text);
    cursor: pointer;
    border-radius: 3px;
    position: relative;
  }

  .download css-doodle {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    padding: 0;
  }

  .download span {
    z-index: 2;
    position: relative;
  }

  .pending,
  .download:hover {
    color: var(--color-main);
    border-color: var(--color-main);
  }

  @media screen and (max-width: 32.25em) {
    .container {
      width: 240px;
      height: 240px;
    }
  }
</style>
