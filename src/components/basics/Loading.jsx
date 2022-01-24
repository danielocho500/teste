import React from 'react';
import './Loading.css'

export const Loading = () => {
    return (
        <>
            <div className="loader__container">         
                <div className="sk-chase">
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                </div>
            </div>
        </>
    );
};
