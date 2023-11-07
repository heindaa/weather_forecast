let element = document.querySelector('button');
let wforecast = document.getElementById('forecast');

const weather = () => {
    let number = Math.floor(Math.random() * 5);
    switch (number) {
      case 0: return 'It\'s raining today';
      case 1: return 'It\'s sunny today';
      case 2: return 'It\'s cloudy today';
      case 3: return 'It\'s cold today';
      case 4: return 'It\'s hot today';
  }

  }

function weatherForecast(){
    wforecast.innerHTML = weather();

  }
element.onclick = weatherForecast;

/*     if(wforecast.innerHTML = 'It\'s raining today'){
        document.body.style.backgroundImage = "url(images/rain.jpg)"
      } else if (wforecast.innerHTML = 'It\'s sunny today'){
        document.body.style.backgroundImage = "url(images/sunny.jpg)"
      } else if (wforecast.innerHTML = 'It\'s cloudy today'){
        document.body.style.backgroundImage = "url(images/cloudy.jpg)"
      } else if (wforecast.innerHTML = 'It\'s cold today'){
        document.body.style.backgroundImage = "url(images/cold.jpg)"
      } else if (wforecast.innerHTML = 'It\'s hot today'){
        document.body.style.backgroundImage = "url(images/hot.jpg)"
      } else (wforecast.innerHTML = ''){
        document.body.style.backgroundImage = none
      } */
