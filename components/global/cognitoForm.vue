<template>
  <div class="cognito"></div>
</template>

<script>
  export default {
    props: {
      id: {
        type: Number //Cognito form id
      }
    },
    /**
     * When the component mounts, inject each element in the HTML string into the root element.
     */
    mounted() {
      if (process.browser) {
        Cognito.load("forms", { id: this.id });
      }
    }
  }
</script>
