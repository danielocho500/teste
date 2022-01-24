import React from 'react';
import { Link } from 'react-router-dom';
import './heroList.css'

export const HeroCard = ({name, biography, image, id}) => {
    const {url} = image
    const fullName = biography["full-name"]

    return (
        <div className='card'>
            <img src={url} alt={name} className="card-img-top card__img"
                onError={(e) => {
                    console.log("dsad")
                    e.target.src = "assets/img/noPhoto.png"
                }}
            />
            <div className="card-body">
                <h4 className='card-title'>  {name} </h4>
                <p className='card-text'> {fullName} </p>
                <Link to={`/hero/${id}`} className="btn btn-primary">
                     See more
                </Link>
            </div>
            
        </div>
    );
};
