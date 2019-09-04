
// PREVIOUS

function drawGrid() {
    var table = document.getElementsByTagName('table')[0];

    var tableBody = document.createElement('tbody');

    for(var i=0; i<20; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 35; j++) {
      
                var td = document.createElement('td');

                const cellText = document.createTextNode(i+'-'+j)
                td.setAttribute('id', i+'-'+j);
                td.setAttribute('style', 'font-size: 0.7em');
                td.appendChild(cellText)
                tr.appendChild(td)
            
        }
        tableBody.appendChild(tr)
        table.appendChild(tableBody)
    }
}
drawGrid()



let grid = document.getElementById("grid-container");
let rows = grid.getElementsByTagName("tr");
var cells;

for ( let i = 0; i < rows.length; i++) {
     cells = rows[i].getElementsByTagName("td");

        for (let j = 0; j < cells.length; j++) {

            cells[j].onclick = function(e){
                changeColor(e)
            }

            cells[j].addEventListener('mouseover', function(e) {
                if(e.buttons == 1 || e.buttons == 3) {
                    e.target.style.backgroundColor = '#000'
                }
            })  
    }
}




function changeColor(e) {

    if (e.target.style.backgroundColor === "") {
            e.target.style.backgroundColor = "#000"
    } else {
            e.target.style.backgroundColor = ""
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

    resetGrid() 

    let arr = [];
    for (let n = 0; n < 20; n++) {
        element = Math.floor(Math.random() * 20) + '-' + Math.floor(Math.random() * 35)
        arr.push(element)   
    }

    out.innerHTML = arr.map(x => (x+'<br/>'))

    for ( let i = 0; i < rows.length; i++) {
           cells = rows[i].getElementsByTagName('td')
           for (var j = 0; j < cells.length; j++) {
               if(arr.includes(cells[j].id)) {
                    cells[j].style.backgroundColor = '#000'
               }
            } 
       }

}


function drawLine() {

    var x = 20
    var y = 100


}


function getVerticalDistance() {


}

