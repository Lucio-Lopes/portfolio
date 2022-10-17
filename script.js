const menuItens = document.querySelectorAll("nav ul li a");
const menuItem1 = document.querySelector("#item1");
const menuItem2 = document.querySelector("#item2");
const menuItem3 = document.querySelector("#item3");
const menuItem4 = document.querySelector("#item4");
const menuItem5 = document.querySelector("#item5");

const menuBtn = document.querySelector(".menu-btn");
const closeMenu = document.querySelector(".close-btn");
const menu = document.querySelector("#nav-menu");

console.log("teste")
menuItens.forEach((a) =>{
    a.addEventListener("click",(e)=>{
        const item = e.target.innerText;

        switch(item){
            case "HOME":

                if(menuItem2.className == "active" || menuItem3.className == "active" || menuItem4.className == "active" || menuItem5.className == "active"){
                    menuItem2.classList.remove("active")
                    menuItem3.classList.remove("active")
                    menuItem4.classList.remove("active")
                    menuItem5.classList.remove("active")
                    menuItem1.classList.add("active")
                    menu.style.display = "none"
                    menuBtn.style.display = "block"
                    closeMenu.style.display = "none"
                }

            break;

            case "SOBRE":

                if(menuItem1.className == "active" || menuItem3.className == "active" || menuItem4.className == "active" || menuItem5.className == "active"){
                    menuItem1.classList.remove("active")
                    menuItem3.classList.remove("active")
                    menuItem4.classList.remove("active")
                    menuItem5.classList.remove("active")
                    menuItem2.classList.add("active")
                    menu.style.display = "none"
                    menuBtn.style.display = "block"
                    closeMenu.style.display = "none"
                }

            break;

            case "HABILIDADES":
                if(menuItem2.className == "active" || menuItem1.className == "active" || menuItem4.className == "active" || menuItem5.className == "active"){
                    menuItem2.classList.remove("active")
                    menuItem1.classList.remove("active")
                    menuItem4.classList.remove("active")
                    menuItem5.classList.remove("active")
                    menuItem3.classList.add("active")
                    menu.style.display = "none"
                    menuBtn.style.display = "block"
                    closeMenu.style.display = "none"
                }
                
            break;

            case "SERVIÇOS":
                
                if(menuItem2.className == "active" || menuItem3.className == "active" || menuItem1.className == "active" || menuItem5.className == "active"){
                    menuItem2.classList.remove("active")
                    menuItem3.classList.remove("active")
                    menuItem1.classList.remove("active")
                    menuItem5.classList.remove("active")
                    menuItem4.classList.add("active")
                    menu.style.display = "none"
                    menuBtn.style.display = "block"
                    closeMenu.style.display = "none"
                }

            break;
              
            case "TRABALHO":

                if(menuItem2.className == "active" || menuItem3.className == "active" || menuItem4.className == "active" || menuItem1.className == "active"){
                    menuItem2.classList.remove("active")
                    menuItem3.classList.remove("active")
                    menuItem4.classList.remove("active")
                    menuItem1.classList.remove("active")
                    menuItem5.classList.add("active")
                    menu.style.display = "none"
                    menuBtn.style.display = "block"
                    closeMenu.style.display = "none"
                }

            break;
            default:
                return;                
        }
    })
})

menuBtn.addEventListener("click", ()=>{
    menu.style.display = "flex";
    menuBtn.style.display = "none"
    closeMenu.style.display = "block"
})
closeMenu.addEventListener("click", ()=>{
    menu.style.display = "none";
    menuBtn.style.display = "block"
    closeMenu.style.display = "none"
})

