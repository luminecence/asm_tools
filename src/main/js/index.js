import Parseur from './formulaire/Parseur'
import {ajouterLigne, supprimerLigne} from './formulaire/GestionFormulaire'

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
  const boutonsSupprimerLigne = [...document.getElementsByClassName('supprimerLigne')];

  ajouterLigne();

  boutonsSupprimerLigne.forEach((bouton) => {
    bouton.onclick = supprimerLigne;
  });
  document.getElementById('validerFormulaire').onclick = validerFormulaire;
  document.getElementById('ajouterLigne').onclick = ajouterLigne;
}

window.onload = init