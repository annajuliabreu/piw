import React from "react";

const Temperatura = () => {

    const celsiusParaFahrenheit = (celsius) => {
        return(9*celsius+160)/5;
    }

    const fahrenheitParaCelsius = (fahrenheit) => (5*fahrenheit-160)/9;

    const kelvin = (kelvin) => {
        const celsius = kelvin - 273
        const fahrenheit = (9*kelvin - 2297)/5;
        return{
            celsius, fahrenheit
            // versão simplificada de -> celcius: celcius, fahrenheit:fahrenheit
        }
    }

    let c = 30;
    let f = 54;
    let k = 0;
    let {celsius, fahrenheit} = kelvin(k);

    return(
        <div>
            <h1>A temperatura {c} em Celsius é em Fahrenheit: {celsiusParaFahrenheit(c)}</h1>
            <h1>A temperatura {f} em Fahrenheit é em Celsius: {fahrenheitParaCelsius(f)}</h1>
            <h1>A temperatura em Kelvin: {celsius}</h1>
            <h1>A temperatura em Kelvin: {fahrenheit}</h1>
        </div>
    )
}

export default Temperatura;
