const $txtN_0_0 = $('#txtN_0_0');
const $btnResolver = $('#btnResolver');

$btnResolver.on('click',function(e){
    e.preventDefault();
    const tablerosudoku = getTable();
    console.log(tablerosudoku);
    $.ajax({
        method: "POST",
        url: "backend.php",
        data: {
            tablero: tablerosudoku // Array of arrays
        }
    }).done(function(response){ // TODO: Receive the response
        if (response == 'error'){
            alert('Unsolvable Sudoku');
        }
        else{
            const tablero = JSON.parse(response);
            for (let r = 0; r < 9; r++){
                for (let c = 0; c < 9; c++){
                    const elementID = `#txtN_${r}_${c}`;
                    $(elementID).val(tablero[r][c]);
                }
            }
        }
    })
});

function getTable(){
    const tablerosudoku = [];
    for (let r = 0; r < 9; r++){
        const row = [];
        for (let c = 0; c < 9; c++){
            row.push(valorMatrix(r,c));
        }
        tablerosudoku.push(row);
    }
    return tablerosudoku;
}

function numero0Null(s){
    const v = parseInt(s);
    return isNaN(v) ? 0 : v;

}

function valorMatrix(r,c){
    const elementID = `#txtN_${r}_${c}`;
    return numero0Null($(elementID).val());
}
