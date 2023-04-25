import React, { Fragment } from 'react';
import Planet from '..';

const clickOnPlanet = (name) => {
    console.log(`Um click no planeta: ${name}`);
}


async function getPlanets(){
    let response = await fetch('http://localhost:3000/api/planets.json');
    let data = await response.json();
    return data;
}

class Planets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: []
        };
    }

    componentDidMount() {
        getPlanets().then(data =>{
            this.setState(state => ({
                planets: data['planets']
            }))
        })
    }

    removeLast = () => {
        let new_planets = [...this.state.planets];
        new_planets.pop()
        this.setState(state => ({
            planets: new_planets
        }))
    }

    duplicateLast = () => {
        let last_planet = this.state.planets[this.state.planets.length - 1];
        this.setState(state =>({
            planets: [...this.state.planets, last_planet]
        }))
    }

    render() {
        return (
            <Fragment>
                <h3>Planet List</h3>
                {/* <button onClick={showMessage}>Click me</button> */}
                <button onClick={this.removeLast}> Remove Last </button>
                <button onClick={this.duplicateLast}> Duplicate Last </button>
                <hr />
                {/* um componente que usa outro componente */}
                {this.state.planets.map((planet) =>
                    <Planet
                        name={planet.name}
                        text={planet.text}
                        link={planet.link}
                        img_url={planet.img_url}
                        clickOnPlanet={clickOnPlanet}
                    />
                )}
            </Fragment>
        )
    }
}

// const Planets = () => {

// }

export default Planets;