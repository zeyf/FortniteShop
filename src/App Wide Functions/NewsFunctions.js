const NewsFunctions = {
    ReturnInfo: (data, type) => {
        if (data) {
            const {date, motds} = data;
            if (type === 'motds') return motds
            if (type === 'date') return date
        }
    },
    ReturnData: (news, type) => {
        if (news) {
            const {stw, br, creative} = news;
            if (type === 'CREATIVE') return creative
            if (type === 'BR') return br
            if (type === 'STW') return stw
        }
    },
}

export default NewsFunctions;