<Popup onClose={onClose} bind:this={popup}>
  <article>
    <h1>About</h1>
    <p>
      This tool is for discovering new CSS polygon shapes generated with <a href="https://css-doodle.com">css-doodle</a>
      and mathematical functions.
    </p>
    <p>
      The rules can be composed with
      <a href="https://en.wikipedia.org/wiki/Polar_coordinate_system">polar equations</a>
      or <a href="https://en.wikipedia.org/wiki/Cartesian_coordinate_system">cartesian equations</a>.
    </p>

    <h2>Available commands</h2>
    <ul>
      <li>
        <strong>fill-rule</strong>
        <span>nonzero | evenodd</span>;
      </li>
      <li>
        <strong>split</strong>
        <span>number between 3 - 2400</span>;
      </li>
      <li>
        <strong>rotate</strong>
        <span>number in degree</span>;
      </li>
      <li>
        <strong>scale</strong>
        <span>number for scale factor</span>;
      </li>
      <li>
        <strong>x</strong>
        <span>x coordinate for cartesian equation</span>;
      </li>
      <li>
        <strong>y</strong>
        <span>y coordinate for cartesian equation</span>;
      </li>
      <li>
        <strong>r</strong>
        <span>polar equation</span>;
      </li>
    </ul>

    <h2>Operations</h2>
    <ul>
      <li>Operations available: <em>+ - * / %</em></li>
      <li>
        All JavaScript Math functions and constants can be used.
        Such as
        <em>sin</em>,
        <em>cos</em>,
        <em>tan</em>,
        <em>PI</em> or <em>π</em> etc.
      </li>
    </ul>

    <Back on:click={handleBack} />
  </article>
</Popup>

<script>
  import Popup from './popup.svelte';
  import Back from './back.svelte';

  export let onClose;
  let popup;

  function handleBack(e) {
    popup.handleClose(e);
  }
</script>

<style>
  h1 {
    font-size: 2em;
  }
  article {
    font-size: 1.2em;
    max-width: 40em;
    padding: 3em 2em;
    margin: 0 auto;
    line-height: 1.6;
  }

  h2 {
    margin-top: 1.5em;
  }

  strong {
    display: inline-block;
    width: 4em;
    font-weight: normal;
    color: #fff;
    margin-right: .5em;
  }

  em {
    color: #fff;
  }

  @media screen and (max-width: 32.25em) {
    strong {
      display: block;
      margin: 0;
    }
  }
</style>
