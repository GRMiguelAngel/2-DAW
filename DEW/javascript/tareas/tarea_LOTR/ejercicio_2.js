function chNasgul(element) {
    if (element.type === "mouseover") {
        element.currentTarget.textContent =  "Nasgul";
        element.currentTarget.style.color ="white";
        element.currentTarget.style.background = "black";
    }
}

let nasgulList = document.querySelectorAll("#nasgul li");
nasgulList.forEach(nasgul => {
    nasgul.addEventListener('mouseover', chNasgul);
});
