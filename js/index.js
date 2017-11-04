var calendarDate;

function renderMonth(today){
	var month = document.createElement('table');
	var currentDate = new Date(today.getFullYear(), today.getMonth(), 1);
	var currentWeek = document.createElement('tr');
	calendarDate = today;
	var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
	 'Октябрь', 'Ноябрь', 'Декабрь'];

	monthName = document.createElement('caption');
	monthName.innerHTML = '<span class="left-arrow"></span>' + 
	months[today.getMonth()] + ' ' + today.getFullYear() + 
	'<span class="right-arrow"></span>';
	month.appendChild(monthName); 

	month.appendChild(currentWeek);
	for (var i = 0, j = currentDate.getDay() - 6; i < currentDate.getDay(); i++){
		var currentDay = document.createElement('td');
		currentDay.classList.add('disabled');
		currentDay.innerHTML = new Date(today.getFullYear(), today.getMonth(), j++).getDate();
		currentWeek.appendChild(currentDay);
	}
	
	while(currentDate.getMonth() == today.getMonth()){
		var currentDay = document.createElement('td');
		currentDay.innerHTML = currentDate.getDate();
		currentWeek.appendChild(currentDay);
		currentDate.setDate(currentDate.getDate() + 1);
		if (currentDate.getDay() == 0){
			currentWeek = document.createElement('tr');
			month.appendChild(currentWeek);
		}
	}

	for (var i = currentDate.getDay(), j = 0; i < 7; i++){
		var currentDay = document.createElement('td');
		currentDay.classList.add('disabled');
		currentDay.innerHTML = new Date(today.getFullYear(), today.getMonth(), currentDate.getDate() + j++).getDate();
		currentWeek.appendChild(currentDay);
	}
	
	var parent = document.querySelector("TABLE").parentElement;
	parent.removeChild(document.querySelector("TABLE"));
	parent.appendChild(month);
}

renderMonth(new Date());

document.body.addEventListener('click', function(e){
	var target = e.target;
	var arrow = target.closest('span');
	if (!arrow){
		return;
	}
	if (arrow.classList.contains('left-arrow')){
		renderMonth(new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1, 1));
	}
	if (arrow.classList.contains('right-arrow')){
		renderMonth(new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 1));	
	}
})