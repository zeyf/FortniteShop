import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

const SkeletonTypes = (component, type) => {
    if (component === 'news') {
        if (type === 'newscard') {
            return  <SkeletonTheme color='#cececf'>
                        <Skeleton width={350} height={300} />
                    </SkeletonTheme>
        } else if (type === 'newssectiontitle') {
            return  <SkeletonTheme color='#cececf'>
                        <Skeleton width={275} height={50} />
                    </SkeletonTheme>
        }
    } if (component === 'playerstats') {
        if (type === 'namehead') {
            return  <SkeletonTheme color='#cececf'>
                        <Skeleton width={150} height={25} />
                    </SkeletonTheme>
        } else if (type === 'headmatchcount') {
            return  <SkeletonTheme color='#cececf'>
                        <Skeleton width={100} height={25} />
                    </SkeletonTheme>
        } else if (type === 'dynamiccarddata') {
            return  <SkeletonTheme color='#cececf'>
                        <Skeleton width={100} height={25} />
                    </SkeletonTheme>
        } else if (type === 'dynamicoveralldata') {
            return  <SkeletonTheme color='#cececf'>
                        <Skeleton width={75} height={35} />
                    </SkeletonTheme>
        }
    } if (component === 'shopitemcard') {
        if (type <= 700) return  <SkeletonTheme color='#cececf'>
                        <Skeleton width={150} height={150} />
                    </SkeletonTheme>
        if (type > 700 && type <= 1024) return  <SkeletonTheme color='#cececf'>
                        <Skeleton width={200} height={225} />
                    </SkeletonTheme>
        if (type > 1600) return  <SkeletonTheme color='#cececf'>
                        <Skeleton width={200} height={225} />
                    </SkeletonTheme>
        if (type > 1024 && type <= 1600) return  <SkeletonTheme color='#cececf'>
                        <Skeleton width={180} height={235} />
                    </SkeletonTheme>
        
        
        
    } 
}

export default SkeletonTypes