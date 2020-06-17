import React from 'react';
import '../assets/styles/App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_key = "e29926e92483a63f9e13132f602faa32";




const Weather = () => {
    const [city, setCity] = useState({ hits: [] });
    const [q_City, setQ_City] = useState('Caracas');
    const [url, setUrl] = useState(
        `https://api.openweathermap.org/data/2.5/weather?q=${q_City}&appid=${API_key}`
    );

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(url);
            setCity(result.data);
        };
        fetchData();
    }, [url]);

    return (
        <div className="container">
            <section className="main">
                <h2>Type your city</h2>
                <form onSubmit={event => {
                    setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${q_City}&appid=${API_key}`);
                    event.preventDefault();
                }}>
                    <input className="input"
                        type="text" 
                        placeholder="Search"
                        value={q_City}
                        onChange={event => setQ_City(event.target.value)}
                    />                
                    <button
                    type="button" 
                    onClick={() => setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${q_City}&appid=${API_key}`)}>
                        Search
                    </button>               
                </form>  

                    


            </section>

            <section className="container__city">
            


            
                {city.main ? (
                    <>
                        <h1>{city.name}</h1>
                        <div className="container__city--icon">
                            <img src={`https://openweathermap.org/img/wn/${city.weather[0].icon}.png`} alt="Icon" width="70" height="70"/>
                        </div>
                        <h1>{city.main ? (
                                Math.floor(`${city.main.temp}` - 273.15)
                            ) : (
                                <>
                                    <h1>Loading...</h1>
                                </>
                            )}&deg;</h1>
                            </>
                            ) : (
                <>
                <h1>Loading...</h1>
                </>
                )}
            </section>
        </div>
    );
};





export default Weather;