<template>
    <div class="calendar">
        <DateTimePickerCalendarMonth />
        <DateTimePickerCalendarGrid />
    </div>
</template>
<script>
import DateTimePickerCalendarGrid from './DateTimePickerCalendarGrid.vue'
import DateTimePickerCalendarMonth from './DateTimePickerCalendarMonth.vue'


import { dateTimeByArea, changeOfDateTimeByMonth, convertToDate,dateTimeFormatting } from './DateTimePicker'
import { provide, computed, ref, inject, onMounted, watch } from 'vue'

export default {
    name: "DateTimePickerCalendar",
    components: {
        DateTimePickerCalendarGrid,
        DateTimePickerCalendarMonth
    },
    
    props: {
        dateTime: {
            type: String,
            default: ''
        }
    },

    setup () {
        const currentDateTime = ref(new Date())
        const selectedDateTime = ref('')

        const { dateTime, changeDateTime } = inject('dateTime')

        onMounted(async() => {
            if (dateTime.value != '' ) {
                selectedDateTime.value = currentDateTime.value = new Date(dateTime.value)
            }
        })

        watch (dateTime, () => {
            selectedDateTime.value = currentDateTime.value = new Date(dateTime.value)
        })

        const currentDateTimeSeparately = computed(() => {
            return dateTimeByArea(currentDateTime.value)
        })

        const selectedDateTimeSeparately = computed(() => {
            return dateTimeByArea(selectedDateTime.value)
        })

        const changeCurrentMonth = (chosenDirection) => {
            currentDateTime.value = changeOfDateTimeByMonth(currentDateTime.value, chosenDirection)
        }

        const changeSelectedDateTime = (gridDay) => {
            selectedDateTime.value = convertToDate(currentDateTimeSeparately.value, gridDay)
            currentDateTime.value = selectedDateTime.value
            changeDateTime(dateTimeFormatting(selectedDateTime.value))
        }

        provide('calendarDateTime', { 
            currentDateTimeSeparately,
            selectedDateTimeSeparately,
            changeSelectedDateTime,
            changeCurrentMonth
        })
       
        return {
            currentDateTime,
            selectedDateTime,
            currentDateTimeSeparately
        }
    }
}
</script>
<style lang="scss" scoped>
    .calendar {
        display: inline-block;
        background-color: #fafafa;
        border: 1px solid #e3e3e3;
        border-radius: 2px;
        padding: 10px 5px;
    }
</style>