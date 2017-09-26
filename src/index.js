import Parseur from './parseur'

/**
 * fonction appelé lors de la validation du formulaire
 * @param {Event} e 
 */
function validerFormulaire(e) {
  const codeGenere = new Parseur().generer()
  e.preventDefault()
}

/**
 * Fonction appelée lorsque la page est chargée
 */
function init () {
  console.log('fin chargement page')
  document.getElementById('validerFormulaire').onclick = validerFormulaire;
}

window.onload = init