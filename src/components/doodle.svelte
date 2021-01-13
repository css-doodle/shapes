<css-doodle
  on:click={onClick}
  bind:this={doodle}
  use="var(--basic)"
/>

<script>
  export let onClick;
  export let shape;
  export let delay = 0;

  let doodle;

  $: if (shape) {
    setTimeout(() => {
      doodle.update(`
        :doodle {
          background: var(--color-shape-bg);
        }
        clip-path: @shape(${shape});
        background: @var(--c);
      `);
    }, delay);
  }
</script>

<style>
  css-doodle {
    width: 100px;
    height: 100px;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    --basic: (
      :doodle {
        --c: var(--color-shape);
        --bg: var(--color-shape-bg);
        background: var(--color-shape-bg);
      }
      :doodle(:hover) {
        --c: var(--color-emphasis);
        box-shadow: inset 0 0 0 1px var(--color-main);
      }
    );
  }

  @media screen and (max-width:47.5em) {
    css-doodle {
      width: 80px;
      height: 80px;
    }
  }

  @media screen and (max-width:24em) {
    css-doodle {
      width: 70px;
      height: 70px;
    }
  }
</style>
