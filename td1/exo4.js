//let nom = prompt('Saisir un nom :');
//document.getElementById('salut').innerHTML += nom;

function changerCouleur() {
    if (document.getElementById('texte').className === 'bleu') {
        document.getElementById('texte').className = 'rouge'
    } else {
        document.getElementById('texte').className = 'bleu'
    }
}

function cacher() {
    document.getElementById('cacher').style.display = 'none';
    document.getElementById('btn1').style.display = 'none';
    document.getElementById('btn2').style.display = 'block';
}

function afficher() {
    document.getElementById('cacher').style.display = 'block';
    document.getElementById('btn1').style.display = 'block';
    document.getElementById('btn2').style.display = 'none';
}
