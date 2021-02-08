<template>
  <div>
    <v-row v-if="isSummary" class="pa-2">
      <v-col cols="6">
        <v-card class="pa-2">aaa</v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-2">aaa</v-card>
      </v-col>
    </v-row>
    <v-row v-else class="flex-column pa-2">
      <v-col>
        <v-text-field v-model="habitList[habitNumber]"></v-text-field>
      </v-col>
      <v-col cols="8" style="text-align:center;">
        <v-date-picker
          v-model="clickedDate"
          :events="eventDates"
          width="200"
          color="blue"
          no-title
          @click:date="onClickDate"
        ></v-date-picker>
      </v-col>
    </v-row>
    <v-row class="flex-column footer pa-2">
      <v-col>
        <v-pagination v-model="habitNumber" :length="10" @input="onClickPagination"></v-pagination>
      </v-col>
      <v-col style="text-align:center;">
        <v-btn
          depressed
          :color="summaryButtonColor"
          @click="onClickSummary"
          class="summary-button"
        >一覧</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'

@Component({})
export default class Habituation extends Vue {
  private isSummary: boolean = true

  private habitNumber: number = 0

  private habitList: string[] = []

  private clickedDate: string = new Date().toISOString().substr(0, 10)

  private eventDates: string[] = []

  private get summaryButtonColor() {
    return this.isSummary ? 'primary' : 'white'
  }

  private onClickDate(value: string) {
    if (this.eventDates.includes(value)) {
      this.eventDates.splice(this.eventDates.indexOf(value), 1)
    } else {
      this.eventDates.push(value)
    }
  }

  private onClickPagination() {
    this.isSummary = false
  }

  private onClickSummary() {
    this.isSummary = true
    this.habitNumber = 0
  }

  private created() {
    //console.log(this.picker);
  }
}
</script>
<style lang="scss" scoped>
.summary-button {
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}
.footer {
  position: fixed;
  bottom: 20px;
  width: 100%;
}
</style>