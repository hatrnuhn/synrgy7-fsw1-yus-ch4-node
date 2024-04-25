const calcBlockVol = (l, w, h) => {
 return l * w * h;
}

const calcBlockSurfaceArea = (l, w, h) => {
    return ((2 * (l * w)) + (2 * (l * h)) + (2 * (w * h)));
}

module.exports = {
    calcBlockVol,
    calcBlockSurfaceArea
}