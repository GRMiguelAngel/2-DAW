function encontrarAnillo() {
    let list = document.querySelectorAll('#personajes li');
    list.forEach(character => {
        if (character.textContent.includes('Frodo')) {
            character.style.background = 'red';
        }
    });   
};
let button = document.querySelector('#encontrarAnillo');
button.addEventListener('click', function(){
    encontrarAnillo();
});