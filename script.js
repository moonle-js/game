fetch('https://api.openweathermap.org/data/2.5/weather?&appid=00515cd91cf4d63f75d631d7dd68ded4&q=baku')
.then(data => data.json())
.then(data => console.log(data))