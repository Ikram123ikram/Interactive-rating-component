let first_page = document.querySelector('.first_page');
let submit = document.querySelector('.submit');
let second_page = document.querySelector('.second_page')
//Submit action
submit.addEventListener('click', () => {
    first_page.style.display = 'none';
    second_page.style.display= 'flex';
});

//change background of rating numbers on blick 
let rated_nbrs=document.querySelectorAll('.rate');
for (let i = 0; i < rated_nbrs.length; i++) {
    rated_nbrs[i].addEventListener('click', () => {
        rated_nbrs[i].classList.add('active');
        //rated_nbrs[i].style.backgroundColor ='rgb(240, 108, 31)';

    });
}

//rating 
const stars = document.querySelectorAll('.rate');
const ratingValue = document.getElementById('rating-value');

stars.forEach((rate) => {
  rate.addEventListener('click', () => {
    const rating = parseInt(rate.getAttribute('data-rating'));
    ratingValue.textContent = `${rating} `;
    
    
    stars.forEach((s) => s.style.backgroundColor = 'rgba(255, 255, 255, 0.11)');
    
    
    rate.style.backgroundColor='rgb(240, 108, 31)';

    submit.disabled = false;
  });
  
  
});