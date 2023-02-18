const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('tema-oscuro')
    
    var className = document.body.className;
    if(className== "tema-claro") {
        this.textContent = "Oscuro";
    }
    else{
        this.textContent = "Claro";
    }
});