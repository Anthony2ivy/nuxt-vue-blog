<template>
  <div>
    <div class="my-fullback-img" :style="{backgroundImage : 'url('+backImgUrl+')'}">
    </div>
    <h1 class="my-center-title">{{pageName}}</h1>
    <h2 class="my-center-second-title" style="margin-top: 20px;">{{pageIntro}}</h2>
    <div class="container my-blog-container" style="padding:30px 10% 0 10%;margin-top: 50px;">
      <div class="my-timeline">
        <div class="my-timeline-item year">2018</div>
        <div class="my-timeline-item" v-for="item in testItems">
          <div class="my-timeline-item__time">{{item.time}}</div>
          <div class="my-timeline-item__block clearfix">
            <div class="my-timeline-item__title">{{item.title}}</div>
            <div class="my-tag-group pull-right">
              <Tag color="#78A4FA" style="font-size: 13px">Webpack</Tag>
              <Tag color="#78A4FA" style="font-size: 13px">Webpack</Tag>
            </div>
          </div>
        </div>
        <div class="my-timeline-item year">2017</div>
        <div class="my-timeline-item" v-for="item in testItems">
          <div class="my-timeline-item__time">{{item.time}}</div>
          <div class="my-timeline-item__block clearfix">
            <div class="my-timeline-item__title">{{item.title}}</div>
            <div class="my-tag-group pull-right">
              <Tag color="#78A4FA">Webpack</Tag>
              <Tag color="#78A4FA">Webpack</Tag>
              <Tag color="#78A4FA">Webpack</Tag><Tag color="#78A4FA">Webpack</Tag><Tag color="#78A4FA">Webpack</Tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "blogs",
    data: function () {
      return {
        backImgUrl: 'imgs/blog-back.jpg',
        pageName: 'BLOGS',
        pageIntro: '—— 每天记录一点,总有一天会成为大牛',
        testItems: [{time: '6-02', title: '下一代 Web 应用模型 —— Progressive Web App'}, {
          time: '6-02',
          title: 'asdasdasdasdddasdasdasasdasdasdasdsadasda'
        }, {
          time: '6-02',
          title: 'asdasdaasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdaasdasdasdasdasdaasdasdasdasdasdaasdasdasdasdasdaasdasdasdasdasdaasdasdasdasdasdaasdasdasdasdasdaasdasdasdasdasdaasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdsd'
        }],
      };
    },
    mounted: () => {
      let els = document.getElementsByClassName('my-timeline-item');
      for (let el of els) {
        el.ontouchstart = () => {
          this.className=this.className+' hover';
        };
        el.ontouchend = () => {
          this.className=this.className.replace(/hover/g,'');
        };
      }
    },
    components:{
    }
  }
</script>

<style scoped>

</style>
