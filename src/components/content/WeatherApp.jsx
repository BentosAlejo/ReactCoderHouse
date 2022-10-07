import React, {useState, useEffect} from 'react';

const WeatherApp = () => {

    const [clima, setClima] = useState([])
    const api_key = "e1f31273c0a736083f013b041e2160b8"

    useEffect(() => {
        fetch('http://api.openweathermap.org/geo/1.0/direct?q="Cordoba","Cordoba","AR"&limit=1&appid=e1f31273c0a736083f013b041e2160b8')
        .then(response => response.json())
        .then(data => {
            const {lat, lon, country, name, state} = data[0]
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`)
            .then(response => response.json())
            .then(({main, weather}) => {
                console.log(main, weather)
                const datosClima = 
                                    `
                                    <div className='divClima'>
                    
                                        <p>Ciudad: ${main}</p>
                                        <p>Provincia: ${state}</p>
                                        <p>Pais: ${country}</p>
                                        <p>Temperatura: ${main.temp}</p>
                                        <p>Sensasion Termica: ${main.feels_like}</p>
                                        <p>Humedad: ${main.humidity}%</p>
                                        <p>Presion: ${main.pressure}</p>
                                        <p>Tiempo: ${weather[0].description}</p>
                                    </div>
                                    `
                
                setClima(datosClima)
            })
        })
    }, []);

    return (
        <>
            <h1>{clima}</h1>
        </>
    );
}

export default WeatherApp;
