import React from 'react';
import './heroInfo.css'
import noPhotoImg from '../../img/noPhoto.png'

export const HeroScreen = ({ data }) => {

    const { appearance, biography, image, name, powerstats } = data
    
    Object.keys(powerstats).forEach(key => {
        powerstats[key] = powerstats[key] === "null" ? 10 : powerstats[key];
    })
    

    return (
        <>
            <h1 className='results__title'> {name} </h1>

            <div className='results__topGrid'>
                <img src={image.url} alt={name} className="results__img"/>

                <div className="results__bio">
                    <p> <span> FullName </span> <br />{(biography["full-name"] !== "-") ? biography["full-name"] : "No data"}   </p>
                    <p> <span> Alter Egos </span> <br />{biography["alter-egos"]} </p>
                    <p> <span> Place of Birth </span> <br /> {(biography["place-of-birth"] !== "-") ? biography["place-of-birth"] : "No data"} </p>
                    <p> <span> First Appearance </span> <br /> {(biography["first-appearance"] !== "-") ? biography["first-appearance"] : "No data"} </p>
                    <p> <span> Publisher </span> <br /> {(biography.publisher !== "-") ? biography.publisher : "No data"} </p>
                    <p> <span> Alignment </span> <br /> {(biography.alignment !== "-") ? biography.alignment : "No data"} </p>
                </div>

                <div className="results__appearance">
                    <p> <span> Eye Color </span> <br /> {appearance["eye-color"]} </p>
                    <p> <span> Gender </span> <br /> {appearance.gender}  </p>
                    <p> <span> Race </span> <br /> {appearance.race} </p>
                    <p> <span> Height </span> <br /> {appearance.height[1]} </p>
                    <p> <span> Weight </span> <br /> {appearance.weight[1]} </p>
                    <p> <span> Hair color </span> <br /> {appearance["hair-color"]} </p>
                </div>
                
            </div>

            <div className='stats'>
                    <h3 className='stats__title'> PowerStats </h3>
                    <div className="stat">
                        <p className='stat__title'>Intelligence: </p>
                        <div className="progress">
                            <div className="progress-done" 
                            style={
                                {
                                    width: `${powerstats.intelligence}%`,
                                    opacity: 1

                                }
                            }> {powerstats.intelligence} </div>
                        </div>
                    </div>

                    <div className="stat">
                        <p className='stat__title'>Strength: </p>
                        <div className="progress">
                            <div className="progress-done" 
                            style={
                                {
                                    width: `${powerstats.strength}%`,
                                    opacity: 1

                                }
                            }> {powerstats.strength} </div>
                        </div>
                    </div>

                    <div className="stat">
                        <p className='stat__title'> Speed: </p>
                        <div className="progress">
                            <div className="progress-done" 
                            style={
                                {
                                    width: `${powerstats.speed}%`,
                                    opacity: 1

                                }
                            }> {powerstats.speed} </div>
                        </div>
                    </div>

                    <div className="stat">
                        <p className='stat__title'>Durability: </p>
                        <div className="progress">
                            <div className="progress-done" 
                            style={
                                {
                                    width: `${powerstats.durability}%`,
                                    opacity: 1

                                }
                            }> {powerstats.durability} </div>
                        </div>
                    </div>

                    <div className="stat">
                        <p className='stat__title'>Power: </p>
                        <div className="progress">
                            <div className="progress-done" 
                            style={
                                {
                                    width: `${powerstats.power}%`,
                                    opacity: 1

                                }
                            }> {powerstats.power} </div>
                        </div>
                    </div>

                    <div className="stat">
                        <p className='stat__title'>Combat: </p>
                        <div className="progress">
                            <div className="progress-done" 
                            style={
                                {
                                    width: `${powerstats.combat}%`,
                                    opacity: 1

                                }
                            }> {powerstats.combat} </div>
                        </div>
                    </div>
            </div>
        </>
    );
};
