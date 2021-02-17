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

const Search = () => {


    const {
        setInput, setRarity, setItemType, setnewSlice, getSearch,
        INPUT, RARITY, ITEMTYPE, RESULTS, CURRENTSLICE
    } = useContext(SearchContext);

    const {setSearchEndpoint, rarityOptions, itemtypeOptions, resultsLength} = SearchFunctions;
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

   
    console.log(resultsLength(RESULTS))
    return (
        <div className='search search--primary'>
            <form className='search__form' onSubmit={onSubmit}>
                <input className='search__input' placeholder='Search by cosmetic item name' onChange={inputOnChange} />
                <Select options={rarityOptions.options} onChange={rarityOnChange} />
                <Select options={itemtypeOptions.options} onChange={itemtypeOnChange} />
        
                <button type='submit' onClick={() => {
                    getSearch(setSearchEndpoint(INPUT, ITEMTYPE, RARITY))
                }}>
                    click me bih
                </button>
            </form>
            <div className='searchresults searchresults--primary'>
                <InfiniteScroll className='scroller'
                dataLength={() => {return resultsLength(RESULTS)}}
                next={() =>{if (resultsLength(RESULTS) > CURRENTSLICE) setnewSlice(CURRENTSLICE)}}
                scrollThreshold={0.95} hasMore={()=> {
                    if (resultsLength(RESULTS) > CURRENTSLICE) return true
                }}>
                    {RESULTS ? RESULTS.map((item, i) => {
                        const {id, name} = item
                        if (i < CURRENTSLICE) {
                            return <NSItemCard category={SetLinkByIDType(id)} name={name.toUpperCase()} 
                            cardStyle={setCardRarityStyle(ItemRarity(item))} handledName={NameCharacterHandler(name)}
                            imgSRC={ItemImage(item)}
                            />
                        }
                        
                    }) : 'HI'}

                </InfiniteScroll>
            </div>
        </div>
    )
}

export default Search
