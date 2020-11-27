import React from 'react';
import Demo from '../static/Demo.jpg'

import "./style.css";

function Card({ item, focusStyle, onCardClickHandler, index }) {


    return (
        <div className={`card ${focusStyle}`} onClick={e => { onCardClickHandler(index)}} >
            <img style={{ width: "200px" }} src={Demo} alt="mission_img" />
            <div className="subHeading spa">
                {item.name}
            </div> 
            {focusStyle ?<div>
                <div className="section spa">
                    <span className="subSubHeading">Capital:</span>
                    {item.capital}
                </div>
                <div className="subSubHeading  spa">
                    Currencies
                </div>
                <ul className="mission_ids spa">
                    {item.currencies.map(i => {
                        return (
                            <li>{i.name}</li>
                        )
                    })}

                </ul>
                <div className="subSubHeading  spa">
                    Languages
                </div>
                <ul className="mission_ids spa">
                    {item.languages.map(i => {
                        return (
                            <li>{i.name}</li>
                        )
                    })}

                </ul>
            </div>: null}
        </div>
    )
}

export default Card;