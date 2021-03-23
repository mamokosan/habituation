<template>
  <div>
    <v-row dense>
      <v-col cols="12" v-for="habit in habits" :key="habit.habit_id">
        <v-card>
          <v-card-title>{{ habit.habit_title}}</v-card-title>
          <v-card-text>
            <v-icon>mdi-human-handsdown</v-icon>
            {{ habit.done_count}}
            <v-icon>mdi-heart</v-icon>
            {{ habit.like_count}}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'

@Component({})
export default class Index extends Vue {
  private habits = []

  private async getHabits() {
    const response = await this.$axios.get('/api/habits', {
      params: { user_id: 'mamorin' },
    })
    this.habits = response.data
  }

  private async created() {
    await this.getHabits()
  }
}
</script>
<style lang="scss" scoped>
</style>