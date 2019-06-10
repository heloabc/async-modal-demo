<template>
  <div id="app">
    <div>
      <el-button @click="openModal">open modal</el-button>
    </div>
    <HelloWorld ref="asyncModal"/>
  </div>
</template>

<script>
import HelloWorld from './components/AsyncModal.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  methods: {
    async openModal() {
      if (this.$refs.asyncModal) {
        const result = await this.$refs.asyncModal.open();
        console.log(result)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
