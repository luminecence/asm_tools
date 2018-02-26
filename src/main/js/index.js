import GenerateurCode from './formulaire/GenerateurCode'
import {ajouterLigne, supprimerLigne, remplirSelecteurDate} from './formulaire/GestionFormulaire';

/**
 * fonction appelé lors de la validation du formulaire
 * @param {Event} e
 */
function validerFormulaire(e) {
  new GenerateurCode().generer();
  e.preventDefault();
}

/**
 * Fonction appelée lorsque la page est chargée
 */
function init() {
  const boutonsSupprimerLigne = [...document.getElementsByClassName('supprimerLigne')];

  remplirSelecteurDate();
  ajouterLigne();

  boutonsSupprimerLigne.forEach((bouton) => {
    bouton.onclick = supprimerLigne;
  });
  document.getElementById('validerFormulaire').onclick = validerFormulaire;
  document.getElementById('ajouterLigne').onclick = ajouterLigne;
}

window.onload = init;