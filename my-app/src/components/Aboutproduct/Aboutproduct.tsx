// Hooks :
import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";

// Types : 
import { Items, Product } from '../../models/redux-models';

//Actions :
import { fetchParticularProduct } from '../../store/products-action';

// Component :
import Cardproduct from '../Commons/Cardproduct/Cardproduct';
import Buttonfoodaawa from '../Commons/Button/Button';
import Tag from '../Commons/Tag/Tag';
import Loader from '../Commons/Loader/Loader';

// Styles and other :
import { whichProductsHaveTheSameTag } from '../../utils/utilsProduct'
import './Aboutproduct.scss';

const Aboutproduct = () => {

    // Hooks :
    const dispatch = useAppDispatch();
    const { productId } = useParams();
    const navigate = useNavigate();

    // Data(s) from state :
    const { product : productSelected } = useAppSelector(state => state.products.productClicked);
    const allProducts = useAppSelector(state => state.products.products);

    // Data for component(s) :
    const tagsOfProductClicked: Items[] = productSelected.tags;
    const filteredProductByTags: Array<Product> = whichProductsHaveTheSameTag(allProducts, tagsOfProductClicked, productSelected);
    
   
    // Initialize data(s) :
    useEffect(() => {
        dispatch(fetchParticularProduct(`${productId}`));
    }, [dispatch, productId]);     

    // Loading 
    const checkProducts = () : boolean => {

        if (productSelected._id !== productId || !productSelected) {
            
            return false;
        };

        return true;
    };

    return ( 
             <div className="container__aboutproduct">
                {checkProducts()
                    ? <div>
                        <div className="about__product__content">
                            <img src={productSelected.image} alt={productSelected.name}/>
                            <div className="about__product__content__infos">
                                <div className="infos--pricename">
                                    <h2>{productSelected.name}</h2>
                                    <span>{productSelected.price.toFixed(2)}€</span>
                                </div>
                                <div className="infos--tags">
                                    { tagsOfProductClicked.length !== 0 

                                        ? tagsOfProductClicked.map((tag, index) => (
                                                <Tag nameTag={`${tag}`} key={`${tag}${index}`}/>
                                          ))
                                        : <span className="noCorrespondingProduct" style={{'margin' : '0'}}>Pas encore de tag référencé pour ce produit.</span>
                                    }
                                </div>
                                <h4>Description :</h4>
                                <p>{productSelected.description}</p> 
                                <Buttonfoodaawa key={productId} nameButton="Modifier" icon="pi pi-pencil" actionAfterClick={() => navigate(`/products/${productId}/edit`)}/>               
                            </div>
                        </div>
                        <h3>Articles similaires</h3>
                        <div className="about__product__extracontent">
                            {
                                filteredProductByTags.length > 0  
                                // eslint-disable-next-line array-callback-return
                                ?  filteredProductByTags.map((productFiltered, index) => {
                                            if (index <= 2) { return (
                                                <Link to={`/products/${productFiltered._id}`} key={productFiltered._id}>
                                                    <Cardproduct 
                                                        description={productFiltered.description} 
                                                        _id={productFiltered._id} 
                                                        name={productFiltered.name} 
                                                        image={productFiltered.image} 
                                                        price={productFiltered.price}
                                                        tags={productFiltered.tags}
                                                        key={productFiltered._id}
                                                    />
                                                </Link>
                                            )}
                                        }
                                    )

                                : <p className="noCorrespondingProduct">Pas encore de produit avec des tags similaires, n'hésitez pas à en créer !</p>
                            }
                        </div>
                    
                    </div>

                : <Loader/>
                }
            </div>
    );
};

export default Aboutproduct;
