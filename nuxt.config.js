export default {
  /*
   ** Modules - https://nuxtjs.org/docs/2.x/directory-structure/modules
   */
  modules: ['@nuxt/http'],

  env: {
    subdomain: process.env.SUBDOMAIN,
    email: process.env.EMAIL,
    token: process.env.TOKEN
  },
  
}

