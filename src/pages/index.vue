<template>
  <div>
    <v-row v-if="isSummary">aaa</v-row>
    <v-row v-else class="flex-column">
      <v-col>
        <v-text-field v-model="habitList[habitNumber]"></v-text-field>
      </v-col>
      <v-col style="text-align:center;">
        <v-date-picker
          v-model="clickedDate"
          :events="eventDates"
          color="blue"
          no-title
          @click:date="onClickDate"
        ></v-date-picker>
      </v-col>
    </v-row>
    <v-row class="flex-column">
      <v-col>
        <v-pagination v-model="habitNumber" :length="10"></v-pagination>
      </v-col>
      <v-col style="text-align:center;">
        <v-btn depressed color="primary">一覧</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'

@Component({})
export default class Habituation extends Vue {
  private isSummary: boolean = true

  private habitNumber: number = 1

  private habitList: string[] = []

  private clickedDate: string = new Date().toISOString().substr(0, 10)

  private eventDates: string[] = []

  private onClickDate(value: string) {
    if (this.eventDates.includes(value)) {
      this.eventDates.splice(this.eventDates.indexOf(value), 1)
    } else {
      this.eventDates.push(value)
    }
  }

  private created() {
    //console.log(this.picker);
  }
}
</script>
<style lang="scss" scoped>
</style>