<template>
  <div class="donation">
    <navigation theme="dark" :menu="false"/>
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


