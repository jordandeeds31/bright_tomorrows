<template>
  <div>
    <navigation :theme="'dark'"/>
    <main>
      <Nuxt />
    </main>
    <navigationFooter />
  </div>
</template>

<script>
  import navigation from '~/components/navigation';
  import navigationFooter from '~/components/footer';

  export default {
    components: {
      navigation,
      navigationFooter
    }
  }
</script>


