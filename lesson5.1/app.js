// const counter = document.querySelector("#counter");
// const decreaseButton = document.querySelector("#decrease");
// const resetButton = document.querySelector("#reset");
// const increaseButton = document.querySelector("#increase");
//
// let counterValue = 0;
//
// updateCounter();
//
// function updateCounter() {
//     counter.innerText = counterValue;
//     if (counterValue > 0) {
//         counter.style.color = "lightgreen";
//     } else if (counterValue < 0) {
//         counter.style.color = "red";
//     } else {
//         counter.style.color = "cyan";
//     }
// }
//
// decreaseButton.onclick = () => {
//     counterValue--;
//     updateCounter();
// };
//
// resetButton.onclick = () => {
//     counterValue = 0;
//     updateCounter();
// };
//
// increaseButton.onclick = () => {
//     counterValue++;
//     updateCounter();
// };
// dom - document object model
// search
     let $counter = document.getElementById('counter');
    // $counter.style.color = 'red';
    // $counter.style.border = '15px solid green';
    // $counter.style.padding = '15px 45px';
    // $counter.style.marginBottom = '15px';




// let textStyles ={
//     color: 'red',
//     padding: '15px 45px',
//     border: '15px solid green',
//     margin: '20px',
// }



// Object.assign($counter.style,textStyles);
    let $decreaseButton = document.querySelector('#decrease'); //query-селектор
    // $resetButton =document.querySelector('.buttons button:nth-child(2)');
    let $resetButton =document.querySelector('.buttons #reset');
    $resetButton.textContent = 'Reset';
    let $increaseButton = document.querySelector('.buttons button:nth-child(3)');
    // $increaseButton.remove()


    function increaseCounter(){
        // console.log('increase');
        let counter = Number($counter.innerText);
        counter++;
        $counter.innerText = counter;
        setCounterColor();
    }
    $increaseButton.addEventListener('click', increaseCounter);
    // function decreaseCounter(){
    //     let counter = Number($counter.innerText);
    //     counter--;
    //     $counter.innerText = counter;
    // }
    // $decreaseButton.addEventListener('click', decreaseCounter);


// //function expression
let resetCounter = function (){
 $counter.innerText = 0;
    setCounterColor();  
}
$resetButton.addEventListener('click', resetCounter); //add (20;47)

$decreaseButton.onclick = function (){
    let counter = Number($counter.innerText);
    counter--;
    $counter.innerText = counter;
    setCounterColor();
}

function setCounterColor (){
    let counter =  $counter.textContent;

    if (counter > 0) {
        $counter.style.color = 'green';
    }else if  (counter < 0) {
        $counter.style.color = 'red';
    }else {
        $counter.style.color = 'cyan'
    }
}

//  DOM manipulations- операции с домом
//search
//modify (inner content, styles,classes)
//remove
//create
//KISS -keep it simple and stupid
