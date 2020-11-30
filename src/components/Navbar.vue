<template>
    <div>
<mt-navbar v-model="active">
  <mt-tab-item id="a"><img src="../assets/html5.png" alt="" slot="icon">HTML5</mt-tab-item>
  <mt-tab-item id="b"><img src="../assets/CSS.png" alt="" slot='icon'>CSS3</mt-tab-item>
  <mt-tab-item id="c"><img src="../assets/js.png" alt="" slot='icon'>JS</mt-tab-item>
</mt-navbar>
     </div>
</template>;

<script>
export default {
  data() {
      return{
          active:"c"
      }
  }
};
</script>
 <style>
</style>