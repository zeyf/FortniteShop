import {useContext} from 'react'
import './NSItemCard.css'
import {Link} from 'react-router-dom'
import ItemContext from '../context/ItemContext/ItemContext';

const NSItemCard = ({category, name, cardStyle, handledName, imgSRC}) => {

    const {GetItem} = useContext(ItemContext);

    return (
        <div className='nsitemcard nsitemcard--primary'>
            <Link className='nsitemcard__link' to={`/items/${category}/${handledName}`} onClick={() => {
                        GetItem(handledName)
            }}>
                <div className='nsitemcardcontent nsitemcardcontent--primary' style={cardStyle}>
                    <img className='nsitemcardcontent__image' src={imgSRC} />
                </div>
                    <div className='nsitemcardcontenttext nsitemcardcontenttext--primary'>
                        <span className='nsitemcardcontext__name'>
                            {name}
                        </span>
                    </div>
            </Link>
        </div>
    )
}

export default NSItemCard