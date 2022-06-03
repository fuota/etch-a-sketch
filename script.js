const sizeButtons = document.querySelectorAll(".size")
const items = document.querySelectorAll(".item")
const container = document.querySelector(".container")


Array.prototype.randomchoice = function(){
    return this[Math.floor(Math.random()*this.length)];
  }

