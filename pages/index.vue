<template>
  <div>
    <div class="my-fullback-img" :style="{backgroundImage : 'url('+introBackImgUrl+')'}">
    </div>
    <h1 class="my-center-title">{{blogName}}</h1>
    <h2 class="my-center-second-title" style="margin-top: 20px;">{{blogIntro}}</h2>
    <div class="my-double-circle-icon" :style="{marginTop : '0px',backgroundImage : 'url('+introIconImgUrl+')'}"></div>
    <div class="container" style="margin-top: 10px;">
      <Row type="flex" justify="center">
        <Col :xs="20" :md="4" class="my-col-container">
          <hr class="lite"/>
          <h2 class="my-intro-title">标签</h2>
          <br/>
          <div class="my-tag-group">
            <Tag v-for="introTag in introTagList" color="#78A4FA" style="font-size: 14px">{{introTag}}</Tag>
          </div>
          <br/><br/>
          <hr class="lite"/>
          <br/>
          <h2 class="my-intro-title">关于我</h2>
          <img class="my-img-rectangle" :src="introIconImgUrl" style="margin-top: 30px;margin-bottom:10px;width: 70%">
          <p class="my-p">不写代码会死星人</p>
          <p class="my-p">新技术会让我狂热</p>
        </Col>
        <Col :xs="20" :md="18" class="my-col-container" style="padding-top: 40px">
          <div class="my-blog-item" v-for="item in testItems">
            <div class="my-blog-title">下一代 Web 应用模型 —— Progressive Web App</div>
            <p class="my-blog-intro">近年来，Web 应用在整个软件与互联网行业承载的责任越来越重，软件复杂度和维护成本越来越高，Web 技术，尤其是 Web 客户端技术，迎来了爆发式的发展。
              包括但不限于基于 Node.js 的前端工程化方案；诸如 Webpack、Rollup 这样的打包工具；Babel、PostCSS 这样的转译工具；TypeScript、Elm 这样转译至 JavaScript
              的编程语言；React、Angular、Vue 这样面向现代 web 应用需求的前端框架及其生态，也涌现出了像同构 JavaScript与通用 JavaScript 应用这样将服务器端渲染（Server-side
              Rendering）与单页面应用模型（Single-page App）结合的 web 应用架构方式，可以说是百花齐放。</p>
            <div class="my-blog-footer">Posted by Anthony on February 9, 2017</div>
            <hr class="lite">
          </div>
        </Col>
      </Row>
    </div>
    <br/> <br/> <br/><br/> <br/> <br/><br/> <br/> <br/><br/> <br/> <br/><br/> <br/> <br/><br/> <br/> <br/> <br/> <br/>
    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </div>
</template>

<script>
  export default {
    name: "intro",
    data: function () {
      return {
        blogName: 'MY BLOG',
        blogIntro: '—— 挣扎着在极客路上前进',
        introBackImgUrl: 'imgs/back1.jpg',
        introIconImgUrl: 'imgs/icon.jpg',
        introTagList: ['前端', 'Vue', '微服务', 'docker', 'webpack', 'express', 'CI'],
        testItems: [{}, {}, {}, {}]
      }
    },
    mounted: () => {

    }
  }
</script>

<style scoped>

</style>
