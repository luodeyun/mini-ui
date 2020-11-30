<template>
<div id='add' >
  <!-- 顶部导航开始 -->
  <div class='top' fixed>
     <mt-header title="学前端，到学问">
       <div slot='right' class='shortcut'>
           <router-link to='register'>注册</router-link>
           <router-link to='login'>登录</router-link>
        </div>
     </mt-header>
  <!-- 顶部导航结束 -->

  <!-- 顶部选项卡开始 -->
     <mt-navbar v-model="active">
          <mt-tab-item id='1'><h1>推荐</h1 ></mt-tab-item>
          <mt-tab-item id='2'><h1>生活</h1></mt-tab-item>
          <mt-tab-item id='3'><h1>娱乐</h1></mt-tab-item>
          <mt-tab-item id='4'><h1>汽车</h1></mt-tab-item>
       </mt-navbar>
  <!-- 顶部选项卡结束 -->
   </div>
  <!-- 面板区域开始 -->
   <mt-tab-container v-model="active" class='main'>
       <mt-tab-container-item id='1'>
             <div class="articleItem" v-for="(v,k) of 10" :key='k'>
          <!-- 文章标题开始 -->
          <div class="articleItem-header">
            税后年薪十万、二十万、三十万的汽车工程师的真实生活
          </div>
          <!-- 文章标题结束 -->
          <!-- 文章图文信息开始 -->
          <router-link :to="`/article/${k}`">
          <div class="articleItem-wrapper" >
            <!-- 文章图像开始  -->
            <div class="articleImg">
              <img
                src="../assets/11.jpg"
              />
            </div>
            <!-- 文章图像结束 -->
            <!-- 文章简介开始 -->
            <div class="articleDes">
              第一次回答这么私密的问题，紧张兮兮！跟众多行业前辈比起来，我可能是一个汽车界的萌新了，研究生毕业工作还不满两年。工资水平自然也是处于第一档。自报一下家门，目前在上汽乘用车工作，市场部，虽然目前做的是市场部工作，但是本科研究生读的都是车辆工程专业，而且由于对汽车的喜欢，也一直没有完全丢掉。所以在我们品牌传播这里，涉及到底层机械电气等原理的部分，一般都会来问问我，算是一项差异化优势吧。上汽乘用车地处于
            </div>
            <!-- 文章简介结束 -->
          </div>
          </router-link>
          <!-- 文章图文信息结束 -->
        </div>
       </mt-tab-container-item>
       <mt-tab-container-item id='2'>2</mt-tab-container-item>
       <mt-tab-container-item id='3'>3</mt-tab-container-item>
       <mt-tab-container-item id='4'>4</mt-tab-container-item>
   </mt-tab-container>
  <!-- 面板区域结束 -->

  <!-- 底部选项卡start -->
  <mt-tabbar v-model="selectedTab" fixed>
      <mt-tab-item id='index'> <img src="../assets/myhome2.png" alt="" slot='icon' v-if="selectedTab=='index'"> <img src="../assets/myhome.png" alt="" slot='icon'  v-else >首页</mt-tab-item>
      <mt-tab-item id='me'>    <img src="../assets/my2.png" alt="" slot='icon' v-if="selectedTab=='me'"> <img src="../assets/my.png" alt="" slot='icon' v-else>我的</mt-tab-item>   
  </mt-tabbar>
  <!-- 底部选项卡end -->
</div>
</template>;

<script>
export default {
  data() {
    return {
      active: "1",
      selectedTab: "index"
    };
  }
};
</script>
 <style scoped>
#add {
    width: 100%;
  overflow: hidden;
}
.shortcut a {
  display: inline-block;
  margin-left: 5px;
  color: #fff;
}
.top {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 999;
}
.main {
  margin-top: 90px;
  margin-bottom: 55px;
  overflow:scroll;
}
.articleItem-header {
  font-weight: 600;
  font-size: 17px;
  color: #1a1a1a;
  line-height: 22px;
}
.articleItem-wrapper {
  display: flex;
  align-items: center;
  padding-top: 10px;
  width: 100%;
}
.articleImg {
  margin-right: 15px;
}
.articleImg img {
  width: 112px;
  height: 74px;
  border-radius: 5px;
}
.articleDes {
  height: 65px;
  font-size: 15px;
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis;
  line-height: 21px;
  letter-spacing: normal;
  color: #444;
}
.articleItem {
  padding: 10px 0;
  margin: 0 10px;
  border-bottom: 1px solid #999;
}
</style>