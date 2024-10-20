const reinos = Array.from(document.getElementsByClassName("reino"))
reinos.forEach(reino => {
    reino.addEventListener("click", () => {
        alert(`Reino de ${reino.id}`)
    })
})