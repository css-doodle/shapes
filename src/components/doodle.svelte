<css-doodle
  on:click={onClick}
  use:doodle={rules}
  use="var(--basic)"
/>

<script>
  export let onClick;
  export let shape;
  export let delay = 0;

  $: rules = `
    :doodle {
      background: var(--color-shape-bg);
    }
    clip-path: @shape(${shape});
    background: @var(--c);
  `;

  function doodle(element, rules) {
    setTimeout(() => element.update(rules), delay);
    return {
      update(newRules) {
        element.update(newRules);
      }
    }
  }
</script>

<style>
  css-doodle {
    width: 90px;
    height: 90px;
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

  @media screen and (max-width:24em) {
    css-doodle {
      width: 70px;
      height: 70px;
    }
  }
</style>
