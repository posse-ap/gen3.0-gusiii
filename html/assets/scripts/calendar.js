const calOpen = document.getElementById('calendar_open');
const calendar = document.getElementById('calendar');
const newMonth = document.getElementById('cal__month');
const dateDisplay = document.getElementById('cal__date');
const allDates = document.getElementById('cal__days');
const prevBtn = document.getElementById('back__arrow');
const nxtBtn = document.getElementById('next__arrow');
const weekdayDisplay = document.getElementById('cal__days');
const weekdaysDisplay = document.getElementById('cal__weekdays');

calOpen.addEventListener('click', () => {
	calendar.classList.remove('hidden');
});

const date = new Date();
var result_sevenDays='';
// Current Date Display
currentDate = () => {
	const twelveMonths = [
		'1月',
		'2月',
		'3月',
		'4月',
		'5月',
		'6月',
		'7月',
		'8月',
		'9月',
		'10月',
		'11月',
		'12月',
	];

	const sevenDays = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

result_sevenDays = sevenDays.map(function(value) {
    return value.substr( 0, 3 );
});



	const date__weekDay = sevenDays[date.getDay()];
  
	const date__day = date.getDate();
  console.log(sevenDays);
	const date__year = date.getFullYear();

	newMonth.innerHTML = `${date__year}年`+twelveMonths[date.getMonth()];

};
currentDate();

const glassDateCalendar = () => {
	currentDate();

	let dates = '';
	
	result_sevenDays.forEach(function( value ) {
    dates += `<span class="today">${value}</span>`;
});
		

		weekdaysDisplay.innerHTML = dates;
	
};
glassDateCalendar();


// 月ごとの日付の生成
const glassCalendar = () => {
	currentDate();

	let days = '';
	let lastDay =
		32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
	const emptyDates = date.getDay();

	// For lopp to iterates empty spot where there's no date.
	for (let x = emptyDates; x > 0; x--) {
		days += `<span></span>`;
	}

	// For lopp to iterates through month to generate days & today's date.
	for (let i = 1; i <= lastDay; i++) {
		if (
			i === new Date().getDate() &&
			date.getMonth() === new Date().getMonth()
		) {
			days += `<span class="today">${i}</span>`;
		} else if(i < new Date().getDate()){
			days += `<span class="before">${i}</span>`;
		}
		else{
			days += `<span class="after">${i}</span>`;
		}

		allDates.innerHTML = days;
	}
};
glassCalendar();

// Added event listener to buttons for
prevBtn.addEventListener('click', () => {
	date.setMonth(date.getMonth() - 1);
	glassCalendar();
});

nxtBtn.addEventListener('click', () => {
	date.setMonth(date.getMonth() + 1);
	glassCalendar();
});


document.querySelectorAll(".calendarShower").forEach((element) =>
  element.addEventListener("click", () => {
    showCalendar();
  })
);

// カレンダーの日にち選択時のイベント
function selectCalendarDay() {
	const calendarDays = document.querySelectorAll('span');
	let selected;

	calendarDays.forEach((calendarDay) => {
		calendarDay.addEventListener('click', () => {
			
				selectedDay = newMonth.innerHTML + calendarDay.innerHTML + "日";

				calOpen.innerHTML = selectedDay
				calendar.classList.add('hidden')
				
			} 
)
		})
};
selectCalendarDay();