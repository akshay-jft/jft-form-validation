const form = document.getElementById('form')
form.addEventListener('click', (e)=>{
    e.preventDefault();
})
const check = document.getElementById('validateForm')
check.addEventListener('click', (e)=>{
    //Card-Number-Check
    checkNamePattern();
    checkCardPattern();
    checkCVVPattern();
    checkValidPattern();
})

const upDateElement = (condition, element, smallTag) =>{
    if(condition){
        element.style.border = '2px solid green'
        element.style.boxShadow = '2px 2px 5px rgba(0,0,0,0,5)'
        smallTag.innerHTML = "Looks Good!";
        smallTag.style.color = "green"
    }else{
        element.style.border = '1px solid red'
        smallTag.innerHTML = "Something is Wrong ! Please check the fomat";
        smallTag.style.color = "red"
    }
}

const checkNamePattern = ()=>{
    const nameLength = document.getElementById('name-input')
    const smallTag = document.getElementById('small-id')
    upDateElement(nameLength.value, nameLength, smallTag)
}

const checkCardPattern = ()=>{
    const cardInput = document.getElementById('card-input');
    const smallCard = document.getElementById('small-card');
    const pattern_card = /^\d{4}-\d{4}-\d{4}$/
    upDateElement(pattern_card.test(cardInput.value), cardInput, smallCard)
}

const checkCVVPattern = ()=>{
    const cvvInput = document.getElementById('cvv-input');
    const smallCVV = document.getElementById('small-cvv');
    const patternCvv = /^\d{3}$/
    upDateElement(patternCvv.test(cvvInput.value), cvvInput,smallCVV)
}

const checkValidPattern = ()=>{
    const valid_pattern = document.getElementById('valid-input');
    const smallValid = document.getElementById('small-valid');
    const pattern_valid = /^\d{2}-\d{2}$/
    upDateElement(pattern_valid.test(valid_pattern.value), valid_pattern, smallValid)
}

