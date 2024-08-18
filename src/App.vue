<template>
  <Navbar />
  <div v-if="!toggle">
    <MainComp />
  </div>
  <div v-else>
    <About />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import MainComp from './components/MainComp.vue';
import About from './components/About.vue';
import { ref, onMounted } from 'vue'
import { useStore } from './store/store';
import { storeToRefs } from 'pinia';

const store = useStore();

const { toggle } = storeToRefs(store);

// 앱이 실행되면 날씨 데이터 가져오는 로직
onMounted(() => {
  store.getWeather();
})

</script>

<style lang="scss" scoped></style>