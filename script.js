
// Whenever Convert Button Clicked
convertButton.addEventListener("click", () => {
	GetApiData (String(api_key.value), String(haveCurrency.value), String(wantCurrency.value), amount_1.value);
});

function GetApiData (api_key, have, want, amount) {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': `${api_key}`,
			'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
		}
	};
	
	fetch(`https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${have}&want=${want}&amount=${amount}`, options)
		.then(response => response.json())
		.then(response => {
			console.log (response)

			// Update Value in Front end
			amount_2.value = response.new_amount
		})
		.catch(err => console.error(err));
}
