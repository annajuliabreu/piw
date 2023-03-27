import React, { Fragment } from 'react';
import Planet from '..';

const Planets = () => {
    return (
        <Fragment>
            <h3>Planet List</h3>
            <hr />
            {/* um componente que usa outro componente */}
            <Planet
                name="Mercúrio"
                text="O Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres."
                link="https://pt.wikipedia.org/wiki/Mercúrio_(planeta)"
                img_url="https://www.tvpampa.com.br/wp-content/uploads/2022/05/mercurio-planeta.jpg"
            />

            <Planet
                name="Júpiter"
                text="Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol."
                link="https://pt.wikipedia.org/wiki/Júpiter_(planeta)"
                img_url="https://starwalk.space/gallery/images/jupiter-guide/1140x641.jpg"
            />
        </Fragment>
    )
}

export default Planets;