import React, {Component, createRef} from 'react';
import { FaSearch, FaWind, FaWater } from "react-icons/fa"; // Ikonkalarni chaqiramiz
import './wether.scss';
import axios from "axios";
import {toast} from "react-toastify"; // Stillarni ulaymiz

class WeatherComponent extends Component {
    // state = {
    //     inputValue: '',
    // };
    // handleInputChange = event => {
    //     this.setState({ inputValue: event.target.value });
    //     console.log(event.target.value);
    // }
    state = {
        weather: {},
    }
    searchInput =createRef();

    SearchCity = () => {
        let city=this.searchInput.current.value
        let api_key=`7cab5980d287fa15ae7efc5ef1c9d2fb`
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
        axios.get(url)
            .then(response =>{
                this.setState({
                    weather: response.data,
                });
                console.log(response.data)
                toast.success('Success')
            })
            .catch(() =>{
                toast.error('error')
                });
    }
    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.SearchCity();
        }
    }
    render() {
        const {weather} = this.state;
        return (
            <div className="card-container">
                <div className="weather-card">

                    {/* 1. Qidiruv qismi */}
                    <div className="search">
                        <input onKeyDown={this.handleKeyDown} ref={this.searchInput} type="text" placeholder="enter city name" spellCheck="false" />
                        <button onClick={this.SearchCity}>
                            <FaSearch />
                        </button>
                    </div>

                    {/* 2. Asosiy Ob-havo qismi */}
                    <div className="weather">
                        <img
                            // src={`https://openweathermap.org/img/wn/${weather.weather ? weather.weather[0].icon : "01d"}@4x.png`}
                            src={`/img/${weather?.weather ? weather.weather[0].icon : '01d'}.png`}
                            // src={`/img/${weather?.weather?.[0]?.icon || '01d'}.png`}
                            // src={`/img/${weather?.weather?.[0]?.icon || "01d"}.png`}
                            // src={`/img/${weather?.weather ? weather.weather[0].icon : "01d"}.png`}
                            className="weather-icon"
                            alt="weather-icon"
                            />
                        <h1 className="temp">{weather?.main?.temp ? Math.round(weather?.main?.temp) : 0}°C</h1>
                        <h2 className="city">{weather?.name ? weather?.name : "city"}</h2>
                    </div>

                    {/* 3. Tafsilotlar (Namlik va Shamol) */}
                    <div className="details">
                        {/* Namlik */}
                        <div className="col">
                            <FaWater className="icon" />
                            <div>
                                <p className="humidity">{weather?.main?.humidity ? weather?.main?.humidity:0}%</p>
                                <p>Humidity</p>
                            </div>
                        </div>

                        {/* Shamol */}
                        <div className="col">
                            <FaWind className="icon" />
                            <div>
                                <p className="wind">{weather?.wind?.speed ? Math.round(weather?.wind?.speed):0}km/h</p>
                                <p>Wind Speed</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default WeatherComponent;