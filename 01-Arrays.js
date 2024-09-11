function regular(a){
    if (a % 2 === 0) {
        console.log(a + " es un número PAR");
    } else {
        console.log(a + " es un número IMPAR");
    }}



const arrow = (a) => {
    if (a % 2 === 0) {
        console.log(a + " es un número PAR");
    } else {
        console.log(a + " es un número IMPAR");
    }}

regular(7);
regular(2);
arrow(8);
arrow(5);