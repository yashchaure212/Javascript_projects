let container = document.querySelector(".container");
let gridButton = document.getElementById("submit-grid");
let ClearGridButton = document.getElementById("clear-grid");
let gridWidth = document.getElementById("width-range");
let gridHeight = document.getElementById("height-range");
let colorBtn = document.getElementById("color-input");
let eraseBtn = document.getElementById("erase-btn");
let paintBtn = document.getElementById("paint-btn");
let widthValue = document.getElementById("width-value");
let heightValue = document.getElementById("height-value");

// these objects maps diff type of mouse and touch events.

let events = {
       mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup"
       },
       touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend"
       }
};


//stored which type of input divice being used 
let deviceType = "";

let draw = false;
let erase = false;

const isTouchDevice = () => {
    try {
     document.createEvent("TouchEvent");
     deviceType = "touch";
     return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
 };
 isTouchDevice();



gridButton.addEventListener("click", () => {
    container.innerHTML = "";
    let count = 0;
    for(let i = 0; i < gridWidth.value; i++) {
        count += 2;
        let div = document.createElement("div");
        div.classList.add("gridRow");

        for (let j = 0; j < gridHeight.value; j++) {
            count += 2;
            console.log(count);
            let col = document.createElement("div");
            col.classList.add("gridCol");
            col.setAttribute("id", `gridCol${count}`);
            
            //when touch or mouse event start.
            col.addEventListener(events[deviceType].down, () => {
                draw = true;
                if(erase) {
                    col.style.backgroundColor = "transparent";
                } else {
                    col.style.backgroundColor = colorBtn.value;
                }
            });

            //when touch or mouse event move / attached.
            col.addEventListener(events[deviceType].move, (e) => {
                let  elementId =  document.elementFromPoint(
                    !isTouchDevice() ? e.clientX : e.touches[0].clientX,
                    !isTouchDevice() ? e.clientY : e.touches[0].clientY,
                ).id;
                checker(elementId);
            });

            //when touch or mouse event detached / removed.
            col.addEventListener(events[deviceType].up, () => {
                draw = false;
            });

            div.appendChild(col);
        }
        container.appendChild(div);
    }
});



function checker (elementId) {
    let gridColumns = document.querySelectorAll(".gridCol");
    gridColumns.forEach((element) => {
        if(elementId == element.id){
            if(draw && !erase){
                element.style.backgroundColor = colorBtn.value;
            } else if (draw && erase) {
                element.style.backgroundColor = "transparent"
            };
        }
    });
}



ClearGridButton.addEventListener("click", () => {
   container.innerHTML = "";
});

eraseBtn.addEventListener("click", () => {
    erase = true;
})

paintBtn.addEventListener("click", () => {
    erase = false;
})

gridWidth.addEventListener("input", () => {
    widthValue.innerHTML = gridWidth.value < 9 ? `0${gridWidth.value}` : gridWidth.value;
})
gridHeight.addEventListener("input", () => {
    heightValue.innerHTML = gridHeight.value < 9 ? `0${gridHeight.value}` : gridHeight.value;
})

window.onload = () => {
    gridHeight.value = 0;
    gridWidth.value = 0;
}