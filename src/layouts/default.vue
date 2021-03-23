<template>
  <v-app class="app">
    <v-tabs>
      <v-tab>
        <nuxt-link to="/" tag="div">MyPage</nuxt-link>
      </v-tab>
      <v-tab>
        <nuxt-link to="/cheering" tag="div">応援</nuxt-link>
      </v-tab>
      <v-tab>
        <nuxt-link to="/likes" tag="div">いいね</nuxt-link>
      </v-tab>
    </v-tabs>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
.app {
  background: white;

  ::v-deep .v-tabs {
    flex: 0 1 auto !important;
  }
}
</style>