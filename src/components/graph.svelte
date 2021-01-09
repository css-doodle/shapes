<div class="container">
  <css-doodle use="var(--bg)" bind:this={doodle}></css-doodle>
</div>

<script>
  let doodle;
  export function update(value) {
    doodle.update(value);
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
  background: #fff;
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
      transition: .2s ease;
    );
  }

  @media screen and (max-width: 32.25em) {
    .container {
      width: 240px;
      height: 240px;
    }
  }
</style>
