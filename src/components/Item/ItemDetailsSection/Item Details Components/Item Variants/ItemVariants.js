import React, {useContext} from 'react'
import ItemContext from '../../../../context/ItemContext/ItemContext';
import './ItemVariants.css';


const ItemVariants = () => {

    const iContext = useContext(ItemContext);

    const VariantFunctions = {

        GetVariantImages: () => {
            if (iContext.item) {
                if (iContext.item.variants) {
                    const allvariants = iContext.item.variants.map((item, i) => {
                        const varianttypeimages = item.options.map((current, pos) => {

                            return current.image;
                        })
                        return varianttypeimages;
                    })
                    return allvariants

                }
            }
        },
        CardStyle: () => {
            if (iContext.item) {
                const itemrarity = iContext.item.rarity.displayValue;
                
                if(itemrarity === 'Uncommon') {
                    return iContext.CardRarityStyles.uncommon;
                } else if (itemrarity === 'Epic') {
                    return iContext.CardRarityStyles.epic;
                } else if (itemrarity === 'Rare') {
                    return iContext.CardRarityStyles.rare;
                } else if (itemrarity === 'Icon Series') {
                    return iContext.CardRarityStyles.iconseries;
                } else if (itemrarity === 'Slurp Series') {
                    return iContext.CardRarityStyles.slurpseries;
                } else if (itemrarity === 'DARK SERIES') {
                    return iContext.CardRarityStyles.dark;
                } else if (itemrarity === 'Legendary') {
                    return iContext.CardRarityStyles.legendary;
                }
            }
        }
    }

    return (
        <div className='itemvariantssection itemvariantssection--primary'>
            <h2 className="itemvariantssection__head">
                VARIANTS
            </h2>
            <div className="itemvariants itemvariants--primary">
                    {VariantFunctions.GetVariantImages().map((item, i) => {
                        const image = item.map((current, i) => {
                            return  <div className='variantcard variantcard--primary'>
                                        <img src={current} className='variantcard__image' style={VariantFunctions.CardStyle()} />
                                    </div>
                        })
                        return image;
                    })}
            </div>
        </div>
    )
}

export default ItemVariants
