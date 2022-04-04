// display a message
// console.log('Client Side Content loaded from app.js');

// fetch
	// fetch a URL
	// when a promise is fulfilled, you successfully connect to the URL
	// then send information back.
/*
fetch('url').then((response) = {
	function....
})

*/

// aim the js at the form in the index.hbs
let weatherForm = document.querySelector('form');
let search = document.querySelector('input');

// add action to the form
weatherForm.addEventListener('submit', (e) => {
	e.preventDefault(); // keeps the page from refreshing when the button is clicked
	//console.log('testing'); // tests the button's action
	
	// grab the value from the text field (input)
	let city = search.value;
	
	//console.log(city); // display the city entered
	
	// use fetch to display the weather conditions for the city of choice
	fetch('http://localhost:3000/weather?city='+city).then((response) => {
	// jsonify the response
	response.json().then((data) => {
		//console.log(data);
		if(data.error)
			console.log(error);
		else
		{
			console.log(data.weather.currentCity);
			console.log(data.weather.currentState);
			console.log(data.weather.currentDescription);
			console.log(data.weather.currentTemp);
			console.log(data.weather.feelsLikeTemp);
			console.log(data.weather.time);
		}
	});
});
	
});


