import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Header } from '../basics/Header';
import { Loading } from '../basics/Loading';
import { HeroScreen } from './HeroScreen';


export const HeroInfo = () => {

    const {heroId} = useParams();

    const stateFetch = useFetch(heroId);

    const {loading, error, data } = stateFetch;

    return (
        <>
            <Header/>
            <hr/>
            <div className="heroInfo__container">
                {
                    loading ? <Loading/>
                            : (error != null || data.response === "error") ? <div className='alert alert-danger results__error'> {error ? error : "Hero not Found"} </div>
                                : <HeroScreen data={data}/>
                }   
            </div>
        </>
    )
};
