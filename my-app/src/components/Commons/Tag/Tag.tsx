// Style :
import './Tag.scss';

// Types :
import { Items } from '../../../models/redux-models';

// Utils :
import { tagInLocalStorage } from '../../../utils/utilsTags';


const Tag : React.FC<Items> = ({ nameTag, wantDelete, newArrayWithoutTag }) => {

    // Save tag and color tag in localStorage :
    tagInLocalStorage(nameTag);

    return (

        <div className="container__tag" style={{'backgroundColor': `${tagInLocalStorage(nameTag).backgroundColor}`, 'color': `${tagInLocalStorage(nameTag).color}`}}>
            <span >{nameTag}</span>
            { wantDelete && <i className="pi pi-times" onClick={() => newArrayWithoutTag(nameTag)}/> }
        </div>

    );

};

export default Tag;