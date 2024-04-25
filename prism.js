const calcPrismVol = (baseArea, h) => {
    return baseArea * h;
}

const calcPrismSurfaceArea = (baseArea, p, h) => {
    return ((2 * baseArea) + (p * h));
}

module.exports = {
    calcPrismVol,
    calcPrismSurfaceArea
}