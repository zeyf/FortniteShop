

const StatFunctions = {
    ReturnInfo: (datatype, subtype) => {
        if (datatype) {
                const {
                    deaths, kd, kills, killsPerMatch, killsPerMin,
                    lastModified, matches, minutesPlayed, playersOutlived,
                    score, scorePerMatch, scorePerMin, top3, top5,
                    top10, top25, wins, winRate
                } = datatype;

                if (subtype === 'deaths') return deaths
                if (subtype === 'kd') return kd
                if (subtype === 'kills') return kills
                if (subtype === 'killsPerMatch') return killsPerMatch
                if (subtype === 'killsPerMin') return killsPerMin
                if (subtype === 'lastModified') return lastModified
                if (subtype === 'matches') return matches
                if (subtype === 'minutesPlayed') return minutesPlayed
                if (subtype === 'playersOutlived') return playersOutlived
                if (subtype === 'score') return score
                if (subtype === 'scorePerMatch') return scorePerMatch
                if (subtype === 'scorePerMin') return scorePerMin
                if (subtype === 'top3') return top3
                if (subtype === 'top5') return top5
                if (subtype === 'top10') return top10
                if (subtype === 'top25') return top25
                if (subtype === 'wins') return wins
                if (subtype === 'winRate') return winRate
        }
    },
    AccName: (data) => {
        if (data) {
            const {name} = data;
            return name;
        }
    }
}

export default StatFunctions