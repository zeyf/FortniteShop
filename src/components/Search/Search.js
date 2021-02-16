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
        setInput, setRarity, setItemType, getSearch,
        LOADING, INPUT, RARITY, ITEMTYPE, RESULTS
    } = useContext(SearchContext);

    const {setSearchEndpoint} = SearchFunctions;
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
        setRarity(event.target.value)
    }

    const itemtypeOnChange = (event) => {
        setItemType(event.target.value)
    }

    
    return (
        <div className='search search--primary'>
            <form className='search__form' onSubmit={onSubmit}>
                <input className='search__input' placeholder='Search by cosmetic item name' onChange={inputOnChange} />
                <select className='search__select' onChange={rarityOnChange} value={RARITY}> // set value attr to rarity stat vale
                    <option className='search__selectoption' disabled selected>Select rarity</option>
                    <option className='search__selectoption'>Common</option>
                    <option className='search__selectoption'>Uncommon</option>
                    <option className='search__selectoption'>Epic</option>
                    <option className='search__selectoption'>Rare</option>
                    <option className='search__selectoption'>Icon Series</option>
                    <option className='search__selectoption'>Slurp Series</option>
                    <option className='search__selectoption'>DARK SERIES</option>
                    <option className='search__selectoption'>Shadow Series</option>
                    <option className='search__selectoption'>Legendary</option>
                    <option className='search__selectoption'>Star Wars Series</option>
                    <option className='search__selectoption'>Gaming Legends Series</option>
                    <option className='search__selectoption'>DC SERIES</option>
                    <option className='search__selectoption'>MARVEL SERIES</option>
                    <option className='search__selectoption'>Lava Series</option>
                    <option className='search__selectoption'>Frozen Series</option>
                </select>
                <select className='search__select' onChange={itemtypeOnChange} value={ITEMTYPE}> // set value attr to rarity stat vale
                    <option disabled selected>Select item type</option>
                    <option>Outfit</option>
                    <option>Pickaxe</option>
                    <option>Glider</option>
                    <option>Rare</option>
                    <option>Icon Series</option>
                    <option>Slurp Series</option>
                    <option>DARK SERIES</option>
                    <option>Shadow Series</option>
                    <option>Legendary</option>
                    <option>Star Wars Series</option>
                    <option>Gaming Legends Series</option>
                    <option>DC SERIES</option>
                    <option>MARVEL SERIES</option>
                    <option>Lava Series</option>
                    <option>Frozen Series</option>
                </select>
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
