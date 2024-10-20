class Villano {
    constructor(name, plan){
        this.name = name;
        this.plan = plan;
    }

    chPlan(){
        let new_plan = document.getElementById('nuevo_plan');
        this.plan = new_plan.value;
        plan.textContent = joker.plan;
    }
}

let joker = new Villano('Joker', 'plan predeterminado');

let plan = document.getElementById('plan');
plan.textContent = joker.plan;

let button =  document.querySelector('button');
button.addEventListener('click', function(){
    joker.chPlan();
    });
