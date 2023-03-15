<template>
  <div v-if="isActive" class="bg-cover w-full h-screen flex justify-center items-center">
    <div class="h-fit text-cover">
      <p class="text-[190px] font-black text-white m-0 leading-none">
        Simple
      </p>
      <p class="text-[190px] font-black text-white ease-in m-0 leading-none">
        Quicks
      </p>
    </div>
  </div>
  <div v-else>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'LayoutsMain',
  data () {
    return {
      isActive: this.$store.state.home.isActive
    }
  },
  created () {
    setTimeout(() => {
      this.isActive = false
    }, 4000)
  }
}
</script>
<style scoped>
.bg-cover {
  animation-name: fadeInCover;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
}

.text-cover {
  animation-name: fadeInText;
  animation-delay: 1s;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  opacity: 0;
}

/* .text-cover {
  animation-name: fadeOut;
  animation-delay: .8s;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
} */

@keyframes fadeInCover {
  0% {opacity: 0;}
  100% {opacity: 1; background: #0F8A69;}
}

@keyframes fadeInText {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

/* @keyframes fadeOut {
  0% {opacity: 1;}
  100% {opacity: 0}
} */
</style>
