const ApiKey='0fadf7da89e82438285e7875b40d14dd';
const UrlBase='https://api.openweathermap.org/data/2.5/weather';

const btnCity=document.querySelector('#btncity');
const inputCity=document.querySelector('#city');

const fetchapi=url=>fetch(url).then(response=>response.json());

async function getClima(lat,lon,apiKey){
    const url=`${UrlBase}?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const clima=await fetchapi(url);
    console.log(clima)
    const temperature=(clima.main.temp-273.15);
    document.querySelector('h2').innerHTML=temperature+'ªC-'+clima.name;
    pintFondo(temperature);
}

async function getClimaByCiy(city, apiKey){
    const url=`${UrlBase}?q=${city}&appid=${apiKey}`
    const clima=await fetchapi(url);
    const temperature=(clima.main.temp-273.15).toFixed(2);
    document.querySelector('h2').innerHTML=temperature+'ªC-'+clima.name;
    pintFondo(temperature);
    pintaEmoji(temperature);
}

function pintFondo(temp){
  const fondo=document.querySelector('body');
  if(temp<13){
    fondo.style.background='#44ddcc';
  }else if(temp<22){
    fondo.style.background='#aaaa55';
  }else{
    fondo.style.background='#dd5555';
  }
}

function pintaEmoji(temp){
  const emo=document.querySelector('#emoji');
  if(temp<13){
    emo.innerHTML='☃️';
  }else if(temp<22){
    emo.innerHTML='⛅';
  }else{
    emo.innerHTML='🔥';
  }
}


//Obtener geolocalizacion
navigator.geolocation.getCurrentPosition((position) => {
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    console.log(lon);
    getClima(lat,lon,ApiKey);
  });

  function buttonAction(){
    const city=inputCity.value;
    if(city)
    getClimaByCiy(city, ApiKey);

  }

  btnCity.addEventListener('click',buttonAction);