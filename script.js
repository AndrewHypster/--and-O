let field = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

function draw () {
    let out = '';
    for (let i = 0; i < field.length; i++) {
        let row = field[i];
        for (let k = 0; k < row.length; k++) {
            out += `<div class="none block" data-x="${i}" data-y="${k}"></div>`;
        }
    }
    document.querySelector('.game').innerHTML = out;
    document.querySelectorAll('.block').forEach((element) => {
        element.onclick = blockClick;
    });
}
draw ();

let i = 1;
function blockClick () {
    let x = this.dataset.x;
    let y = this.dataset.y;
    if (i % 2 != 0) {
        document.querySelector(`.block[data-x="${x}"][data-y="${y}"]`).classList.remove('none');
        document.querySelector(`.block[data-x="${x}"][data-y="${y}"]`).classList.add('X');
        console.log(`x`);
    }
    else {
        document.querySelector(`.block[data-x="${x}"][data-y="${y}"]`).classList.remove('none');
        document.querySelector(`.block[data-x="${x}"][data-y="${y}"]`).classList.add('O');
    }
    i++;
}