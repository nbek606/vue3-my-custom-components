<template>
    <div class="datepicker">
        <DateTimePickerInput 
            :date-time="dateTime"
        />
        <DateTimePickerCalendar 
            :date-time="dateTime"
        />
    </div>
</template>
<script>
import DateTimePickerInput from './DateTimePickerInput.vue'
import DateTimePickerCalendar from './DateTimePickerCalendar.vue'
import { computed, provide } from 'vue'

export default {
    name: "DateTimePicker",
    components: {
        DateTimePickerInput,
        DateTimePickerCalendar
    },

    props: {
        dateTime: {
            type: String,
            default: ''
        },
        locale:{
            type: String,
            default: ''
        }
    },

    setup (props, context) {
        provide('locale', props.locale)

        const dateTime = computed(() => {
            return props.dateTime
        })

        const changeDateTime = (newDateTime) => {
            context.emit('update:date-time', newDateTime)
        }

        provide('dateTime', {
            dateTime,
            changeDateTime
        })
    }
}
</script>
<style lang="scss" scoped>
    
</style>