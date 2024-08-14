let music = new Audio("./Assets/music.mp3")
let audioTurn = new Audio("./Assets/ting.mp3")
let gameover = new Audio("./Assets/gameover.mp3")
let turn = " X"
let isGameOver = false



const chanageTurn = ()=>{
    return turn ===" X"?" 0": " X"

}

const checkWin = ()=>{
    let boxText = document.getElementsByClassName("boxText")
    let win = [
        [0,1,2, 5,5,0],
        [3,4,5, 5,15,0],
        [6,7,8, 5,25,0],
        [0,3,6, -5,15,90 ],
        [1,4,7, 5,15,90],
        [2,5,8, 15,15,90],
        [0,4,8, 5,15,45],
        [2,4,6, 5,15,135],
    ]
    win.forEach((e)=>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText)  && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxText[e[0]].innerText + " Won"
            isGameOver = true
            document.querySelector(".imageBox").getElementsByTagName("img")[0].style.width = "200px"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw"
        }

    })
}



// music.play()
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector(".boxText")
    element.addEventListener('click', (e)=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn
            turn = chanageTurn()
            audioTurn.play()
            checkWin()
            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn
            }
        }
    })
})


reset.addEventListener("click", ()=>{
    let boxText = document.querySelectorAll(".boxText")
    Array.from(boxText).forEach((element)=>{
        element.innerText = ""
    })
    turn = " X"
    isGameOver = false
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn
    document.querySelector(".imageBox").getElementsByTagName("img")[0].style.width = "0px"
    document.querySelector(".line").style.width = "0vw"
})