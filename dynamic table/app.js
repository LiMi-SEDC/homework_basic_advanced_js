function createTable() {
    let table = document.getElementById('table');
    let row = document.getElementById('rows').value;
    let col = document.getElementById('cols').value;

    console.log(row + ' ' + col);


    for (let rowTable = 0; rowTable < row; rowTable++){
        let tr = document.createElement('tr');

        for (let colTable = 0; colTable < col; colTable++){
            let td = document.createElement('td');
            let text = document.createTextNode(`Table` + colTable);


            td.appendChild(text);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

document.getElementById('btnTable').addEventListener(`click`, createTable);