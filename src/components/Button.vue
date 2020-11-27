<template>
    <div id = 'app'>
        <mt-button icon='back' type='primary' plain></mt-button>
        <mt-button icon='back' type='primary' ></mt-button>
        <mt-button icon='more' type='danger' plain ></mt-button>

 <mt-button type='default' >默认</mt-button>
 <mt-button type='primary'  >主要</mt-button>
 <mt-button type='danger' >危险</mt-button>
 <mt-button type='default'  size='small'>默认</mt-button>
 <mt-button type='primary' size='large' plain >主要</mt-button>
 <mt-button type='danger'  size='small'>危险</mt-button>
 <mt-button plain>幽灵</mt-button>
 <mt-button @click.native="handleClick" type='danger'>点击触发 handleClick</mt-button>
  <img src="../assets/logo.png" height="40" width="40" slot="icon">
  <mt-cell
  title="标题文字"
  to="//github.com"
  is-link
  value="带链接">
</mt-cell>
     </div>
</template>;

<script>
    export default{ 
          components:{

          }
     }
 </script>
 <style>

</style>