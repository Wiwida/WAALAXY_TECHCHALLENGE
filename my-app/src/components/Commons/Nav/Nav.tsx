// Components : 
import Buttonfoodaawa from '../Button/Button';
import { useNavigate } from 'react-router-dom';

// Style + assets :
import './Nav.scss';
import logo from "../../../assets/img/logo.svg";

const Nav = () => {

    const navigate = useNavigate();

    return (

        <div className="container__nav">
            <div className="wrapper">
                <div className="nav__logo">
                    <img className="nav__logo--img" alt="Logo carrot of FOODAWAA" src={logo}/>
                    <h1 className="nav__logo--title" onClick={() => navigate('/')}>FOOD<span>AWAA</span></h1>
                </div>
                <div className="nav__link">
                    <i className="pi pi-home"></i>
                    <span className="nav__link--text" onClick={() => navigate('/')}>Catalogue produits</span>
                </div>
                <Buttonfoodaawa nameButton="Ajouter un produit" icon="pi pi-plus" actionAfterClick={() => navigate('/products/create')}/>
            </div>

        </div>

    );

};

export default Nav;