const sizeButtons = document.querySelectorAll(".size")
const items = document.querySelectorAll(".item")
const container = document.querySelector(".container")

const initialSizeButton = document.querySelector("button[value='30']")
initialSizeButton.classList.add("active");

Array.prototype.randomchoice = function(){
    return this[Math.floor(Math.random()*this.length)];
  }

  function deactive(buttons) {
    buttons.forEach((button) => {
        button.classList.remove('active');
    });
}

sizeButtons.forEach((btn) => { btn.addEventListener("click", function() {
    deactive(sizeButtons);
    deactive(colorButtons);
    btn.classList.add("active");
    container.innerHTML="";
    for (let i=1; i<=(btn.value*btn.value); i+=1) {
        let item = document.createElement("div");
        item.classList.add("item");
        container.appendChild(item);
    };
    container.style.gridTemplateColumns = `repeat(${btn.value}, auto) `;    
    container.style.gridTemplateRows = `repeat(${btn.value}, auto) `
})})

const colorButtons = document.querySelectorAll(".color")
const warmColors = ["#ffb8b8", "#ffc0ab", "#ffcd9a", "#ffd6ab", "#fff7a9"]
const coldColors = ["#4B77B5", "#799FCC", "#AFC6D0", "#153576", "#153576"]
colorButtons.forEach((button) => {button.addEventListener("click", function(){
    const items = document.querySelectorAll(".item");
    deactive(colorButtons);
    button.classList.add("active");

    //Warm Color
    if (button.classList.contains("warm")) {
        items.forEach((item) => {item.addEventListener("mouseover", function() {
            item.style.backgroundColor = warmColors.randomchoice()

        } ) })
    }
    //Cold Color

    if (button.classList.contains("cold")) {
        items.forEach((item) => {item.addEventListener("mouseover", function() {
            item.style.backgroundColor = coldColors.randomchoice()

        } ) })
    }
    //White Color

    if (button.classList.contains("white")) {
        items.forEach((item) => {item.addEventListener("mouseover", function() {
            item.style.backgroundColor = "white"

        } ) })
    }
    //Black Color

    if (button.classList.contains("black")) {
        items.forEach((item) => {item.addEventListener("mouseover", function() {
            item.style.backgroundColor = "black"

        } ) })
    }
})
}
)