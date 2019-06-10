export default {
  data() {
    return {
      visible: false,
    }
  },
  watch: {
    visible(val) {
      if (!val) {
        if (typeof this.handleClear === 'function') {
          this.handleClear();
        }
        if (this.reject) {
          this.reject('放弃操作');
        }
      }
    }
  },
  methods: {
    open(...params) {
      this.visible = true;
      if (typeof this.handleInit === 'function') {
        this.handleInit(...params);
      }
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    handleResolve(...params) {
      delete this.reject;
      this.visible = false;
      if (this.resolve) {
        this.resolve(...params);
      }
    },
    close() {
      this.visible = false;
    }
  }
}