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
     <mt-navbar v-model="active" > 
          <mt-tab-item :id='`${index+1}`' v-for="(item,index) of category" :key='index'>{{item.category_name}}</mt-tab-item>
      </mt-navbar>
  <!-- 顶部选项卡结束 -->
   </div>
  <!-- 面板区域开始 -->
  <div class ='main' 
         v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10"
         infinite-scroll-immediate-check=true
          >
   <mt-tab-container class='main'>
       <mt-tab-container-item >
        <div class="articleItem" v-for="(item, index) of articles " :key="index"   >
           <router-link :to="`/article/${index}`">
          <!-- 文章标题开始 -->
              <div class="articleItem-header">
                  {{item.subject}}
              </div>
          <!-- 文章标题结束 -->
          <!-- 文章图文信息开始 -->
              <div class="articleItem-wrapper" >
            <!-- 文章图像开始  -->
                     <div class="articleImg">
                       <img v-lazy="`/articles/${item.image}`"/>
             </div>
            <!-- 文章图像结束 -->
            <!-- 文章简介开始 -->
              <div class="artic leDes">
                {{item.description}}
              </div>
            <!-- 文章简介结束 -->
             </div>
          </router-link>
          <!-- 文章图文信息结束 -->
        </div>
       </mt-tab-container-item>          
   </mt-tab-container></div>
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
      selectedTab: "index",
      category: [],
      articles: [],
      page:1,
    loading : false
    };
  },
  methods: {
    loadMore() {
      this.loading=true
      this.page++;
     this.axios
        .get("http://localhost:3001/articles", {
          params: { 
            id: this.active, 
            page:this.page 
          }
        })
        .then(res => {
           this.articles = res.data.results;
           console.log('现在要去服务器获取第二页数据',this.page);
           this.loading=false
      })
  }},
  mounted() {
    this.axios({
      method: "GET",
      url: "http://localhost:3001/haha"
    }).then(res => {
      this.category = res.data.results;
    });
    this.axios
      .get("http://localhost:3001/articles", {
        params: { 
          id: this.active, 
          page:this.page  
        }
      })
      .then(res => {
        this.articles = res.data.results;
      });
  },
  watch: {
    active(neval){
      this.page=1
      this.axios.get('http://localhost:3001/articles',{
        params:{id:neval,page:this.page}
      }).then(res=>{
        this.atcicles=[]
         this.articles = res.data.results;
      })
    } 
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
  /* overflow: scroll; */
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