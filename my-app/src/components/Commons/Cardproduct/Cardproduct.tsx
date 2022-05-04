// Hook(s) :
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Type(s) :
import { Product } from '../../../models/redux-models';

// Style :
import './Cardproduct.scss';


const Cardproduct : React.FC<Product> = ({ _id, description, name, image, price, tags }: Product) => {

    // Data :
    const [hoverImg, setHoverImg] = useState(false);

    // Hooks :
    const navigate = useNavigate();

    return (
        <div className="container__cardproduct" onClick={() => ''}>
            <div className="cardproduct__img">
                {/* Effect hover for click : */}
                <img alt={name} src={image} onClick={() => navigate(`/products/${_id}`)} onMouseEnter={() => setHoverImg(true)} onMouseLeave={() => setHoverImg(false)}/>
                { hoverImg && <span className="imgWrapper">Cliquez ici pour plus d'informations</span> }
            </div>
            <div className="cardproduct__infos">
                <div className="cardproduct__infos__h3andprice">
                    <h3 className="cardproduct__infos__h3">{name}</h3>
                    <span className="cardproduct__infos__price">{price.toFixed(2)}€</span>
                </div>
                <p className="cardproduct__infos__description">{description}</p>
            </div>
        </div>        
    );
};

export default Cardproduct;