<template>
    <div class="datepicker___input">
        <input 
            :value="dateTime"
            @input="changeDateTime($event.target.value)"
        />
    </div>
</template>
<script>

import {  inject } from 'vue'

export default {
    name: "DateTimePickerInput",
    
    setup () {
        const { dateTime, changeDateTime } = inject('dateTime')

        return {
            dateTime,
            changeDateTime
        }
    }
}
</script>
<style lang="" scoped>
    
</style>