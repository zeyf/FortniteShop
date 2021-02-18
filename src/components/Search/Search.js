import React from 'react'
import {useContext, useEffect} from 'react'
import SearchFunctions from '../../App Wide Functions/SearchFunctions'
import SearchContext from '../context/SearchContext/SearchContext'
import NSItemCard from '../NSItemCard/NSItemCard'
import ItemFunctions from '../../App Wide Functions/ItemFunctions'
import FormatFunctions from '../../App Wide Functions/FormatFunctions'
import Select from 'react-select'
import InfiniteScroll from 'react-infinite-scroll-component'
import './Search.css'
import LOADER from '../../media/images/InfinityTeal.svg'
const Search = () => {


    const {
        setInput, setRarity, setItemType, setnewSlice, getSearch, setResults,
        INPUT, RARITY, ITEMTYPE, RESULTS, CURRENTSLICE
    } = useContext(SearchContext);

    const {setSearchEndpoint, rarityOptions, itemtypeOptions, resultsLength, filteringBy} = SearchFunctions;
    const {ItemImage, ItemName, ItemRarity} = ItemFunctions;
    const {SetLinkByIDType, setCardRarityStyle, NameCharacterHandler} = FormatFunctions;
    
    useEffect(() => {
        setResults(null)
        getSearch(undefined, true)
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
            <div className='searchheading searchheading--primary'>
                <h1 className='searchheading__head'>
                    COSMETICS SEARCH
                </h1>
                <p className='searchheading__text'>
                    Search any fortnite item! Enter keywords below. You can use the Item Type and Rarity filters to refine your search.
                </p>
            </div>
            <form className='search__form' onSubmit={onSubmit}>
                <input className='search__input' placeholder='Enter any item name...' onChange={inputOnChange} />
                <div className='filters filters--primary'>
                    <Select className='filters__select' options={rarityOptions.options} label={rarityOptions.label} onChange={rarityOnChange} />
                    <Select className='filters__select' options={itemtypeOptions.options} label={rarityOptions.label} onChange={itemtypeOnChange} />
            
                </div>
                    <button className='search__button' type='submit' onClick={() => {
                        if (INPUT !== '' || ITEMTYPE !== null || RARITY !== null) getSearch(setSearchEndpoint(INPUT, ITEMTYPE, RARITY))
                    }}>
                        APPLY
                    </button>
            </form>
            <div className='showing showing--primary'>
                <p className='showing__text'>{RESULTS && filteringBy(INPUT, ITEMTYPE, RARITY)}</p>
            </div>
            <div className='searchresults searchresults--primary'>
                <InfiniteScroll className='resultsinfinitescroll resultsinfinitescroll--primary'
                dataLength={() => {return resultsLength(RESULTS)}}
                next={() =>{if (resultsLength(RESULTS) > CURRENTSLICE) setnewSlice(CURRENTSLICE)}}
                scrollThreshold={1.00} hasMore={()=> {
                    if (resultsLength(RESULTS) > CURRENTSLICE) return true
                }}
                >
                    {RESULTS && RESULTS.map((item, i) => {
                        const {id, name} = item
                        if (i < CURRENTSLICE && name !== 'null' && name !== 'tbd') {
                            return <NSItemCard category={SetLinkByIDType(id)} name={name.toUpperCase()} 
                            cardStyle={setCardRarityStyle(ItemRarity(item))} handledName={NameCharacterHandler(name)}
                            imgSRC={ItemImage(item)} islink={true} height={250} width={250}
                            />
                        }
                        
                    })}

                </InfiniteScroll>
            </div>
        </div>
    )
}

export default Search
