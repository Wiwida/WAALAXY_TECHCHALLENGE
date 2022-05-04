import { ButtonProps } from '../../../models/redux-models';

// Style :
import './Button.scss';

const Buttonfoodaawa = ({ nameButton, icon, typeButton, actionAfterClick }: ButtonProps) => {

    return (

        <div className="container__button">
            
            <button type={typeButton} className="button__gnl" onClick={() => actionAfterClick()}>
                <i className={`${icon}`} />
                {nameButton}
            </button>
        </div>

    );

};

export default Buttonfoodaawa;