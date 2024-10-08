// Line Analyzer

// Add Event Listener
document.getElementById('analyze').addEventListener('click', analyzeLine);

// Event Function
function analyzeLine() {
    // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
    let pt1x = Number(document.getElementById('pt1x').value);
    let pt1y = Number(document.getElementById('pt1y').value);
    let pt2x = Number(document.getElementById('pt2x').value);
    let pt2y = Number(document.getElementById('pt2y').value);

    // Call Analyze Functions and Display results

    document.getElementById('length').innerHTML = getLength(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('slope').innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('description').innerHTML = getDescription(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('location-1').innerHTML = getPointLocation(pt1x, pt1y);
    document.getElementById('location-2').innerHTML = getPointLocation(pt2x, pt2y);
    document.getElementById('slope-point').innerHTML = getPointSlope(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('equation').innerHTML = getEquation(pt1x, pt1y, pt2x, pt2y);
    
}

// Line Analyzer Functions (Write your solutions here. Uncomment above code when ready to test)

function getLength(x1, y1, x2, y2) {
    let length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    return length.toFixed(2)
}

function getSlope(x1, y1, x2, y2) {
    let slope = (y2 - y1) / (x2 - x1)
    return Math.round(slope)
}

function getDescription(x1, y1, x2, y2) {
    let slope = (y2 - y1) / (x2 - x1)
    if (slope > 0) {
        return "increasing"
    } else if (slope < 0) {
        return "decreasing"
    } else if (slope == 0) {
        return "horizontal"
    } else {
        return "vertical"
    }
}

function getPointLocation(x1, y1) {
    if (x1 == 0 && y1 == 0) {
        return "origin"
    }  else if (x1 > 0 && y1 > 0) {
        return "quadrant 1"
    } else if (x1 < 0 && y1 > 0) {
        return "quadrant 2"
    } else if (x1 < 0 && y1 < 0) {
        return "quadrant 3"
    } else if (x1 > 0 && y1 < 0) {
        return "quadrant 4"
    } else if (x1 == 0 && y1 > 0 || y1 < 0) {
        return "x-axis"
    } else if (y1 == 0 && x1 > 0 || x1 < 0) {
        return "y-axis"
    }
}

function getPointLocation(x2, y2) {
    if (x2 == 0 && y2 == 0) {
        return "origin"
    }  else if (x2 > 0 && y2 > 0) {
        return "quadrant 1"
    } else if (x2 < 0 && y2 > 0) {
        return "quadrant 2"
    } else if (x2 < 0 && y2 < 0) {
        return "quadrant 3"
    } else if (x2 > 0 && y2 < 0) {
        return "quadrant 4"
    } else if (x2 == 0 && y2 > 0 || y2 < 0) {
        return "x-axis"
    } else if (y2 == 0 && x2 > 0 || x2 < 0) {
        return "y-axis"
    }
}

function getPointSlope(x1, y1, x2, y2) {
    let slope = Math.round((y2 - y1) / (x2 - x1))
    if (slope == 0) {
        return "y = number"
    } else if (slope > 0 || slope < 0) {
        return `y - ${y1} = ${slope}(x - ${x1})`
    } else {
        return "x = number"
    }
}

function getEquation(x1, y1, x2, y2) {
    let slope = Math.round((y2 - y1) / (x2 - x1))
    let intercept = Math.round(y1 - (slope * x1))
    return `y = ${slope}x + ${intercept}`
}





