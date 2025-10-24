let text = document.getElementById('text');
let button = document.getElementById('button');
let finalDni;

text.addEventListener('input', () => {
    console.log(text.value);
    if(text.value.length <= 9) {
        finalDni = text.value;
        if(text.value.length == 9) {
            console.log('ultimo numero');
            isNumber(text.value.charAt(text.value.length - 1));
        }
    } else {
        text.value = finalDni;
    }
});

const isNumber = (number) => {
    if(isNaN(number)){
        console.log('numeroFinal');
        if(number === letraDni(number)) {
            console.log(letraDni(number));
            console.log("La letra es correcta");
        } else {
            console.log('la lletra es incorrecta');
        }
    } else {
        text.value = text.value.slice(0, -1);
    }
}

const letraDni = (dni) => {
    return "TRWAGMYFPDXBNJZSQVHLCKE".charAt(dni % 23);
}