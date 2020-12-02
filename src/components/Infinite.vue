<template>
    <div id = 'app'>
       <ul
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
        <li v-for="(item,index) of list" :key='index'>{{ item }}</li>
       </ul>
     </div>
</template>;
<script>
export default {
  data() {
    return {
      list: [1,2,3,4,5,6,7,8,9,0],
      loading:false
    };
  },
  components: {},
  methods: {
    loadMore() {
      this.loading = true;
    // this.$indicator.open({
    //   text:'加载中。。。',
    //   spinnerType: 'triple-bounce'
    // })
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        // this.$indicator.close()
        this.loading = false;
      }, 2500);
    }
  }
};
</script>
 <style>
</style>