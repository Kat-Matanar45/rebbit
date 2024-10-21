const bloks = document.querySelectorAll('.block');
const blokNum = document.querySelectorAll('.block-number');

document.body.addEventListener('click', (e) => {

    const myArr = Array.from(bloks);

    myArr.forEach((blokItem, index) => {

        if (e.target.closest('.block') === blokItem) {

            if ((e.target.closest('.top')) && (index >= 5)) {
                let temp = blokNum[index].textContent;
                blokNum[index].textContent = blokNum[index - 5].textContent;
                blokNum[index - 5].textContent = temp;
            };
            if ((e.target.closest('.bottom')) && (index < myArr.length - 5)) {
                let temp = blokNum[index].textContent;
                blokNum[index].textContent = blokNum[index + 5].textContent;
                blokNum[index + 5].textContent = temp;
            };
            if (e.target.closest('.right'))  {
                let temp = blokNum[index].textContent;
                blokNum[index].textContent = blokNum[index + 1].textContent;
                blokNum[index + 1].textContent = temp;
            }; 
            if (e.target.closest('.left')) {
                let temp = blokNum[index].textContent;
                blokNum[index].textContent = blokNum[index - 1].textContent;
                blokNum[index - 1].textContent = temp;
            };
        }
    })

    if (e.target.classList.contains('btn-reset')) {
        for (let i=0; i<myArr.length; i++) {
            blokNum[i].textContent = i + 1;
        }
    }
})