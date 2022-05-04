// Hooks :
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { fetchProducts } from '../../store/products-action';
import { useEffect, useState } from 'react';

// Components : 
import Cardproduct from "../../components/Commons/Cardproduct/Cardproduct";
import Searchbar from '../../components/Commons/Searchbar/Searchbar';

// Style : 
import './Homepage.scss';
import Loader from "../../components/Commons/Loader/Loader";

const Homepage = () => {

    //Hooks :
    const dispatch = useAppDispatch();
    const allProducts = useAppSelector(state => state.products.products);
    const countOfProduct = useAppSelector(state => state.products.count);
    const isLoading = useAppSelector(state => state.products.loading)

    

    // Local State :
    const [valueInputSearch, setValueInputSearch] = useState('');

    // Search :
    const productFiltered = allProducts.filter(el => el.name.toLowerCase().startsWith(valueInputSearch.toLowerCase()));

    // Initialize :
    useEffect(() => {
        dispatch(fetchProducts(`?&count=${countOfProduct}`));
    }, [dispatch, countOfProduct]);

    // Loading :
    const checkProducts = () : boolean => {
        if (allProducts.length === 0) {
            return false;
        }; 

        return true;
    };

    return (
        
            <div className="container__homepage">
                <div className="homepage__header">
                    <h2 className="homepage__h2">Welcome!</h2>
                    <Searchbar valueInputSearch={valueInputSearch} setValueInputSearch={setValueInputSearch}/>
                </div>
                <div className="homepage__content">
                    {checkProducts() 
                    
                        ? productFiltered.map((product) => (
                            <Cardproduct 
                                description={product.description} 
                                _id={product._id} 
                                name={product.name} 
                                image={product.image} 
                                price={product.price}
                                tags={product.tags}
                                key={product._id}
                            />
                        ))
                        : <Loader/>
                    }
                </div>
            </div>
    );

};

export default Homepage;