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
import {Helmet} from 'react-helmet';

const Search = () => {


    const {
        setInput, setRarity, setItemType, setnewSlice, getSearch, setResults,
        INPUT, RARITY, ITEMTYPE, RESULTS, CURRENTSLICE, ALERT, LOADING
    } = useContext(SearchContext);

    const {setSearchEndpoint, rarityOptions, itemtypeOptions, resultsLength, filteringBy} = SearchFunctions;
    const {ItemImage, ItemRarity} = ItemFunctions;
    const {SetLinkByIDType, setCardRarityStyle, NameCharacterHandler} = FormatFunctions;
    
    useEffect(() => {
        setResults(null)
        getSearch(undefined, true)
        setInput('');
        setRarity(null);
        setItemType(null);
    }, [])

    
    const inputOnChange = (event) => {
        setResults(null)
        setInput(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
    }

    const rarityOnChange = (event) => {
        setResults(null)
        if (event) {
            const {value} = event;
            setRarity(value);
        } else {
            setRarity(null);
        }
    }

    const itemtypeOnChange = (event) => {
        setResults(null)
        if (event) {
            const {value} = event;
            setItemType(value)
        } else {
            setItemType(null)
        }
    }

    return (
        <div className='search search--primary'>
            <Helmet><title>Item Search - ForniteBRShop</title></Helmet>
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
                    <Select className='filters__select' placeholder={rarityOptions.label} options={rarityOptions.options} 
                    label={rarityOptions.label} onChange={rarityOnChange} isClearable={true} />
                    <Select className='filters__select' placeholder={itemtypeOptions.label} options={itemtypeOptions.options} 
                    label={rarityOptions.label} onChange={itemtypeOnChange} isClearable={true} />
            
                </div>
                    <button className='search__button' type='submit' onClick={() => {
                        if (INPUT !== '' || ITEMTYPE !== null || RARITY !== null) getSearch(setSearchEndpoint(INPUT, ITEMTYPE, RARITY))
                    }}>
                        APPLY
                    </button>
            </form>
            <div className='showing showing--primary'>
                <p className='showing__text'>{RESULTS && `Currently showing ${resultsLength(RESULTS) > 4000 ? `ALL ${resultsLength(RESULTS)}` : `${resultsLength(RESULTS)}`} items.`}</p>
                <p className='showing__text'>{RESULTS && filteringBy(INPUT, ITEMTYPE, RARITY)}</p>
            </div>
            {LOADING ? <img src={LOADER} alt='fortnite battle royale item search loader' /> : <div className='searchresults searchresults--primary'>
                {ALERT ? <p className='showing__text'>{ALERT}</p> :
                <InfiniteScroll className='resultsinfinitescroll resultsinfinitescroll--primary'
                dataLength={() => {return resultsLength(RESULTS)}}
                next={() =>{if (resultsLength(RESULTS) > CURRENTSLICE) setnewSlice(CURRENTSLICE)}}
                scrollThreshold={0.95} hasMore={()=> {
                    if (resultsLength(RESULTS) > CURRENTSLICE) return true
                }}
                >
                    {RESULTS && RESULTS.map((item, i) => {
                        const {id, name, set} = item
                        if (i < CURRENTSLICE && name !== 'null' && name !== 'TBD') {
                            return <NSItemCard category={SetLinkByIDType(id)} name={name.toUpperCase()} 
                            cardStyle={setCardRarityStyle(ItemRarity(item))} handledName={NameCharacterHandler(name)}
                            imgSRC={ItemImage(item)} height={250} width={250} setname={set ? set.value : ''}
                            />
                        }
                        
                    })}

                </InfiniteScroll>
                }
            </div>}
        </div>
    )
}

export default Search
