import './Button.scss';
import { Button } from 'primereact/button';

interface ButtonProps {
    label: string,
    icon : string,
    actionAfterClick: any,
}

const Buttonfoodaawa = ({ label, icon, actionAfterClick }: ButtonProps) => {

    return (

        <div className="container__button">
            <Button label={label} icon={icon} className="button__primereact" onClick={actionAfterClick}/>
        </div>

    );

};

export default Buttonfoodaawa;