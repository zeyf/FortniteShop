import React from 'react'
import {useContext, useEffect} from 'react'
import SearchFunctions from '../../App Wide Functions/SearchFunctions'
import SearchContext from '../context/SearchContext/SearchContext'
import NSItemCard from '../NSItemCard/NSItemCard'
import ItemFunctions from '../../App Wide Functions/ItemFunctions'
import FormatFunctions from '../../App Wide Functions/FormatFunctions'
import Select from 'react-select'
import './Search.css'

const Search = () => {


    const {
        setInput, setRarity, setItemType, setSlice, getSearch,
        LOADING, INPUT, RARITY, ITEMTYPE, RESULTS,
    } = useContext(SearchContext);

    const {setSearchEndpoint, rarityOptions, itemtypeOptions} = SearchFunctions;
    const {ItemImage, ItemName, ItemRarity} = ItemFunctions;
    const {SetLinkByIDType, setCardRarityStyle, NameCharacterHandler} = FormatFunctions;
    
    useEffect(() => {
        setInput('');
        setRarity(null);
        setItemType(null);
    }, [])

    
    const inputOnChange = (event) => {
        setInput(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
    }

    const rarityOnChange = (event) => {
        const {value} = event;
        setRarity(value)
    }

    const itemtypeOnChange = (event) => {
        const {value} = event;
        setItemType(value)
    }
    
    return (
        <div className='search search--primary'>
            <form className='search__form' onSubmit={onSubmit}>
                <input className='search__input' placeholder='Search by cosmetic item name' onChange={inputOnChange} />
                <Select options={rarityOptions.options} onChange={rarityOnChange} />
                <Select options={itemtypeOptions.options} onChange={itemtypeOnChange} />
        
                <button type='submit' onClick={() => {
                    getSearch(setSearchEndpoint(INPUT, ITEMTYPE, RARITY))
                }}>
                </button>
            </form>
            <div className='searchresults searchresults--primary'>
                {RESULTS ? RESULTS.map((item, i) => {
                    const {id, name} = item
                    

                        return <NSItemCard category={SetLinkByIDType(id)} name={name.toUpperCase()} 
                        cardStyle={setCardRarityStyle(ItemRarity(item))} handledName={NameCharacterHandler(name)}
                        imgSRC={ItemImage(item)}
                        />
                    
                }) : 'HI'}
            </div>
        </div>
    )
}

export default Search
