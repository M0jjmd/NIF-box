let text = document.getElementById('text');
let p = document.getElementById('errorMsg');
let finalDni;

text.addEventListener('input', () => {
    text.value = text.value.toUpperCase();

    if (text.value.length <= 9) {
        finalDni = text.value;

        if (text.value.length <= 8) {
            if (isNaN(text.value)) {
                p.innerText = "Els primers 8 caràcters han de ser numèrics";
                p.style.color = "red";
                text.value = text.value.slice(0, -1);
            }
        }

        if (text.value.length == 9) {
            validarDni(text.value.slice(0, -1));
        }

    } else {
        text.value = finalDni;
    }
});

const validarDni = (number) => {
    if (isNaN(text.value.charAt(text.value.length - 1))) {

        if (text.value.charAt(text.value.length - 1) == letraDni(number)) {
            p.innerText = "DNI correcte";
            p.style.color = "green";

        } else {
            p.innerText = "La lletra és incorrecta";
            p.style.color = "red";
            text.value = text.value.slice(0, -1);

        }

    } else {
        p.innerText = "L'últim caràcter ha de ser una lletra";
        p.style.color = "red";
        text.value = text.value.slice(0, -1);
    }
}

const letraDni = (dni) => {
    return "TRWAGMYFPDXBNJZSQVHLCKE".charAt(dni % 23);
}
