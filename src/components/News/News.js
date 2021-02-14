import './News.css'
import {useContext, useEffect} from 'react'
import NewsContext from '../context/NewsContext/NewsContext'
import NewsSection from './NewsSection/NewsSection'
import NewsFunctions from '../../App Wide Functions/NewsFunctions'
import NewsSkeleton from './NewsSkeleton'

const News = () => {

    useEffect(() => {
        GetNews();
    }, [])

    const {GetNews, LOADING, NEWS} = useContext(NewsContext);
    const {ReturnData, ReturnInfo} = NewsFunctions;

    return (
        <div className='news news--primary'>
            <div className='newssections newssections--primary'>
                {LOADING ? <NewsSkeleton /> : <>
                {ReturnInfo(ReturnData(NEWS, 'BR'), 'motds') && <NewsSection type='BATTLE ROYALE NEWS' data={ReturnInfo(ReturnData(NEWS, 'BR'), 'motds')} key='BR' loadstate={LOADING} />}
                {ReturnInfo(ReturnData(NEWS, 'CREATIVE'), 'motds') && <NewsSection type='CREATIVE MODE NEWS' data={ReturnInfo(ReturnData(NEWS, 'CREATIVE'), 'motds')} key='CREATIVE' loadstate={LOADING} />}
                {ReturnInfo(ReturnData(NEWS, 'STW'), 'motds') && <NewsSection type='SAVE THE WORLD NEWS' data={ReturnInfo(ReturnData(NEWS, 'CREATIVE'), 'motds')} key='STW' loadstate={LOADING} />}
                </>
            }
            </div>
        </div>
    )
}

export default News
