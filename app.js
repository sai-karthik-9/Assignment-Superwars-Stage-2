const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

const initPlayers = (players) => {
    let detailedPlayers = [];
    for(let i=0; i<players.length; i++){
        detailedPlayers.push({
            name: players[i],
            strength: getRandomStrength(),
            image: `images/super-${i+1}.png`,
            type: getRandomType(~~(Math.random() * 2))
        });
    }
    return detailedPlayers;
}

const getRandomStrength = () => {
    return Math.floor(Math.random() * 101);
}

const getRandomType = (i) => {
    if(i==0)
        return "hero";
    else
        return "villain";
}

const buildPlayers = (players, type) => {
    let fragment = '';

    
    for(let i=0; i<players.length; i++){
        if(players[i].type == type){
            fragment += 
                `<div class="player">
                    <img src="${players[i].image}">
                    <div class="name">${players[i].name}</div>
                    <div class="strength">${players[i].strength}</div>
                 </div>
                `
        }
    }
    return fragment;
}
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}