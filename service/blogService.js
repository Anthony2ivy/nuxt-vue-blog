const axios = require('axios')
const websiteConfig = require('../website.config')
const localBlogAxiosInstance=axios.create({
  baseURL:websiteConfig.localRestBaseUrl
});
const restBlogAxiosInstance=axios.create({
  baseURL:websiteConfig.restBaseUrl
});

class BlogService {
  constructor(axiosInstance){
    this.axiosInstance=axiosInstance;
  }
  async getBlogs(){
    return await this.axiosInstance.get('/rest/blogs');
  }
}

module.exports={
  localBlogService:new BlogService(localBlogAxiosInstance),
  restBlogService:new BlogService(restBlogAxiosInstance)
}
