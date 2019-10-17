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
          <div class="my-blog-item" v-for="blog in blogs">
            <div class="my-blog-title">{{blog.title}}</div>
            <p class="my-blog-intro">{{blog.intro}}</p>
            <div class="my-blog-footer">{{blog.createdAt}}</div>
            <hr class="lite">
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
    import {localBlogService} from '../service/blogService'

    export default {
        name: "intro",
        data: function () {
            return {
                blogName: 'MY BLOG',
                blogIntro: '—— 挣扎着在极客路上前进',
                introBackImgUrl: 'imgs/back1.jpg',
                introIconImgUrl: 'imgs/icon.jpg',
                introTagList: ['前端', 'Vue', '微服务', 'docker', 'webpack', 'express', 'CI'],
                blogs: [],
            }
        },
        async asyncData() {
            let blogsResponse = await localBlogService.getBlogs();
            return {blogs: blogsResponse.data}
        },
        mounted: () => {

        }
    }
</script>

<style scoped>

</style>
