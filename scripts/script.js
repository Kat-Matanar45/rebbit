const bloks = document.querySelectorAll('.block');
const blokNum = document.querySelectorAll('.block-number');

document.body.addEventListener('click', (e) => {

    const my_arr = Array.from(bloks);

    my_arr.forEach((blokItem, index) => {

        if (e.target.closest('.block') === blokItem) {

            if ((e.target.closest('.top')) && (index >= 5)) {
                let temp = blokNum[index].textContent;
                blokNum[index].textContent = blokNum[index - 5].textContent;
                blokNum[index - 5].textContent = temp;
            };
            if ((e.target.closest('.bottom')) && (index < my_arr.length - 5)) {
                let temp = blokNum[index].textContent;
                blokNum[index].textContent = blokNum[index + 5].textContent;
                blokNum[index + 5].textContent = temp;
            };
            if ((e.target.closest('.right')) && ((index + 1) % 5 !== 0)) {
                let temp = blokNum[index].textContent;
                blokNum[index].textContent = blokNum[index + 1].textContent;
                blokNum[index + 1].textContent = temp;
            };
            if ((e.target.closest('.left')) && (index % 5 !== 0)) {
                let temp = blokNum[index].textContent;
                blokNum[index].textContent = blokNum[index - 1].textContent;
                blokNum[index - 1].textContent = temp;
            };
        }
    })

    if (e.target.classList.contains('btn-reset')) {
        for (let i=0; i<my_arr.length; i++) {
            blokNum[i].textContent = i + 1;
        }
    }
})