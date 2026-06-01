const spreads = document.querySelectorAll('.spread');
const counter = document.getElementById('pageCounter');

let currentPage = 0;

function updateBook() {
    console.log("Обновление страницы:", currentPage);

    spreads.forEach((spread) => {
        spread.classList.remove('active');
    });

    if (!spreads[currentPage]) return;

    spreads[currentPage].classList.add('active');

    counter.textContent = (currentPage + 1) + " / " + spreads.length;
}

document.getElementById('next').addEventListener('click', () => {
    if (currentPage < spreads.length - 1) {
        currentPage++;
        updateBook();
    }
});

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updateBook();
    }
});

updateBook();