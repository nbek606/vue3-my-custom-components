

export const monthesByLocale = {
  ru: [
    'Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь'
  ],
  kg: [
    'Үчтүн айы', 'Бирдин айы', 'Жалган Куран', 'Чын Куран', 'Бугу', 'Кулжа', 'Теке', 'Баш Оона', 'Аяк Оона', 'Тогуздун айы', 'Жетинин айы', 'Бештин айы'
  ]
}

export const monthlyGrid = (month, year) => {
    let gridDaysArray = [];
    let week = 0;
    gridDaysArray[week] = [];

    const numberOfDaysInMonth = new Date(year, month, 0).getDate()
    
    for (let i = 1; i <= numberOfDaysInMonth; i++) {
      const numberOfDayInWeek = new Date(year, month, i).getDay()
      
      if (numberOfDayInWeek == 1) {
        week ++;
        gridDaysArray[week] = []
      }
  
      gridDaysArray[week].push(i)
    }

    gridDaysArray[0] = fillingUpEmptyDays(gridDaysArray[0])
     
    return gridDaysArray 
  }

  const fillingUpEmptyDays = (daysArray) => {
    if (daysArray.length > 0) {
        for (let i = daysArray.length; i < 7; i++) {
            daysArray.unshift('')
        } 
    }

    return daysArray
  }


  export const dateTimeByArea = (date = new Date()) => {

    date = new Date (date)

    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate()
    }
  }

  export const changeOfDateTimeByMonth = (currentDateTime, chosenDirection) => {
    const newDateTime = new Date(currentDateTime)

    newDateTime.setMonth(chosenDirection ? newDateTime.getMonth() + 1 : newDateTime.getMonth() - 1)

    return newDateTime
  }

  export const dateTimeFormatting = (dateTime) => {
 
    const day = dateTime.toLocaleString('default', { day:   '2-digit'});
    const month = dateTime.toLocaleString('default', { month: '2-digit'});
    const year = dateTime.toLocaleString('default', {  year:  "numeric" });

    return `${year}-${month}-${day}`
  }

  export const checkForTheCurrentDay = (gridDay, currentDateTimeSeparately) => {
    const todayDateTime = dateTimeByArea()
    return todayDateTime.day == gridDay &&
           todayDateTime.month == currentDateTimeSeparately.month &&
           todayDateTime.year == currentDateTimeSeparately.year
  }

  export const checkForTheSelectedDay = (gridDay, selectedDateTimeSeparately, currentDateTimeSeparately) => {
    return gridDay == selectedDateTimeSeparately.day &&
           selectedDateTimeSeparately.month == currentDateTimeSeparately.month &&
           selectedDateTimeSeparately.year == currentDateTimeSeparately.year
  }

  export const convertToDate = (dateTimeSeparately, gridDay) => {
    const { month, year } = dateTimeSeparately

    const newDateTime = new Date(`${year}-${month + 1}-${ gridDay }`)
    return newDateTime
  }