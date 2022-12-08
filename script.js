let selection = document.getElementsByClassName('rating--number');
let button = document.querySelector('.submit');
let contRate = document.querySelector('.rate');
let contResult = document.querySelector('.result');
let note = document.querySelector('.selection')
let number = '';

const selected = (e) => {
    number = e.target.getAttribute('data-value');
    console.log(number);
    e.target.classList.add('active');
    for (let i = 0; i < selection.length; i++) {
        if (selection[i].getAttribute("data-value") !== number) {
            selection[i].classList.remove("active");
        }
    }
    note.innerHTML = ` <div class="selection--text"> You selected ${number} out of 5</div> `;
}

for (let i = 0; i < selection.length; i++) {
    selection[i].addEventListener("click", selected);
  }

button.addEventListener('click', () => {
    contRate.style.display = 'none';
    contResult.style.display = 'block'; 
});