const StatFunctions = {
    ReturnInfo: (datatype, subtype) => {
        if (datatype) {
                const {
                    deaths, kd, kills, killsPerMatch, killsPerMin,
                    lastModified, matches, minutesPlayed, playersOutlived,
                    score, scorePerMatch, scorePerMin, top3, top5, top6,
                    top10, top12, top25, wins, winRate
                } = datatype;

                if (subtype === 'deaths') return deaths
                if (subtype === 'kd') return kd
                if (subtype === 'kills') return kills
                if (subtype === 'killsPerMatch') return killsPerMatch.toFixed(2)
                if (subtype === 'killsPerMin') return killsPerMin.toFixed(2)
                if (subtype === 'lastModified') return lastModified
                if (subtype === 'matches') return matches
                if (subtype === 'minutesPlayed') return minutesPlayed
                if (subtype === 'playersOutlived') return playersOutlived
                if (subtype === 'score') return score
                if (subtype === 'scorePerMatch') return scorePerMatch
                if (subtype === 'scorePerMin') return scorePerMin
                if (subtype === 'top3') return top3
                if (subtype === 'top5') return top5
                if (subtype === 'top6') return top6
                if (subtype === 'top10') return top10
                if (subtype === 'top12') return top12
                if (subtype === 'top25') return top25
                if (subtype === 'wins') return wins
                if (subtype === 'winRate') return `${winRate.toFixed(2)}%`
        }
    },
    AccName: (data) => {
        if (data) {
            const {name} = data;
            return name;
        }
    },
    setStatcardColor: (type) => {
        if (type === 'SOLOS') return {background: '#f05454'}
        if (type === 'DUOS') return {background: '#79d70f'}
        if (type === 'SQUADS') return {background: '#00bcd4'}
        // if (type === 'TRIOS') return {background: '#f0a500'}
    },
    NumberFormatter: (number, type) => {
        if (number) {
            if (type) return Number(number).toFixed(2).toLocaleString('en')
            if (!type) return Number(number).toLocaleString('en')
        }
        if (!number) return '-'
    },
    FormatDaysPlayed: (minutes) => {

        const Days = (minutes/1440).toFixed(0)
        const Hours = ((minutes / 60) % 24).toFixed(0)
        const Minutes = (minutes % 60).toFixed(0)

        if (Days !== NaN && Hours !== NaN && Minutes !== NaN) {
            if (Days !== '0' && Minutes + 0.01 !== '0' && Hours !== '0' && Days !== 'NaN' && Minutes !== 'NaN' && Hours !== 'NaN') return (`${Days}D ${Hours}H ${Minutes === '0' ? 1 : Minutes}M`)
            if (Days === '0' && Minutes !== '0' && Hours !== '0') return (`${Hours}H ${Minutes}M`)
            if (Days === '0' && Minutes !== '0' && Hours === '0') return (`${Minutes}M`)
        }
        //eslint-disable-next-line
    },
    AvgMatchTime: (minutes, matches) => {
        const AVGMinutes = (minutes / matches);
        const AVGSeconds = (Number(`0.` + String(AVGMinutes).split(/\./gi)[1])*60).toFixed(0)
        
        if (String(AVGMinutes)[0] !== '0') {
            if (String(AVGMinutes) !== 'NaN' && AVGSeconds !== 'NaN') return `${AVGMinutes.toFixed(0)}M ${AVGSeconds}S`
        } else if (String(AVGMinutes)[0] !== '0' && String(AVGMinutes) !== 'NaN') {
            return `${AVGSeconds}S`
        }
    },
    setBackgroundType: (windowSelected, TIMEWINDOW) => {
        if (TIMEWINDOW === windowSelected) return {background: '#fdb827' ,transition: '1.25s'}
    }
}

export default StatFunctions