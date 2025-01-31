document.addEventListener('DOMContentLoaded', () => {
    const allButtons = document.querySelectorAll('.searchBtn');
    const searchBar = document.querySelector('.searchBar');
    const searchInput = document.getElementById('searchInput');
    const searchClose = document.getElementById('searchClose');
    
    allButtons.forEach(button => {
        button.addEventListener('click', () => {
            searchBar.style.visibility = 'visible';
            searchBar.classList.add('open');
            button.setAttribute('area-expanded', 'true');
            searchInput.focus();    
        });

        searchClose.addEventListener('click', () => {
            searchBar.style.visibility = 'hidden';
            searchBar.classList.remove('open');
            button.setAttribute('area-expanded', 'false');
        });
    })

});