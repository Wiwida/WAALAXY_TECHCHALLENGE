import React, {useEffect, useState} from 'react';
import { getProducts } from '../../action/actionCreators';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks';

// Components : 
import Aboutproduct from '../../components/Aboutproduct/Aboutproduct';
import Searchbar from '../../components/Searchbar/Searchbar';

// Style : 
import './Homepage.scss';

const Homepage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const onFetchProducts = async () => {
            await dispatch({type: getProducts()});
        }  

        onFetchProducts();     
    });
    
    
    const { products, loading, error } = useTypedSelector((state) => state.home);

    return (

        <div className="container__homepage">
            <div className="homepage__header">
                <h2 className="homepage__h2">Welcome!</h2>
                <Searchbar/>
                {
                products.map((comment) => {
                    return(<li key={comment.image}>{comment.description}</li>)
                })
                }
                
            </div>
            <div className="homepage__content">
                <Aboutproduct />
            </div>
        </div>

    );

};

export default Homepage;