<button reset on:click={handleClick}>
  {#if theme == 'dark'}
    <span class="toggle dark">
      <css-doodle>
        <style>
          @grid: 10x1 noclip;
          position: absolute;
          left: 50%;
          top: 50%;
          @size: 28px 1px;
          background: linear-gradient(to left, #ddd 3px, transparent 0);
          transform: translate(-50%, -50%) rotate(calc(360deg / @I * @i));
        </style>
      </css-doodle>
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
  button {
    width: 5em;
    height: 5em;
  }

  .toggle {
    border-radius: 50%;
    display: inline-block;
    width: 20px;
    height: 20px;
    transition: .2s ease;
    position: relative;
  }

  .light {
    box-shadow: inset 12px 0 0 #333;
    transform: rotate(-30deg);
    animation: move_moon .4s ease;
    animation-fill-mode: both;
  }

  .dark {
    width: 16px;
    height: 16px;
    background: #ddd;
  }

  css-doodle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; height: 100%;
    animation: move_sun .4s ease;
    animation-fill-mode: both;
  }

  @keyframes move_sun {
    from { transform: scale(.5) }
    to { transform: scale(1) }
  }

  @keyframes move_moon {
    from { transform: rotate(0deg); }
    to { transform: rotate(-30deg); }
  }

  @media screen and (max-width: 26.25em) {
    button {
      transform: scale(.8);
      transform-origin: 100% 0;
    }
  }
</style>
