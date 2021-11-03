<template>
   <header>
        <!-- <span class="iconfont logo">&#xe601;</span> -->
        <div class="address"><span class="iconfont">&#xe652;</span>人民广场</div>
        <span class="iconfont meau">&#xe790;</span>
    </header>
    <div class="searchDiv">
      <input type="text" class="search" placeholder="请搜索感兴趣的店铺">
      <span class="iconfont">&#xe600;</span>
    </div> 
    
</template>
<style scoped lang='scss'>
    header{
      display: flex;
      width: 100%;
      padding: 10px 0;
      // background-color: #f23030;
    }
    .address{
      flex: 1;
      margin-left: .1rem;
    }
    .logo,.meau{
      margin: 0 20px;
    }
    .searchDiv{
      position: relative;
        .search{
          display: block;
          border-radius: 10px;
          width: 80%;
          outline: none;
          border:1px solid #999;
          padding: 1% 5%;
          margin: 0 auto;
      }
      .iconfont{
        position: absolute;
        right: 8%;
        top: 50%;
        transform: translate(0,-50%);
      }
    }
     
</style>