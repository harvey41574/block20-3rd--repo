// TODO: this file! :)
//create arrays to hold our values
const state={
    bankArray: [],
    odds:[],
    evens:[],
};

const formRef= document.querySelector('#form');
const sortBtn1Ref= document.querySelector('#sortOne');
const sortAllBtnRef= document.querySelector('#sortAll');


sortBtn1Ref.addEventListener('click',()=>{
    const num= state.bankArray.shift();
    if(num % 2=== 0){
        state.evens.push(num);
    }else{
        state.odds.push(num);
    }
    render() 
});

sortAllBtnRef.addEventListener('click',() =>{
    state.bankArray.forEach((number)=>{
    if(number % 2=== 0){
        state.evens.push(number);
    }else{
        state.odds.push(number);
    }
    });
    state.bankArray.splice(0,state.bankArray.length);
    render();
});


//event listener on form
formRef.addEventListener("submit",(event)=>{
    event.preventDefault();   

const inputRef= document.querySelector('#number');

if(isNaN(inputRef.value)||!inputRef.value){
    inputRef.value= '';
    return;
    
}

let userInput= parseInt(inputRef.value);
  state.bankArray.push(userInput);
  inputRef.value= ' ';
  render();
}); 

function render(){
    const outputRef= document.querySelector('#numberBank');
    const evensRef= document.querySelector('#evens');
    const oddsRef= document.querySelector("#odds");
    const evenElemArray= Array.from(evensRef.children);
    const oddElemArray= Array.from(oddsRef.children);
    const outputBankArray= joinArray(state.bankArray);
    outputRef.innerText= outputBankArray;
    const outputEvensArray= joinArray(state.evens);
    evenElemArray[1].innerText= outputEvensArray;
    const outputOddsArray= joinArray(state.odds);
    oddElemArray[1].innerText= outputOddsArray;
}

function joinArray(array){
    return array.join(',');
}
    
  


