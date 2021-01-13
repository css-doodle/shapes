{#if display }
<div class="container" bind:this={ref}>
  <div class="body">
    <slot></slot>
    <a href="#" class="close" on:click|preventDefault={handleClose}>
      <svg viewBox="0 0 10 10">
        <g stroke="currentColor" stroke-width=".5">
          <line x1="1" y1="1" x2="9" y2="9" />
          <line x1="9" y1="1" x2="1" y2="9" />
        </g>
      </svg>
    </a>
  </div>
</div>
{/if}

<script>
  import { onMount, onDestroy } from 'svelte';

  export let display = true;
  export let onClose = null;
  export let onOpen = null;

  let ref;

  export function handleClose(e) {
    display = false;
    if (typeof onClose == 'function') onClose();
    if (history.replaceState) {
      history.replaceState('', '', '#');
    }
  }

  function handleOpen() {
    if (typeof onOpen == 'function') {
      onOpen();
    }
  }

  function handleESC(e) {
    if(e.key === "Escape") {
      handleClose(e);
    }
  }

  function handleHashChange(e) {
    if (!location.hash) {
      handleClose(e);
    }
  }

  onMount(() => {
    document.body.appendChild(ref);
    handleOpen();
    document.addEventListener('keyup', handleESC);
    window.addEventListener('hashchange', handleHashChange);
    document.body.classList.add('noscroll');
  });

  onDestroy(() => {
    document.removeEventListener('keyup', handleESC);
    window.removeEventListener('hashchange', handleHashChange);
    document.body.classList.remove('noscroll');
  });
</script>

<style>
  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-bg);
    z-index: 9;
    overflow: auto;
    animation: slide-up .3s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .body {
    height: 100%;
  }

  :global(.noscroll) {
    overflow: hidden;
  }

  @keyframes slide-up {
    from {
      transform: translateY(16px);
    }
    to {
      transform:  translateY(0);
    }
  }

  .close {
    position: absolute;
    right: 2em;
    top: 2em;
    width: 2em;
    height: 2em;
    z-index: 3;
    cursor: pointer;
    line-height: 0;
    color: var(--color-main);
    transform: rotate(45deg);
    animation: rotate .2s;
    opacity: 0;
    animation-fill-mode: both;
    animation-delay: .2s;
  }
  svg {
    width: 100%;
    height: 100%;
  }

  @keyframes rotate {
    to {
      opacity: 1;
      transform: rotate(0deg);
    }
  }
</style>
