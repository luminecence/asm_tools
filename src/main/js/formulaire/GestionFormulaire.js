import {NOM_EQUIPE1, NOM_EQUIPE2, NOM_SCORE1, NOM_SCORE2} from './GenerateurCode';
import {equipes as EQUIPES} from './Equipes';
import * as HtmlUtils from '../utils/HtmlUtils';
import PopinTab, {EVENT_VALIDATION_FORMULAIRE_TAB} from '../popin/PopinTAB';
import moment from 'moment';

export const CLASSE_LIGNE = 'ligne',
  CLASSE_FORMULAIRE = 'formulaire',
  CLASSE_SUPPRIMER_LIGNE = 'supprimerLigne',
  CLASSE_BOUTON_TAB = 'BoutonTirAuBut',
  CLASSE_VICTOIRE_TAB = 'victoireTAB',
  CLASSE_DEFAITE_TAB = 'defaiteTAB',
  CLASSE_NUL_TAB = 'nulTAB',
  ATTR_SCORE_EQUIPE = 'scoreEquipe',
  ATTR_SCORE_EQUIPE_ADVERSE = 'scoreEquipeAdverse';

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
    boutonTAB = HtmlUtils.creerBouton({'classe': CLASSE_BOUTON_TAB, 'onclick': afficherFormulaireTAB}),
    formulaire = document.querySelector(`.${CLASSE_FORMULAIRE}`);

    ligne.addEventListener(EVENT_VALIDATION_FORMULAIRE_TAB, majTAB);

    ligne.appendChild(equipe1);
    ligne.appendChild(score1);
    ligne.appendChild(score2);
    ligne.appendChild(boutonTAB);
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

export function afficherFormulaireTAB(e) {
  const popinTab = new PopinTab('Score de tir au but'),
    element = document.createElement('div');

  e.target.parentNode.appendChild(popinTab.template);
}

export function majTAB(e) {
  const {detail: {scoreEquipe, scoreEquipeAdverse}, target} = e;

  this.dataset[ATTR_SCORE_EQUIPE] = scoreEquipe;
  this.dataset[ATTR_SCORE_EQUIPE_ADVERSE] = scoreEquipeAdverse;

  gererVisuelScore(this, scoreEquipe, scoreEquipeAdverse);
}

function gererVisuelScore(ligne, scoreEquipe, scoreEquipeAdverse) {
  if(scoreEquipe > scoreEquipeAdverse) {
    ligne.classList.remove(CLASSE_DEFAITE_TAB);
    ligne.classList.remove(CLASSE_NUL_TAB);
    ligne.classList.add(CLASSE_VICTOIRE_TAB);
  }
  else if(scoreEquipe < scoreEquipeAdverse) {
    ligne.classList.remove(CLASSE_VICTOIRE_TAB);
    ligne.classList.remove(CLASSE_NUL_TAB);
    ligne.classList.add(CLASSE_DEFAITE_TAB);
  }
  else {
    ligne.classList.remove(CLASSE_VICTOIRE_TAB);
    ligne.classList.remove(CLASSE_DEFAITE_TAB);
    ligne.classList.add(CLASSE_NUL_TAB);
  }
}

/**
 * Effectue le remplissage du sélecteur de dates.
 */
export function remplirSelecteurDate() {
  const selecteurSemaine = document.getElementById('dateMatch');

  datesPossibles().forEach((date, index) => selecteurSemaine.appendChild(HtmlUtils.creerOption({'valeur': index + 1, 'contenu': `Du ${date.debut} au ${date.fin}`})));
}

/**
 * Génére un tableau d'objets contenant les dates possibles pour la génération.
 * @returns {Array<Object>} Le tableau d'objets contenant les dates possibles pour la génération.
 */
function datesPossibles() {
  moment.locale('fr');

  const formatDate = 'D MMMM',
    semaineCourante = {
      'debut': moment().startOf('week').format(formatDate),
      'fin': moment().endOf('week').format(formatDate)
    },
    weekEndCourant = {
      'debut': moment().isoWeekday(6).format(formatDate),
      'fin':  moment().isoWeekday(7).format(formatDate)
    },
    semaineDerniere = {
      'debut': moment().startOf('week').subtract(1, 'week').format(formatDate),
      'fin': moment().endOf('week').subtract(1, 'week').format(formatDate)
    },
    weekEndDernier = {
      'debut': moment().isoWeekday(6).subtract(7, 'day').format(formatDate),
      'fin':  moment().isoWeekday(7).subtract(7, 'day').format(formatDate)
    }

  return [
    weekEndCourant,
    semaineCourante,
    weekEndDernier,
    semaineDerniere
  ];
}