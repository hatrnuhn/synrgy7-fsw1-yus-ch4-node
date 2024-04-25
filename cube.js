class Cube {
    constructor(s) {
        this.s = s;
    }

    calcVol = () => this.s ** 3
    calcSurfaceArea = () => 6 * (this.s ** 2);
}

module.exports = {
    Cube
}