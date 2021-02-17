import {useContext} from 'react'
import './NSItemCard.css'
import {Link} from 'react-router-dom'
import ItemContext from '../context/ItemContext/ItemContext';
import VBUCKS from '../../media/images/VBUCKS.png'
import ItemFunctions from '../../App Wide Functions/ItemFunctions';
import SetContext from '../context/SetContext/SetContext';
import FormatFunctions from '../../App Wide Functions/FormatFunctions';

const NSItemCard = ({category, name, cardStyle, handledName, imgSRC, price, BundleName, BundleStatus, setname, item}) => {

    const {GetItem} = useContext(ItemContext);
    const {GetSet} = useContext(SetContext);
    const {ItemPrice} = ItemFunctions;
    const {NameCharacterHandler} = FormatFunctions;

    const ShopItemCardLink = (category, handledName, check) => {
        if (BundleStatus) {
            return `/sets/${check}`
        } else if (!BundleStatus) {
            return `/items/${category}/${handledName}`
        }
    }

    const CheckBundleSetName = (setname) => {
        if (BundleStatus) return NameCharacterHandler(setname)
    }

    const setNameIfBundle = (BundleStatus, BundleName, name) => {
        if (BundleStatus) return BundleName.toUpperCase().replaceAll('BUNDLE', '(BUNDLE)')
        if (!BundleStatus) return name.toUpperCase()
    }

    return (
        <div className='nsitemcard nsitemcard--primary'>
            <Link className='nsitemcard__link' to={ShopItemCardLink(category, handledName, CheckBundleSetName(setname))} onClick={() => {
                        if (!BundleStatus) GetItem(handledName)
                        if (BundleStatus) GetSet(CheckBundleSetName(setname))
            }}>
                <div className='nsitemcardcontent nsitemcardcontent--primary' style={cardStyle}>
                    <img className='nsitemcardcontent__image' src={imgSRC} />
                </div>
                    <div className='nsitemcardcontenttext nsitemcardcontenttext--primary'>
                        <span className='nsitemcardcontext__name'>
                            {setNameIfBundle(BundleStatus, BundleName, name)}
                        </span>
                        {price && <span className='nsitemcardcontext__price'>
                                    <img src={VBUCKS} className='nsitemcardcontext__icon' alt='vbucks' />{ItemPrice(item)}
                                  </span> 
                        }
                    </div>
            </Link>
        </div>
    )
}

export default NSItemCard