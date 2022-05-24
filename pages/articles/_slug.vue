<template>
  <article>
    <h1>{{ article.title }}</h1>
    <section>
      {{ article.body }}
    </section>
    <button @click="goBack">Back</button>
  </article>
</template>
<script>

const encodedToken = Buffer.from(
  `${process.env.email}/token:${process.env.token}`
).toString("base64");

const config = {
  headers: {
    Authorization: `Basic ${encodedToken}`,
    "Content-Type": "application/json",
  },
};
export default {
  async asyncData({ $http, params }) {
    const response = await $http.$get(
      `https://${process.env.subdomain}.zendesk.com/api/v2/help_center/articles/${params.slug}.json`, config
    )
    const article = response.article
    return { article }
  },
  methods: {
    goBack() {
      return this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
article {
  max-width: 600px;
  margin: 0 auto;
}
img {
  height: 200px;
}
p {
  text-align: left;
}
</style>
