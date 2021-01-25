import React, {useContext, useEffect} from 'react'
import SetContext from '../context/SetContext/SetContext';
import ItemSet from '../Item/ItemDetailsSection/Item Details Components/Item Set/ItemSet'
import Spinner from '../layout/spinner/Spinner';

const Set = ({match}) => {

    const setContext = useContext(SetContext);
    useEffect(() => {
       setContext.GetSet(match.params.setname)
        //eslint-disable-next-line
    }, [])

    const {SetName, SetInfo, loading} = setContext;
    return (

        <div className='set set--primary'>
            {loading ? <Spinner /> :  <>
            <h2 className="set__head">
                THE <span style={{color: '#ffe227'}}>{SetName} SET</span> ({SetInfo && SetInfo.length})
            </h2>
            <div className="setcontainer setcontainer--primary">
                {SetInfo && SetInfo.map((item, i) => {
                    
                    return <img src={item.images.icon} style={{height: '150px', width: '150px'}} />
                    
                })}
            </div>
            </>
            }
        </div>
    )
}

export default Set
