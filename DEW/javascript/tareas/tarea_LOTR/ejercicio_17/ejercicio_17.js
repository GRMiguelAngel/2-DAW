let misions = document.querySelectorAll('.mision');
misions.forEach(mision => {
    mision.addEventListener('click', function(){
        mision.classList.add('active');
    });
});

