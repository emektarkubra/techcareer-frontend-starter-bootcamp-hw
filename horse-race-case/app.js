let count1 = 0;
let count2 = 0;
let count3 = 0;

let random1 = Math.random() * 200
let random2 = Math.random() * 200
let random3 = Math.random() * 200

const container = document.getElementsByClassName("container")[0]
let winner = null

document.getElementById("start-btn").addEventListener("click", () => {
    const intervalID = setInterval(() => {
        count1 += random1;
        count2 += random2;
        count3 += random3;
        // horse1
        const horse1 = document.getElementById("horse-1")
        horse1.style.marginLeft = count1 + "px"
        const marginLeft1 = container.offsetWidth - (horse1.offsetLeft +  horse1.offsetWidth)

        // horse2
        const horse2 = document.getElementById("horse-2")
        horse2.style.marginLeft = count2 + "px"
        const marginLeft2 = container.offsetWidth - (horse2.offsetLeft + horse2.offsetWidth)
        
        // horse3
        const horse3 = document.getElementById("horse-3")
        horse3.style.marginLeft = count3 + "px"
        const marginLeft3 = container.offsetWidth - (horse3.offsetLeft + horse3.offsetWidth)
        
        if (marginLeft1 < 0 && winner === null) {
            winner = "horse1";
            console.log("Horse 1 kazandı!");
            clearInterval(intervalID)
        } else if (marginLeft2 < 0 && winner === null) {
            winner = "horse2";
            console.log("Horse 2 kazandı!");
            clearInterval(intervalID)
        } else if (marginLeft3 < 0 && winner === null) {
            winner = "horse3";
            console.log("Horse 3 kazandı!");
            clearInterval(intervalID)
        }
    }, 500)


});






