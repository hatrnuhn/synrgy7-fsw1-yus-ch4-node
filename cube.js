const calcCubeVol = s => {
    return s ** 3;
}

const calcCubeSurfaceArea = s => {
    return 6 * (s ** 2);
}

module.exports = {
    calcCubeVol,
    calcCubeSurfaceArea
}