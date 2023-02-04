const field = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

// малюємо гру
//Рахунок гри
document.querySelector('.account').innerHTML = `<div class="accountX"></div>` + `<div class="accountO">O: 0</div>`;
document.querySelector('.accountX').innerHTML = 'X: 0';
document.querySelector('.accountO').innerHTML = 'O: 0';

//Поле гри
let out = '';
for (let i = 0; i < field.length; i++) {    //перераховує ряди (Х)
    let row = field[i];
    for (let k = 0; k < row.length; k++) {    //перераховує стовпці (Y)
        out += `<div class="block" data-x="${i}" data-y="${k}"></div>`;
    }
}
document.querySelector('.game').innerHTML = out;    //в div game додає всі блоки, які є в константі field

const game = document.querySelector('.game');
let i = 0;

// нажимаємо на якись блок
game.onclick = event => {
    // console.log(event);
    if (event.target.className == 'block' && event.target.innerHTML == '') {    //друга провірка, якщо там вже є Х чи О воно неробить

        if (i%2 == 0) {
            event.target.innerHTML = 'X';
        }

        else {
            event.target.innerHTML = 'O';
        }
        i++;
        Win();
    }

    else return;
}

// 0 1 2     індекси блоків
// 3 4 5
// 6 7 8

let winx = 0;    //очки
let wino = 0;

function Win () {
    const allBlocks = document.getElementsByClassName('block');

    //Хрестики
    function winX () {
        winx++;
        for (i = 0; i < allBlocks.length; i++) {    //очищає поля
            allBlocks[i].innerHTML = '';
        }

        document.querySelector('.accountX').innerHTML = `X: ${winx}`
        i=0;    //щоб наступний раунд почався з Х
        alert ('Виграли X');
    }
    //Горизонталь
    if (allBlocks[0].innerHTML == 'X' && allBlocks[1].innerHTML == 'X' && allBlocks[2].innerHTML == 'X') winX();
    if (allBlocks[3].innerHTML == 'X' && allBlocks[4].innerHTML == 'X' && allBlocks[5].innerHTML == 'X') winX();
    if (allBlocks[6].innerHTML == 'X' && allBlocks[7].innerHTML == 'X' && allBlocks[8].innerHTML == 'X') winX();
    //Вертикаль
    if (allBlocks[0].innerHTML == 'X' && allBlocks[3].innerHTML == 'X' && allBlocks[6].innerHTML == 'X') winX();
    if (allBlocks[1].innerHTML == 'X' && allBlocks[4].innerHTML == 'X' && allBlocks[7].innerHTML == 'X') winX();
    if (allBlocks[2].innerHTML == 'X' && allBlocks[5].innerHTML == 'X' && allBlocks[8].innerHTML == 'X') winX();
    //Діагональ
    if (allBlocks[0].innerHTML == 'X' && allBlocks[4].innerHTML == 'X' && allBlocks[8].innerHTML == 'X') winX();
    if (allBlocks[2].innerHTML == 'X' && allBlocks[4].innerHTML == 'X' && allBlocks[6].innerHTML == 'X') winX();
    //Нолики
    function winO () {
        wino++;
        for (i = 0; i < allBlocks.length; i++) {    //очищає поля
            allBlocks[i].innerHTML = '';
        }
        document.querySelector('.accountO').innerHTML = `O: ${wino}`
        i=0;    //щоб наступний раунд почався з Х
        alert ('Виграли O');
    }                                                                 
    //Горизонталь
    if (allBlocks[0].innerHTML == 'O' && allBlocks[1].innerHTML == 'O' && allBlocks[2].innerHTML == 'O') winO();
    if (allBlocks[3].innerHTML == 'O' && allBlocks[4].innerHTML == 'O' && allBlocks[5].innerHTML == 'O') winO();
    if (allBlocks[6].innerHTML == 'O' && allBlocks[7].innerHTML == 'O' && allBlocks[8].innerHTML == 'O') winO();
    //Вертикаль
    if (allBlocks[0].innerHTML == 'O' && allBlocks[3].innerHTML == 'O' && allBlocks[6].innerHTML == 'O') winO();
    if (allBlocks[1].innerHTML == 'O' && allBlocks[4].innerHTML == 'O' && allBlocks[7].innerHTML == 'O') winO();
    if (allBlocks[2].innerHTML == 'O' && allBlocks[5].innerHTML == 'O' && allBlocks[8].innerHTML == 'O') winO();
    //Діагональ                      
    if (allBlocks[0].innerHTML == 'O' && allBlocks[4].innerHTML == 'O' && allBlocks[8].innerHTML == 'O') winO();
    if (allBlocks[2].innerHTML == 'O' && allBlocks[4].innerHTML == 'O' && allBlocks[6].innerHTML == 'O') winO();

    //нічія
    if (i == 9) {
        winx++;
        wino++;
        for (i = 0; i < allBlocks.length; i++) {    //очищає поля
            allBlocks[i].innerHTML = '';
        }

        document.querySelector('.accountX').innerHTML = `X: ${winx}`
        document.querySelector('.accountO').innerHTML = `O: ${wino}`
        i=0;    //щоб наступний раунд почався з Х
        alert ('Виграла дружба!');
    }
}
