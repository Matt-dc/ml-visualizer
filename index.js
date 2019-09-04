const out = document.getElementById('out')

var canvas = document.getElementById("canvas");
var canvasLeft = canvas.offsetLeft;
var canvasTop = canvas.offsetTop;
var ctx = canvas.getContext("2d");
var dataPoints = []
var residuals = []
var error;

canvas.addEventListener('click', function(event) {
    var x = event.pageX - canvasLeft;
    var y = event.pageY - canvasTop;

    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, 5, 5)

    dataPoints.push({
        xPos: x,
        yPos: y,
    })
    return out.innerHTML = dataPoints.map(el => el.xPos+' - '+el.yPos)
})


function drawLine() {

    ctx.beginPath();
    ctx.moveTo(900, 0);
    ctx.lineTo(0, 400);
    ctx.stroke()
}


function generateData() {

    for (let n = 0; n < 20; n++) {
        var x = Math.floor(Math.random() * 900) 
        var y = Math.floor(Math.random() * 400)

        ctx.fillStyle = '#00'+x;
        ctx.fillRect(x, y, 5, 5)

        dataPoints.push({
            xPos: x,
            yPos: y
        })   
    }
    // return out.innerHTML = dataPoints.map(el => el.xPos + ' - ' + el.yPos)
}


function getResiduals() {

    dataPoints.forEach(point => {

        var m = -1 * 4/9
        var intersect = (m * point.xPos) + 400

        ctx.beginPath();
        // ctx.setLineDash([5, 10]);
        ctx.moveTo(point.xPos , point.yPos);
        ctx.lineTo(point.xPos, intersect);
        ctx.stroke()

        residuals.push(intersect - point.yPos)
        
    })
    totalResiduals = residuals.reduce((a, b) => a + b*b, 0) 
    var sqrdError = Math.sqrt(totalResiduals)

    return out.innerHTML = sqrdError.toFixed(2)


}

// var xStart = dataPoints[0].xPos
// var yStart = dataPoints[0].yPos
// var xEnd = dataPoints[1].xPos
// var yEnd = dataPoints[1].yPos










