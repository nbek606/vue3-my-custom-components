<template>
    <div class="grid">
        <div 
            class="grid___week"
            v-for="(daysOfTheWeekGrid, index) in monthlyGridBySelectedDate"
            :key="index + 'w'"
        >
            <div 
                class="grid___day"
                v-for="(gridDay, index) in daysOfTheWeekGrid"
                :key="gridDay + index + 'd'"
                @click="changeSelectedDateTime(gridDay)"
                :class="
                    {
                        'grid___day__current': dayIsTheCurrentDay(gridDay),
                        'grid___day__selected': dayIsTheSelectedDay(gridDay)
                    }
                    "
            >
                {{ gridDay }}    
            </div>
        </div>
    </div> 
</template>
<script>
import { monthlyGrid, checkForTheCurrentDay, checkForTheSelectedDay  } from './DateTimePicker'
import { inject, computed } from 'vue'
export default {
    name: "DateTimePickerCalendarGrid",

    setup () {
        const { currentDateTimeSeparately, selectedDateTimeSeparately, changeSelectedDateTime } = inject('calendarDateTime')
        const monthlyGridBySelectedDate = computed(() => monthlyGrid(currentDateTimeSeparately.value.month, currentDateTimeSeparately.value.year))

        const dayIsTheCurrentDay = computed(() => {
            return (gridDay) => {
                return checkForTheCurrentDay(gridDay, currentDateTimeSeparately.value)
            }
        })

        const dayIsTheSelectedDay = computed(() => {
            return (gridDay) => {
                return checkForTheSelectedDay(gridDay, selectedDateTimeSeparately.value, currentDateTimeSeparately.value)
            }
        })

        return {
            monthlyGridBySelectedDate,
            dayIsTheCurrentDay,
            dayIsTheSelectedDay,
            changeSelectedDateTime
        }
    }
}
</script>
<style lang="scss" scoped>
    .grid  {
        
        &___week {
            display: flex;
        }

        &___day {
            display: flex;
            width: 20px;
            height: 20px;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: #40444d;
            font-size: 400;
            border-radius: 5px;
            padding: 5px;

            &__current {
                background-color: #bbcbd5;
                color: #fff;
            }

            &__selected {
                background-color: #3b5cb3;
                color: #fff;
            }
        }
    }
</style>