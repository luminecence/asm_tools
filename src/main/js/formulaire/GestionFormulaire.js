import {NOM_EQUIPE1, NOM_EQUIPE2, NOM_SCORE1, NOM_SCORE2} from './Parseur';
import * as HtmlUtils from './HtmlUtils';
import {equipes as EQUIPES} from './Equipes';

const CLASSE_LIGNE = 'ligne',
  CLASSE_FORMULAIRE = 'formulaire',
  CLASSE_SUPPRIMER_LIGNE = 'supprimerLigne';

/**
 * Ajoute une ligne dans le formulaire
 * @param {Event} e événement
 */
export function ajouterLigne(e) {
  const ligne = HtmlUtils.creerDiv({'classe': CLASSE_LIGNE}),
    equipe1 = HtmlUtils.creeSelect({'name': NOM_EQUIPE1, 'options': EQUIPES}),
    equipe2 = HtmlUtils.creeInput({'name': NOM_EQUIPE2}),
    score1 = HtmlUtils.creeInput({'name': NOM_SCORE1, type: 'number', required: true}),
    score2 = HtmlUtils.creeInput({'name': NOM_SCORE2, type: 'number', required: true}),
    boutonSupprimerLigne = HtmlUtils.creerBouton({'classe': CLASSE_SUPPRIMER_LIGNE, 'onclick': supprimerLigne, 'text': 'Supprimer une ligne'}),
    formulaire = document.querySelector(`.${CLASSE_FORMULAIRE}`);

    ligne.appendChild(equipe1);
    ligne.appendChild(score1);
    ligne.appendChild(score2);
    ligne.appendChild(equipe2);
    ligne.appendChild(boutonSupprimerLigne);

    formulaire.appendChild(ligne);
}

/**
 * Supprime la ligne du formulaire qui contient le bouton sur lequel l'événement c'est déclanché
 * @param {Event} e événement
 */
export function supprimerLigne(e) {
  if (document.querySelectorAll(`.${CLASSE_LIGNE}`).length > 1) {
    const ligne = e.target.parentNode;
    ligne.parentNode.removeChild(ligne);
  }
}