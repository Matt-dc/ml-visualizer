function drawGrid() {

    // var body = document.getElementsByTagName('body')[0];
    var table = document.getElementsByTagName('table')[0];

    var tableBody = document.createElement('tbody');

    for(var i=0; i<10; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 35; j++) {
            if(i == 9 || j == 34) {
                break
            } else {
                var td = document.createElement('td');

                // i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
                tr.appendChild(td)
            }
        }
        tableBody.appendChild(tr)
        table.appendChild(tableBody)
    }
}
drawGrid()


let grid = document.getElementById("grid-container");
let rows = grid.getElementsByTagName("tr");
var cells;

for ( var i = 0; i < rows.length; i++) {
     cells = rows[i].getElementsByTagName("td");

        for (var j = 0; j < cells.length; j++) {
            cells[j].onclick = changeColor
        } 
        
    }


function changeColor(e) {

    if (e.target.style.backgroundColor === "#000") {
            e.target.style.backgroundColor = ""
    } else {
            e.target.style.backgroundColor = "#000"
    }     
 }


 function resetGrid() {
    for ( var i = 0; i < rows.length; i++) {
        cells = rows[i].getElementsByTagName("td");
   
           for (var j = 0; j < cells.length; j++) {
               cells[j].style.backgroundColor = "";
           } 
           
       }
}



function generateArray() {

        for(let data = [], i = 0; i < 50; i++) {
            alert("hi");
        }
    }

