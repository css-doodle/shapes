<button reset on:click={handleClick}>
  {#if theme == 'dark'}
    <span class="toggle dark">
      <css-doodle use="var(--lines)"></css-doodle>
    </span>
  {:else}
    <span class="toggle light"></span>
  {/if}
</button>

<script>
  export let onClick;
  export let theme = 'dark';

  function handleClick() {
    if (typeof onClick === 'function') {
      let name = (theme == 'dark') ? 'light' : 'dark';
      onClick(name);
    }
  }
</script>

<style>
  .toggle {
    border-radius: 50%;
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    transition: .2s ease;
    position: relative;
  }
  .light {
    box-shadow: inset .9em 0 0 #333;
    transform: rotate(-30deg);
    animation: move_moon .4s ease;
    animation-fill-mode: both;
  }

  .dark {
    width: 1em;
    height: 1em;
    margin-right: 5px;
    margin-top: 5px;
  }

  css-doodle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; height: 100%;
    animation: move_sun .4s ease;
    animation-fill-mode: both;
    --lines: (
      @grid: 10x1 / 1.5em;
      position: absolute;
      left: 120%;
      top: 46%;
      @size: 3px 1px;
      background: #ddd;
      transform: rotate(calc(360deg / @I * @i));
      transform-origin: -.7em 50%;
    );
  }

  @keyframes move_sun {
    from { transform: scale(.5) }
    to { transform: scale(1) }
  }

  @keyframes move_moon {
    from { transform: rotate(0deg); }
    to { transform: rotate(-30deg); }
  }

  .dark {
    background: #ddd;
  }

  @media screen and (max-width: 26.25em) {
    button {
      transform: scale(.8);
    }
  }
</style>
