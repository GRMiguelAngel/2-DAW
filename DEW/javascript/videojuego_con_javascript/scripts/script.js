function InitCanvas(){
    let canvas = document.getElementById("my_canvas").getContext("2d");
    let background_image = new Image();
    let nave_image = new Image();
    let enemy_pic1 = new Image();
    let enemy_pic2 = new Image();

    background_image.src = "images/background.jpg";
    nave_image.src = "images/main_starship-Photoroom.png";
    enemy_pic1.src = "images/enemy_starship.png";
    enemy_pic2.src = "images/boss_starship-Photoroom.png";

    let canvas_width = canvas.width;
    let canvas_height = canvas.canvas.height;

    let enemy_template = function(options){
        return{
            id: options.id || "",
            x: options.x || "",
            y: options.y || "",
            w: options.w || "",
            h: options.h || "",
            image: options.image || enemy_pic1
        }
    }

    let enemies = [
        new enemy_template({id: "1", x: 100, y: -20, w: 50, h: 30}),
        new enemy_template({id: "2", x: 225, y: -20, w: 50, h: 30}),
        new enemy_template({id: "3", x: 350, y: -20, w: 80, h: 30}),
        new enemy_template({id: "4", x: 100, y: -70, w: 80, h: 30}),
        new enemy_template({id: "5", x: 225, y: -70, w: 50, h: 30}),
        new enemy_template({id: "6", x: 350, y: -70, w: 50, h: 30}),
        new enemy_template({id: "7", x: 475, y: -70, w: 50, h: 30}),
        new enemy_template({id: "8", x: 600, y: -70, w: 80, h: 30}),
        new enemy_template({id: "9", x: 475, y: -20, w: 50, h: 30}),
        new enemy_template({id: "10", x: 600, y: -20, w: 50, h: 30}),


        new enemy_template({id: "11", x: 100, y: -220, w: 50, h: 30, image: enemy_pic2}),
        new enemy_template({id: "12", x: 225, y: -220, w: 50, h: 30, image: enemy_pic2}),
        new enemy_template({id: "13", x: 350, y: -220, w: 80, h: 30, image: enemy_pic2}),
        new enemy_template({id: "14", x: 100, y: -270, w: 80, h: 30, image: enemy_pic2}),
        new enemy_template({id: "15", x: 225, y: -270, w: 50, h: 30, image: enemy_pic2}),
        new enemy_template({id: "16", x: 350, y: -270, w: 50, h: 30, image: enemy_pic2}),
        new enemy_template({id: "17", x: 475, y: -270, w: 50, h: 30, image: enemy_pic2}),
        new enemy_template({id: "18", x: 600, y: -270, w: 80, h: 30, image: enemy_pic2}),
        new enemy_template({id: "19", x: 475, y: -220, w: 50, h: 30, image: enemy_pic2}),
        new enemy_template({id: "20", x: 600, y: -220, w: 50, h: 30, image: enemy_pic2}),
    ]

    function luncher(){
        (this.y = 500),
        (this.x = canvas_width * 0.5 - 25),
        (this.w = 100),
        (this.h = 100),
        this.direction,
        (this.bg = "white"),
        (this.missiles = []);

        this.game_status = {
            over: false,
            message: "",
            fill_style: "white",
            font: "italic bold 36px Arial, sans-serif",
        }

        this.render = function(){
            if (this.direction === "left"){
                this.x -= 5;
            } else if (this.direction === "right"){
                this.x += 5;
            } else if (this.direction === "up_arrow"){
                this.y -= 5;
            } else if (this.direction === "down_arrow"){
                this.y += 5;
        }
        }

    let render_enemy = function(enemy_list){
        for (let i = 0; i < enemy_list.length; i++){
            console.log(enemy_list[i]);
            canvas.draw_image(enemy_list[i].image, enemy_list[i].x, enemy_list[i].y += .5, enemy_list[i].w, enemy_list[i].h);
            // launcher.hit_detect_lower_level(enemy_list[i]);
        }
    }
    }
}