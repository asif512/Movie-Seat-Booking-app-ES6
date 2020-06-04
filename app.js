const allSeats= document.querySelector('.allSeats');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice =+ movieSelect.value;

 
// SAVE SELECT MOVIE INDEX AND PRICE
const setMovieData = (movieIndex, moviePrice) => {
    localStorage.setItem('selectMovieIndex', movieIndex);
    localStorage.setItem('selectMoviePrice', moviePrice);
}


// UPDATE TOTAL AND COUNT
const updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll('.allSeats .row .seat.selected');  
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}


// SEAT SELECT EVENT
allSeats.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
    }
    updateSelectedCount();
    
})

// MOVIE SELECT EVENT
movieSelect.addEventListener('change', (e) => {
    ticketPrice =+ e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

// INITIAL COUNT AND TOTAL
updateSelectedCount();


