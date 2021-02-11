import React, {useContext} from 'react'
import FormatFunctions from '../../../../../App Wide Functions/FormatFunctions';
import ItemFunctions from '../../../../../App Wide Functions/ItemFunctions';
import ItemContext from '../../../../context/ItemContext/ItemContext';
import './ItemVariants.css';


const ItemVariants = () => {

    const {item} = useContext(ItemContext);
    const {setCardRarityStyle} = FormatFunctions;

    return (
        <div className='itemvariantssection itemvariantssection--primary'>
            <h2 className="itemvariantssection__head">
                VARIANTS {item.variants && `(${item.variants[0].options.length})`}
            </h2>
            <div className="itemvariants itemvariants--primary">
                    {item.variants && item.variants.map((variant, i) => {
                        const {id, rarity} = item;
                        const {displayValue} = rarity;
                        const {options} = variant
                        return options.map((option, i) => {
                            const {image} = option;
                            return  <div className='variantcard variantcard--primary'>
                                        <img src={image} className='variantcard__image' style={setCardRarityStyle(displayValue)} />
                                    </div>
                        })
                    })}
            </div>
        </div>
    )
}

export default ItemVariants
