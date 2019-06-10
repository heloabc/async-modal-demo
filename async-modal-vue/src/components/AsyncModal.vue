<template>
  <el-dialog :visible.sync="visible">
    <div>
      you can check result in devtool
    </div>
    <el-input v-model="text"></el-input>
     <div style="text-align: right; margin-top: 15px">
      <el-button size="small" @click="close">取消</el-button>
      <el-button size="small" type="primary" @click="handleOk">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
import modal_mixin from './modal_mixin';

export default {
  name: 'AayncModal',
  mixins: [modal_mixin],
  data() {
    return {
      text: ''
    }
  },
  methods: {
    handleOk() {
      this.handleResolve(this.text);
    }
  }
}
</script>
