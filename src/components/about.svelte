<Popup onClose={onClose} bind:this={popup}>
  <article>
    <h1>About</h1>
    <p>
      This tool is for discovering new CSS polygon shapes generated with
      <a href="https://css-doodle.com">css-doodle</a> <em>@shape</em> function
      and mathematical expressions.
      Read more about its usage: <a href="https://yuanchuan.dev/polygon-shapes">https://yuanchuan.dev/polygon-shapes</a>.
    </p>

    <h2>Commands</h2>
    <ul>
      <li>
        <strong>fill</strong>
        <span>nonzero | evenodd</span>;
      </li>
      <li>
        <strong>frame</strong>
        <span>number for frame size</span>;
      </li>
      <li>
        <strong>points</strong>
        <span>number between 3 - 3600</span>;
      </li>
      <li>
        <strong>rotate</strong>
        <span>number in degree for rotation</span>;
      </li>
      <li>
        <strong>scale</strong>
        <span>number for scale factor</span>;
      </li>
      <li>
        <strong>move</strong>
        <span>a pair of value for translating <code>x, y</code> coords</span>;
      </li>
      <li>
        <strong>turn</strong>
        <span>angle between start/end point, defaults to be 1</span>;
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

    <h2>Operations in equations</h2>
    <ul>
      <li>Operations available: <em>+ - * / % ^ | &</em></li>
      <li>
        All JavaScript Math functions and constants are supported.
        Such as
        <em>sin</em>,
        <em>cos</em>,
        <em>tan</em>,
        <em>abs</em>,
        <em>pow</em>,
        <em>PI</em> or <em>π</em> etc.
      </li>
    </ul>

    <h2>Variables</h2>
    <div class="detail">
      <p>
        Everything declared is considered a variable.
      </p>
    </div>

    <Back onClose={handleBack} />
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
    max-width: 40em;
    padding: 3em 2em;
    margin: 0 auto;
    line-height: 1.6;
  }

  .detail {
    margin-left: 2em;
  }

  ul {
    line-height: 1.4;
  }

  ul li + li {
    margin-top: 4px;
  }

  h2 {
    margin-top: 1.5em;
  }

  strong {
    display: inline-block;
    width: 4em;
    font-weight: normal;
    color: var(--color-emphasis);
    margin-right: .5em;
  }

  em {
    color: var(--color-emphasis);
  }

  @media screen and (max-width: 32.25em) {
    strong {
      display: block;
      margin: 0;
    }
  }
</style>
