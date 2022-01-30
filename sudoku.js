const $txtN_0_0 = $('#txtN_0_0');
const $btnResolver = $('#btnResolver');

$btnResolver.on('click',function(e){
    e.preventDefault();
    const tablerosudoku = getTable();
    const jsonTablero = JSON.stringify(tablerosudoku); // Convert tablerosudoku to JSON
    $.ajax({
        method: "POST",
        url: "solveSudoku.php",
        data: {
            tablero: jsonTablero // Array of arrays
        }
    }).done(function(response){
        for($i = 0; $i < 9; $i++){
            for($j = 0; $j < 9; $j++){
                const elementID = `#txtN_${$i}_${$j}`;
                $(elementID).val(response[$i][$j]);
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
    return isNaN(v) ? null : v;

}

function valorMatrix(r,c){
    const elementID = `#txtN_${r}_${c}`;
    return numero0Null($(elementID).val());
}


function generateSudoku(){
    $.ajax({
        method: "GET",
        url: "getSudoku.php"
    }).done(function(response){
        for($i=0; $i < 9; $i++){
            for($j=0; $j < 9; $j++){
                const elementID = `#txtN_${$i}_${$j}`;
                $(elementID).val(response[$i][$j]);
            }
        }
    })
}