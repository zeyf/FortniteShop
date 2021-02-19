import {useContext, useEffect} from 'react'
import './NSItemCard.css'
import {Link} from 'react-router-dom'
import ItemContext from '../context/ItemContext/ItemContext';
import VBUCKS from '../../media/images/VBUCKS.png'
import ItemFunctions from '../../App Wide Functions/ItemFunctions';
import SetContext from '../context/SetContext/SetContext';
import FormatFunctions from '../../App Wide Functions/FormatFunctions';

const NSItemCard = ({
category, name, cardStyle, handledName, imgSRC,
price, BundleName, BundleStatus, setname,
width, height, margin
}) => {

    const {GetItem} = useContext(ItemContext);
    const {GetSet} = useContext(SetContext);
    const {ItemPrice} = ItemFunctions;
    const {NameCharacterHandler} = FormatFunctions;

    useEffect(()=> {
        if (price) {
            localStorage.setItem(name.toUpperCase() || BundleName, price)
        }   
    }, []);

    const ShopItemCardLink = (category, handledName, handledBundleName) => {
        if (BundleStatus) {
            return `/sets/${handledBundleName}`
        } else if (!BundleStatus) {
            return `/items/${category}/${handledName}`
        }
    }

    const CheckBundleSetName = (setname) => {
        if (BundleStatus) return NameCharacterHandler(setname)
        if (!BundleStatus) return handledName

    }

    const setNameIfBundle = (name, bundStatus, bundName) => {
        if (bundStatus && bundName) return bundName.toUpperCase().replaceAll('BUNDLE', '(BUNDLE)')
        if (!bundStatus && name) return name.toUpperCase()
    }

    const setSize = (w, h, type, m) => {
        if (w && h) { {
                if (type === 'nsitemcard' || type === 'image') {
                    if (window.screen.width < 700) {
                        return {width: `${w}px`, height: `${h}px`, margin: `${m}px 0px ${m}px 0px` }
                    }
                    else if (window.screen.width > 1024) {
                        return {width: `${w}px`, height: `${h}px`, margin: `0px ${m}px 0px 0px` }
                    } else if (window.screen.width > 700 && window.screen.width <= 1024) {
                        return {width: `${w}px`, height: `${h}px`, margin: `${m}px 0px ${m}px 0px` }
                    }
                }
                if (type === 'nsitemcardcontent') return {width: `${w}px` , height: `${h + 5}px`}
                if (type === 'nsitemcardcontenttext') return {width: `${w + 6}px` , height: `${h + 8}px`}
                if (type === 'name' || type === 'price') return {width: `${w - 11}px`}
            }
        }
    }


    return (
        <div className='nsitemcard nsitemcard--primary' style={{...setSize(width, height, 'nsitemcard', margin)}}>
            <Link className='nsitemcard__link' to={ShopItemCardLink(category, handledName, CheckBundleSetName(setname))} onClick={() => {
                        if (!BundleStatus) GetItem(handledName)
                        if (BundleStatus) GetSet(CheckBundleSetName(setname))
            }}>
                <div className='nsitemcardcontent nsitemcardcontent--primary' style={{...cardStyle, ...setSize(width, height, 'nsitemcardcontent')}}>
                    <img className='nsitemcardcontent__image' src={imgSRC} style={{...setSize(width, height, 'image')}}
                    alt={`${BundleName ? BundleName : name} item in FORTNITE BATTLE ROYALE from the ${setname ? `${setname} set` : 'set'} ${price ? `for ${price} vbucks` : 'for some vbucks'} - FORTNITEBR`}/>
                </div>
                    <div className='nsitemcardcontenttext nsitemcardcontenttext--primary' style={{...setSize(width, height, 'nsitemcardcontenttext')}}>
                        <span className='nsitemcardcontext__name' style={{...setSize(width, height, 'name')}}>
                            {setNameIfBundle(name, BundleStatus, BundleName)}
                        </span>
                        {price && <div className='nsitemcardcontext__price' style={{...setSize(width, height, 'price')}}>
                                    <img src={VBUCKS} className='nsitemcardcontext__icon' alt='vbucks' />{ItemPrice(name)}
                                  </div> 
                        }
                    </div>
            </Link>
        </div>
    )
}

export default NSItemCard