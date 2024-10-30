const myColors = [
    '#519DE9', '#7CC674', '#73C5C5', '#8481DD', '#F6D173', '#EF9234',
    '#A30000', '#D2D2D2', '#004B95', '#38812F', '#005F60', '#3C3D99',
    '#F0AB00', '#C46100', '#470000', '#FFB300', '#FF6F61', '#6F2C91',
    '#88B04B', '#F6B93B', '#B93B6C', '#B2C2D2', '#FF6F91', '#4ECDC4',
    '#FFC300', '#FF5733', '#C70039', '#900C3F', '#581845', '#FFC0CB'
];

export default ColorsChart = (n) => {
    return myColors.slice(0, n);
};