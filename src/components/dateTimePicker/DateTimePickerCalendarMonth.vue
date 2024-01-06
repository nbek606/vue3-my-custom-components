<template>
    <div class="month">
        <div 
            class="month___prev" 
            @click="changeCurrentMonth(0)"        
        />
        <div class="month___name">
            {{ monthName }} {{  currentDateTimeSeparately.year }}
        </div>
        <div 
            class="month___next" 
            @click="changeCurrentMonth(1)"
        />
    </div>
</template>
<script>
import { monthesByLocale } from './DateTimePicker'
import { inject, computed } from 'vue'
export default {
    name: "DateTimePickerCalendarMonth",

    setup () {
        const locale = inject('locale')
        const { currentDateTimeSeparately, changeCurrentMonth }= inject('calendarDateTime')

        const monthName = computed(() => monthesByLocale[locale][currentDateTimeSeparately.value.month])

        return {
            locale,
            currentDateTimeSeparately,
            changeCurrentMonth,
            monthName
        }
    }
}
</script>
<style lang="scss" scoped>
    .month {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 0px;
        
        &___name {
            color: #4d4d4d;
            min-width: 100px;
            text-align: center;
        }

        &___next, &___prev {
           color: transparent;
           display: block;
           width: 11px;
           height: 11px;
           margin: 0 10px;
           position: relative;
           cursor: pointer;

           &::after, &::before {
                content: "";
                display: block;
                position: absolute;
                background-color: #4d4d4d;
           }

           &::after {
                width: 20%;
                height: 70%;
           }

           &::before {
                width: 70%;
                height: 20%;
           }
        }

        &___next {
            transform: rotate(135deg);
        }

        &___prev {
            transform: rotate(-45deg);
        }
    }
</style>