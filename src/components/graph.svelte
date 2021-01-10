<div class="container">
  <css-doodle use="var(--bg)" bind:this={doodle}></css-doodle>
</div>

<div class="control">
  <Color onInput={handleInput} color={color} />
  <button reset class="download" on:click={handleDownload}>
    <span>SAVE</span>
  </button>
</div>

<script>
  import Color from './color.svelte';
  export let color = '#fff';
  export let onColorChange;

  let doodle;
  let code = '';;

  function handleDownload() {
    doodle.export({ download: true, scale: 6 });
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
    --lg: linear-gradient(#57596B, #57596B);
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
    box-shadow: inset 0 0 0 1px rgba(255,255, 255, .1);
  }

  css-doodle {
    width: 100%;
    height: 100%;
    padding: 5px;
    --bg: (
      background: #fff;
      transition: clip-path .2s ease;
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
    border: 1px solid rgba(255, 255, 255, .2);
    line-height: 0;
    width: 48px;
    text-align: center;
    color: rgba(255, 255, 255, .8);
    cursor: pointer;
  }

  .download:hover {
    color: #ffc107;
    border-color: #ffc107;
  }

  @media screen and (max-width: 32.25em) {
    .container {
      width: 240px;
      height: 240px;
    }
  }
</style>
