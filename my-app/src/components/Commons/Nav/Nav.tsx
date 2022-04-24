// Style + assets :
import './Nav.scss';
import logo from "../../../assets/img/logo.svg";

// Components : 
import Buttonfoodaawa from '../Button/Button';

const Nav = () => {

    const actionAddProduct = () => {
        console.log('Heyyyyy')
        return 
    }

    return (

        <div className="container__nav">
            <div className="wrapper">
                <div className="nav__logo">
                    <img className="nav__logo--img" alt="Logo carrot of FOODAWAA" src={logo}/>
                    <h1 className="nav__logo--title">FOOD<span>AWAA</span></h1>
                </div>
                <div className="nav__link">
                    <i className="pi pi-home"></i>
                    <a href="/" className="nav__link--text">Catalogue produits</a>
                </div>
                <Buttonfoodaawa label="Ajouter un produit" icon="pi pi-plus" actionAfterClick={actionAddProduct}/>
            </div>

        </div>

    );

};

export default Nav;