<template>
    <div class="home">
        <StaticPart/>
    </div>
    <div id="container">
        <Banner/>
        <CateMeau/>
        <Course/>
    </div>
    <bottom />
</template>
<script>
import StaticPart from './StaticPart.vue'
import Banner from './Banner.vue'
import CateMeau from './CateMeau.vue'
import Course from './Course.vue'
import bottom from '../../components/bottom.vue'

export default {
    name:'Home',
    components:{
        StaticPart,
        Banner,
        CateMeau,
        Course,
        bottom
    }
}
</script>
<style scoped lang='scss'>
#container{
      width: 100%;
      overflow: hidden;
      padding-bottom: 42px;
    }

</style>
