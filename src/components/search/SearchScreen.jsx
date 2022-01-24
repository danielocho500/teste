import React, { useEffect, useState } from 'react'
import { getRandomHeroes } from '../../helpers/getRandomHeroes';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';

import './Search.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../basics/Header';
import { HeroList } from '../heroList/HeroList';
import { Loading } from '../basics/Loading';

import searchImg from '../../img/search.svg';

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);

    const [values, handleInputChange] = useForm({
        searchText: q
    });

    const {searchText} = values;

    const [heroesCall, setHeroesCall] = useState({
        loading: true,
        error: null,
        data: {}
    });


    const handleSubmit = (e) => {
        e.preventDefault();

        if(searchText.trim() === ""){
            return;
        }

        navigate(`?q=${searchText.trim()}`);
    }
    
    useEffect(() => {
        if(q.trim() === "") {
            setHeroesCall(getRandomHeroes());
        }
        else{
            fetch(`https://www.superheroapi.com/api.php/2941538746156672/search/${q}`)
                .then(resp => resp.json())
                .then(data =>{ 
                    if(data.response !== "error"){
                        setHeroesCall({
                            loading: false,
                            error: null,
                            data: data.results
                        })
                    }
                    else{
                        setHeroesCall({
                            loading: false,
                            error: data.error,
                            data: null
                        })
                    }

                    
                })
                .catch((error) => setHeroesCall({
                    data: null,
                    loading: false,
                    error
                }))
        }
    }, [q]);

    return (
        <>

        <Header/>
        <div className='search'>
            <div className="search__container">

                <div className="search__grid">

                    <form onSubmit={handleSubmit}>
                        <h1 className='search__header formlabel'>Name: </h1>

                        <div className="input__flex">
                            <input
                                type="text"
                                placeholder= "Search..."
                                className='search__input'
                                name= 'searchText'
                                value={searchText}
                                onChange={handleInputChange}
                            />    

                            <button
                                type='submit'
                                className='btn btn_search'
                                value=''
                            > 
                                <img src={searchImg} alt='search logo' />

                            </button>
                        </div>

                    </form>       

                    <p className="search__alert" role="alert">
                        Use the advance Search to explore more Heroes!
                    </p>       

                </div>


            </div>      
            
        </div>
        
        <div className="results__container">
            {
                (heroesCall.loading) ? <Loading/>
                    : ((heroesCall.error != null ) ? <div className='alert alert-danger results__error'> {heroesCall.error} </div>
                    : <div> <HeroList heroes={heroesCall.data}/> </div>  
                )      
            }
        </div>
        </>
    )
}