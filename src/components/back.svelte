<a href="#" class="back" on:click|preventDefault={onClose}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
  <span>Back</span>
</a>

<script>
  export let onClose;
</script>

<style>
  .back {
    display: inline-flex;
    align-items: center;
    margin-top: 1em;
  }

  svg {
    width: 1em;
    margin-right: 5px;
  }
</style>
