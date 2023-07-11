// Code your solution in this file!

function distanceFromHqInBlocks(street) {
    if (street>42) {
        return (street-42);
    } else if (street<42) {
        return (42- street);
    }
}

function distanceFromHqInFeet(street) {
    let blockCount=distanceFromHqInBlocks(street)
    return blockCount * 264
}

function distanceTravelledInFeet(start,stop) {

    if (stop>start) {
        return (stop-start)*264
    } else if (stop<start) {
        return (start-stop) * 264
    }
}

function calculatesFarePrice(start,stop){
  let length =distanceTravelledInFeet(start, stop)

    if (length<=400) {
        return 0;
    } else if (length>400 && length<=2000 ) {
        return ((length-400)* 0.02)
    } else if (length > 2000 && length<=2500) {
        return 25;
    }else if (length> 2500) {
        return "cannot travel that far"
    }
}
