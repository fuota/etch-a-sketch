const sizeButtons = document.querySelectorAll(".size")
const items = document.querySelectorAll(".item")
const container = document.querySelector(".container")


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