<template>
  <div>
    <img src="~/assets/logo.svg" />
    <h1>Data fetched using asyncData</h1>
    <ul>
      <li v-for="article in articles" :key="articles.title">
        <NuxtLink :to="{ name: 'articles-slug', params: {slug: article.id } }">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
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
  async asyncData({ $http }) {
    const response = await $http.$get(
      `https://${process.env.subdomain}.zendesk.com/api/v2/help_center/articles`,
      config
    );
    const articles = response.articles;
    return { articles };
  },
};
</script>
