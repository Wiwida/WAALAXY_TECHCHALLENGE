/* eslint-disable react/jsx-no-comment-textnodes */
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { fetchProducts, fetchParticularProduct } from '../../store/products-action';
import { useState, useEffect } from 'react';

// Components : 
import Aboutproduct from '../../components/Aboutproduct/Aboutproduct';
import Searchbar from '../../components/Searchbar/Searchbar';

// Style : 
import './Homepage.scss';

const Homepage = () => {

    const [product_id, setProduct_id] = useState(0);
    const dispatch = useAppDispatch();
    const allProducts = useAppSelector(state => state.products.products);
    let products;

    dispatch(fetchProducts())

    const checkProducts = () : boolean => {
        if (allProducts.length === 0) {
            return false;
        } 

        return true;
    }


    

    return (

        <div className="container__homepage">
            <div className="homepage__header">
                <h2 className="homepage__h2">Welcome!</h2>
                <Searchbar/>


            </div>
            <div className="homepage__content">
                {checkProducts() && allProducts.map((product) => (
                    <div id={product._id}></div>
                ))}
            </div>
        </div>

    );

};

export default Homepage;

