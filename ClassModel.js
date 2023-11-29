const showBtn = document.querySelector('.popBtn')
const showContainer =document.querySelector('.container')
const closePop = document.querySelector('.btn')
function popUpForm(){
    showContainer.classList.add('showMe')
}
showBtn.addEventListener('click', popUpForm )