let btn = document.querySelector('.btn');
let calendar = document.querySelector('.data');
let out = document.querySelector('.out');

let getDayInfo = function(e){
  e.preventDefault();
// Считываю данные с календаря
  let data = calendar.value;

  let calData = data.split('-');
  let calYear = calData[0];
  let calMonth = calData[1]-1;
  let calDay = calData[2];

// Выбранная на календаре дата
  let choiseData = new Date();
  choiseData.setFullYear(calYear, calMonth, calDay);
// Начало месяца 
  let startMonth = new Date();
  startMonth.setFullYear(calYear, calMonth, 0);

// день недели 
  let weekday = getWeekDay(choiseData);
// номер недели
  let numweek = numberWeek(choiseData, startMonth);
// месяц
  let month = getNameMonth(choiseData);
// вывод итоговой строки
  out.textContent = `${weekday}, ${numweek} неделя ${month} ${calYear} года`;
}

btn.addEventListener('click', getDayInfo);


// Функция для определения дня недели
function getWeekDay(data){
  let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  return days[data.getDay()];
}
// Функция для определения номера недели
function numberWeek(now, start){
  let numWeek = Math.ceil((now - start) / (1000 * 60 * 60 * 24 * 7));
  return numWeek;
}
// Функция для определения месяца
function getNameMonth(data){
  let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
  return months[data.getMonth()];
}
