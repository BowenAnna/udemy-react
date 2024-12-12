const pi = 3.1415962;

function doublePi(){
    return pi*2;
}
function tripplePi(){
    return pi*3;
}

export default pi; //default export only 1 per file
export {doublePi, tripplePi}; //not default exports