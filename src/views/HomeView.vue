<template>
  <div class="home">
      <DateTimePicker 
        v-model:date-time="dateTime"
        locale='ru'
      />
      {{ dateTime }}
  </div>
</template>

<script>
import DateTimePicker from '@/components/dateTimePicker/DateTimePicker.vue'
export default {
  name: "HomeView",
  components: {
    DateTimePicker
  },

  data () {
    return {
        dateTime: '2024-01-02'
    }
  }
}
</script>
