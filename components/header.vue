<template>
    <header class="my-header" :class="{'my-back-transparent': isTop}">
      <ul class="my-nav-list pull-right">
        <nuxt-link :to="item.link" class="my-nav-item" v-for="item in navItems" >{{item.name}}</nuxt-link>
      </ul>
    </header>
</template>

<script>
  export default {
    data: function () {
      return {
        navItems: [
          {name: '首页', isActive: true,link:'/'},
          {name: '博客', isActive: false,link:'/blogs'},
          {name: '教程', isActive: false,link:'/blogs'},
          {name: '联系我', isActive: false,link:'/blogs'}],
        isTop: true
      }
    },
    mounted: function () {
      var self=this;
      window.onscroll = function () {
        const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
        if (scrollTop > 0) {
          if (self.isTop)
            self.isTop = false;
        } else {
          if (!self.isTop)
            self.isTop = true;
        }
      }
    }

  }
</script>

<style>

</style>
