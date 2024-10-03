let champions = [];

async function get_champions() {
    const url = 'https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json';
    let data = await fetch(url)
    .then(async(response) => {return (await response.json()).data})

    for (const key in data) {
        champions.push(data[key]);
    }
}