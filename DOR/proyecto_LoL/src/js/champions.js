export default class Champion {

constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.title = data.title;
    this.blurb = data.blurb;
    this.image = "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + this.id + "_0.jpg";
    this.role = data.tags[0];
    this.playstyle = data.tags[1];
    this.stats = data.stats;
}
}