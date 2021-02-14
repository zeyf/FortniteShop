import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

const SkeletonTypes = (component, type, VPwidth, VPHeight) => {
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
                        <Skeleton width={200} height={50} />
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
                        <Skeleton width={100} height={35} />
                    </SkeletonTheme>
        }
    }
}

export default SkeletonTypes