export default class Champion {

constructor(data) {
    this.name = data.name;                          // Champion's name
    this.id = data.id;                              // Champion's id
    this.image = "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + this.id + "_0.jpg";
    this.role = data.tags[0];
    this.playstyle = data.tags[1];    
}
}