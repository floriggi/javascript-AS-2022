const regexNom = /^[a-zA-Z]{2,10}$/;
const regexAdresse = /^[a-zA-Z]([-'\s]?[a-zA-Z]){4,99}$/;
const regexVille = /^[a-zA-Z]([-'\s]?[a-zA-Z]){1,49}$/;
const regexCodePostal = /^[0-9]{5}$/;
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexTelephone = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;

function validerFormulaire() {
    let valide = true;

    if (!verifGenre()) {
        valide = false;
    }

    if (!verifierNom()) {
        valide = false;
    }

    if (!verifierPrenom()) {
        valide = false;
    }

    if (!verifierAdresse()) {
        valide = false;
    }

    if (!verifierCodePostal()) {
        valide = false;
    }

    if (!verifierVille()) {
        valide = false;
    }

    if (!verifierEmail()) {
        valide = false;
    }

    if (!verifierTel()) {
        valide = false;
    }

    if (!verifierMdp()) {
        valide = false;
    }

    if (!verifierMdp2()) {
        valide = false;
    }

    if (!verifAcceptation()) {
        valide = false;
    }

    return valide;
}

function verifGenre() {
    if (document.formulaire.genre.value === 'vide') {
        document.getElementById('champGenre').style.display = 'inline-block';
        return false;
    } else {
        document.getElementById('champGenre').style.display = 'none';
        return true;
    }
}

function verifierNom() {
    if (!document.formulaire.nom.value.match(regexNom)) {
        document.getElementById('champNom').style.display = 'inline-block';
        return false;
    } else {
        document.getElementById('champNom').style.display = 'none';
        return true;
    }
}

function verifierPrenom() {
    if (!document.formulaire.prenom.value.match(regexNom)) {
        document.getElementById('champPrenom').style.display = 'inline-block';
        return false;
    } else {
        document.getElementById('champPrenom').style.display = 'none';
        return true;
    }
}

function verifierAdresse() {
    if (!document.formulaire.adresse.value.match(regexAdresse)) {
        document.getElementById('champAdresse').style.display = 'inline-block';
        return false;
    } else {
        document.getElementById('champAdresse').style.display = 'none';
        return true;
    }
}

function verifierCodePostal() {
    if (!document.formulaire.codePostal.value.match(regexCodePostal)) {
        document.getElementById('champCodePostal').style.display = 'inline-block';
        return false;
    } else {
        document.getElementById('champCodePostal').style.display = 'none';
        return true;
    }
}

function verifierVille() {
    if (!document.formulaire.ville.value.match(regexVille)) {
        document.getElementById('champVille').style.display = 'inline-block';
        return false;
    } else {
        document.getElementById('champVille').style.display = 'none';
        return true;
    }
}

function verifierEmail() {
    if (!document.formulaire.email.value.match(regexEmail)) {
        document.getElementById('champEmail').style.display = 'inline-block';
        return false;
    } else {
        document.getElementById('champEmail').style.display = 'none';
        return true;
    }
}

function verifierTel() {
    if (!document.formulaire.telephone.value.match(regexTelephone)) {
        document.getElementById('champTel').style.display = 'inline-block';
        return false;
    } else {
        document.getElementById('champTel').style.display = 'none';
        return true;
    }
}

function verifierMdp() {
    let correct = true;
    let mdp = document.formulaire.mdp.value;
    document.getElementById('champMdp').style.display = 'none';

    // on teste la présence de chiffre et de lettres
    if (mdp.search(/\d/) !== -1 && mdp.search(/[a-zA-Z]/) !== -1) {
        document.getElementById('case1').src = 'img/coche.jpg';
    } else {
        correct = false;
        document.getElementById('case1').src = 'img/vide.png';
    }

    // on teste la présence de caractère spécial
    if (mdp.search(/[!#$%&?+=()@*."]/) !== -1) {
        document.getElementById('case2').src = 'img/coche.jpg';
    } else {
        correct = false;
        document.getElementById('case2').src = 'img/vide.png';
    }

    // on teste la longueur du mot de passe
    if (mdp.length >= 5 && mdp.length <= 15) {
        document.getElementById('case3').src = 'img/coche.jpg';
    } else {
        correct = false;
        document.getElementById('case3').src = 'img/vide.png';
    }

    if (!correct) {
        document.getElementById('champMdp').style.display = 'block';
    }

    return correct;
}

function verifierMdp2() {
    let correct = true;
    let monChamp = document.getElementById('champMdp2');
    monChamp.style.display = 'block';
    monChamp.innerText = '';

    if (document.formulaire.mdp2.value === '') {
        correct = false;
        monChamp.innerText += 'La confirmation est obligatoire';
    }

    if (document.formulaire.mdp.value !== document.formulaire.mdp2.value) {
        correct = false;
        monChamp.innerText += 'Les mots de passe doivent être identiques.'
    }

    return correct;
}

function verifAcceptation() {
    if (document.formulaire.accept.checked) {
        document.getElementById('champAcceptation').style.display = 'none';
        return true;
    } else {
        document.getElementById('champAcceptation').style.display = 'inline-block';
        return false;
    }
}
