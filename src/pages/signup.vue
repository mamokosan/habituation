<template>
  <v-row class="flex-column" align="center">
    <v-col cols="6">
      <v-text-field label="ユーザーID" />
    </v-col>
    <v-col cols="6">
      <v-text-field label="パスワード" />
    </v-col>
    <v-col cols="6">
      <v-btn color="primary">新規作成</v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'

@Component({})
export default class Signup extends Vue {
  private created() {
    //console.log(this.picker);
  }
}
</script>
<style lang="scss" scoped>
</style>