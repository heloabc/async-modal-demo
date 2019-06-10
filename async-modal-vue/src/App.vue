<template>
  <div id="app">
    <div>
      <el-button @click="openModal">open modal</el-button>
    </div>
    <div style="margin-top: 20px">
      {{result}}
    </div>
    <HelloWorld ref="asyncModal"/>
  </div>
</template>

<script>
import HelloWorld from './components/AsyncModal.vue'

export default {
  name: 'app',
  data() {
    return {
      result: ''
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    async openModal() {
      if (this.$refs.asyncModal) {
        try {
          const x = await this.$refs.asyncModal.open();
          this.result = `get result: ${x}`
        } catch(e) {
          this.result = `catch error: ${e}`;
        }
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
  position: absolute;
  width: 100%;
  top: 40%;
}
</style>
