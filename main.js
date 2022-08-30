function clickMenu() {
    console.log("diste click");
    let all = document.getElementsByClassName('lista1');
    Object.values(all).map(item=> {
        console.log(item);
        item.classList.toggle("opened");
    
})  
    console.log("segundo codigo");
    let icono = document.getElementsByClassName("iconu");
    Object.values(icono).map(item=> {
    console.log(item);
    item.classList.toggle("icono");
    })
}
const iconMenu = document.getElementById ("icono");
iconMenu.addEventListener('click', clickMenu);
