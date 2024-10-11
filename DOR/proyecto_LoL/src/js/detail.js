export function show_detail() {
    let fronts = document.querySelectorAll(".front");
    
    fronts.forEach(front => {
        front.onclick = () => {
            let detail = front.nextElementSibling;
            detail.style.display = 'block';
        };
    });
}

export function close_detail(){
    let details = document.querySelectorAll(".detail");
    details.forEach(detail => {
        detail.style.display = 'none';
    });
}