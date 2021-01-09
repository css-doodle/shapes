<div class="toggler" on:click={toggle}>
  <span>{name}</span>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>
</div>

<script>
  export let onChange;
  let name = 'css';

  function toggle() {
    name = (name == 'css' ? 'rule' : 'css');
    if (typeof onChange === 'function') {
      onChange(name);
    }
  }
</script>

<style>
  .toggler {
    position: absolute;
    right: 0;
    top: 0;
    color: rgba(255, 255, 255, .8);
    padding: 4px 5px;
    font-family: verdana;
    background: rgba(255, 255, 255, .1);
    border-radius: 0 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: .2s ease;
    user-select: none;
  }

  .toggler:hover {
    background: rgba(255, 255, 255, .15);
    color: #fff;
  }

  .toggler svg {
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-left: 5px;
  }

  .toggler span {
    text-transform: uppercase;
  }
</style>
