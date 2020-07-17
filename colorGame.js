let numbersOfSquares = 6
let colores = generateRandomColors(numbersOfSquares)
let square = document.querySelectorAll(".square")
let pickedColor = pickColor(5)
let spanColorDisplay = document.querySelector("#colorDisplay")
spanColorDisplay.textContent = pickedColor
let spanMensaje = document.querySelector("#message")
let $h1 = document.querySelector ("h1")
let btnReset = document.querySelector("#reset")
let botonEasy = document.querySelector("#easy")
let botonHard = document.querySelector("#hard")
let clickedColor = []





function init (){
    principal()
    botonReset()
    dificultad()
}

init ()

function principal(){
colores = generateRandomColors(numbersOfSquares)
pickedColor = pickColor (numbersOfSquares-1)
spanColorDisplay.textContent = pickedColor

    for (let i=0; i<square.length; i++) {
        square[i].style.backgroundColor = colores[i]
        square[i].addEventListener("click",function(){
            clickedColor [i] = colores[i]
            if (clickedColor[i]!==pickedColor){
                spanMensaje.textContent= "Try Again"
                square[i].style.backgroundColor="#232323"
            }
            else{
                spanMensaje.textContent = "Correct!"
                $h1.style.backgroundColor = clickedColor[i]
                changeColors(clickedColor[i])
                btnReset.textContent = "Play Again?"
            }
        })
        
    }
}


function changeColors(color){
    for (let i=0; i<square.length;i++){
        square[i].style.backgroundColor = color
    }
}

function pickColor(num){
    numRandom1 = parseInt(Math.random()*num)
    return colores[numRandom1]
}

function randomColor (){
    numRandom2 = parseInt (Math.random()*255)
    numRandom3 = parseInt (Math.random()*256)
    numRandom4 = parseInt (Math.random()*256)
    return "rgb(" + numRandom2 + ", " + numRandom3 + ", " + numRandom4 + ")"
}

function generateRandomColors(num){
    let arrColores = []
    for (let i = 0; i<num; i++){
        arrColores[i] = randomColor()
    }
    return arrColores
}

function botonReset (){
    btnReset.addEventListener("click", principal)
    btnReset.addEventListener("click",function(){
        spanMensaje.textContent=" "
        $h1.style.backgroundColor = "steelblue"
        btnReset.textContent = "New Colors"
    })
}


function dificultad(){
    botonEasy.addEventListener("click", function(){
        botonEasy.classList.add("selected")
        botonHard.classList.remove("selected")
        numbersOfSquares = 3
        colores=generateRandomColors(numbersOfSquares)
        $h1.style.backgroundColor = "steelblue"
        spanMensaje.textContent = " "
        pickedColor = pickColor(2)
        spanColorDisplay.textContent=pickedColor

        for(let i =0;i<square.length;i++){
            if (colores[i] !== undefined){
                square[i].style.backgroundColor=colores[i]
            }else{
                square[i].style.display="none"
            }
        }

    })

    botonHard.addEventListener("click",function(){
        botonHard.classList.add("selected")
        botonEasy.classList.remove("selected")
        numbersOfSquares = 6
        colores=generateRandomColors(numbersOfSquares)
        $h1.style.backgroundColor = "steelblue"
        spanMensaje.textContent = " "
        pickedColor = pickColor(5)
        spanColorDisplay.textContent=pickedColor

        for(let i = 0; i<square.length;i++){
                square[i].style.backgroundColor=colores[i]
                square[i].style.display="block"
        }
    })
}