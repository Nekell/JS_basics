function getInnerText(i, j) {
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let res = ''
    if (i === 1 && j > 1) {
        res = j - 1;
    } else if (j === 1 && i > 1) {
        res = letters[i-2];
    }
    if (i === 3 || i === 8) {
        res = 'П';
    }
    if (i === 2 || i === 9) {
        if (j === 2 || j === 9) {
            res = 'Л';
        } else if (j === 3 || j === 8) {
            res = 'К';
        } else if (j === 4 || j === 7) {
            res = 'С';
        } else if ((j === 5 && i === 9) || (j === 6 && i === 2)) {
            res = 'Ф';
        } else {
            res = 'КР';
        }
    }
    console.log(res);
    return res;
}

function createChessTable() {
    let root = document.getElementById('root');

    let newTable = document.createElement('table');
    for (let i = 1; i < 10; i++) {
        let newTr = document.createElement('tr');
        for (let j = 1; j < 10; j++) {
            let newTd = document.createElement('td');
            newTd.style.width = '50px';
            newTd.style.height = '50px';
            newTd.innerText = getInnerText(i, j);

            if (i !== 1 && j !== 1) {
                newTd.style.border = '1px solid black';
            }
            if ((i + j) % 2 === 0 && i !== 1 && j !== 1) {
                newTd.style.backgroundColor = 'grey';
            } else {
                newTd.style.backgroundColor = 'yellow';
            }
            newTr.append(newTd);
        }
        newTable.append(newTr);
    }
    newTable.style.border = '1px solid black';
    newTable.style.borderSpacing = '0px';
    root.append(newTable);
}
createChessTable();