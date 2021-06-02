const colors = ["green", "brown", "pink","yellow", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color")
btn.addEventListener("click",()=>{
    // get random number between 0 and length of colors array
    const random = getRandom();
    document.body.style.backgroundColor= colors[random];
    color.textContent = colors[random]
})

//random nuber generator
function getRandom(){
    return Math.floor(Math.random() * (colors.length));
}