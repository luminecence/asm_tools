import GenerateurCode from './formulaire/GenerateurCode'
import {ajouterLigne, supprimerLigne} from './formulaire/GestionFormulaire'
import * as HtmlUtils from './utils/HtmlUtils'
import moment from 'moment';

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

  ajouterLigne();

  boutonsSupprimerLigne.forEach((bouton) => {
    bouton.onclick = supprimerLigne;
  });
  document.getElementById('validerFormulaire').onclick = validerFormulaire;
  document.getElementById('ajouterLigne').onclick = ajouterLigne;

  moment.locale('fr');

  const selecteurSemaine = document.getElementById('dateMatch'),
    maintenant = moment(),
    dateDebut = maintenant.startOf('week').format('DD MMMM'),
    dateFin = maintenant.endOf('week').format('DD MMMM');

  selecteurSemaine.appendChild(HtmlUtils.creerOption({'valeur':1, 'contenu': `Du ${dateDebut} au ${dateFin}`}))
}

window.onload = init;