<template>
  <v-row class="flex-column" align="center">
    <v-col cols="6">
      <v-text-field label="ユーザーID" />
    </v-col>
    <v-col cols="6">
      <v-text-field label="パスワード" />
    </v-col>
    <v-col cols="6">
      <v-btn @click="login" color="primary">ログイン</v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'

@Component({})
export default class Signup extends Vue {
  private async login() {
    try {
      // @ts-ignore
      const response = await this.$auth.loginWith('local', { data: {} })
      console.log('aaa')
    } catch (error) {
      console.log(this.$store)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>