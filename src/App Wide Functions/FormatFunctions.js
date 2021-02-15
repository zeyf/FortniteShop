

const FormatFunctions = {

    SetLinkByIDType: (id) => {
        if (id) {
            const itemtype = id.split('_')[0];

            if (itemtype === 'CID') return 'skins';
            if (itemtype === 'EID') return 'emotes';
            if (itemtype === 'BID') return 'backblings';
            if (itemtype === 'KID') return 'katanas'
            if (itemtype === 'SPID') return 'sprays'
            if (itemtype === 'LSID') return 'loadingscreens'
            if (itemtype === 'Trails') return 'contrails'
            if (itemtype === 'MusicPack') return 'musicpacks'; 
            if (itemtype === 'Pickaxe') return 'pickaxes' 
            if (itemtype === 'Glider') return 'gliders';
            if (itemtype === 'Emoji') return 'emojis'
            if (itemtype === 'Wrap') return 'wraps'
            if (itemtype === 'TOY') return 'toys'
            if (itemtype === 'PetCarrier') return 'pets'
            if (itemtype === 'BannerToken') return 'banners'
        }
    },
    NameCharacterHandler: (name) => {

        const spaceregex = /\s/gi;
        const dashregex = /-/gi;
        
        if (spaceregex.test(name) && !dashregex.test(name)) {

            const SpaceReplaceResult = name.replaceAll(spaceregex, '-').toLowerCase()
            return SpaceReplaceResult;

        } else if (dashregex.test(name) && !spaceregex.test(name)) { 

            const DashReplaceResult = name.replaceAll(dashregex, '~').toLowerCase()
            return DashReplaceResult

        } else if(dashregex.test(name) && spaceregex.test(name)) {

            const DashReplaceResult = name.replaceAll(dashregex, '~').toLowerCase()
            const ReplaceSpacesToo = DashReplaceResult.replaceAll(spaceregex, '-')
            return ReplaceSpacesToo
        } else if (!dashregex.test(name) && !spaceregex.test(name)) {
            return name.toLowerCase();
        }
    },
    setCardRarityStyle: (type) => {
        
        if (type === 'Common') 
            return {
                background: "radial-gradient(rgb(190, 190, 190), rgb(100, 100, 100))",
                border: "3px solid #b1b1b1"
            }
        if (type === 'Uncommon') 
            return {
                background: "radial-gradient(rgb(105, 187, 30), rgb(23, 81, 23))",
                border: "3px solid rgb(135, 227, 57)"
            }
        if (type === 'Epic') 
            return {
                background: 'radial-gradient(rgb(195, 89, 255), rgb(75, 36, 131))',
                border: '3px solid #e95eff'
            }
        if (type === 'Rare') 
            return {
                background: 'radial-gradient(rgb(44, 193, 255), rgb(20, 57, 119))',
                border: '3px solid rgb(55, 209, 255)'
            }
        if (type === 'Icon Series') 
            return {
                background: 'radial-gradient(rgb(54, 183, 183), rgb(37, 107, 107))',
                border: '3px solid rgb(82, 224, 224)'
            }
        if (type === 'Slurp Series')
            return {
                background: 'radial-gradient(rgb(41, 241, 163), rgb(18, 169, 164))',
                border: '3px solid #53f0ff'   
            }
        if(type === 'DARK SERIES')
            return {
                background: 'radial-gradient(rgb(251, 34, 223), rgb(82, 12, 111))',
                border: '3px solid rgb(255, 66, 231)'
            }
        if (type === 'Shadow Series')
            return {
                background: 'radial-gradient(rgb(113, 113, 113), rgb(25, 25, 25))',
                border: '3px solid #949494'
            }
        if (type === 'Legendary')
            return {
                background: 'radial-gradient(rgb(234, 141, 35), rgb(120, 55, 29))',
                border: '3px solid rgb(233, 141, 75)'
            }
        if (type === 'Star Wars Series')
            return {
                background: 'radial-gradient(rgb(27, 54, 110), rgb(8, 23, 55))',
                border: '3px solid white'
            }
        if (type === 'Gaming Legends Series') // FIX
            return {
                background: 'radial-gradient(#5447d4,#312497)',
                border: '3px solid #8078ff'
            }
        if (type === 'DC SERIES') // FIX
            return {
                background: 'radial-gradient(#5475c7,#243461)',
                border: '3px solid #6094ce'
            }
        if (type === 'MARVEL SERIES') // FIX
            return {
                background: 'radial-gradient(#c53333,#761b1b)',
                border: '3px solid #ef3537'
            }
        if (type === 'Lava Series') // FIX
            return {
                background: 'radial-gradient(#ea8d23,#6a0a31)',
                border: '3px solid #d19635'
            }
        if (type === 'Frozen Series') // FIX
            return {
                background: 'radial-gradient(#94dfff,#269ed6)',
                border: '3px solid #c4dff7'
            }
    }
}

export default FormatFunctions;