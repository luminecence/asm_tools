import Popin, {supprimerFormulaire} from './Popin';
import {CLASSE_LIGNE} from '../formulaire/GestionFormulaire';
import * as HtmlUtils from '../utils/HtmlUtils';

export const CLASSE_FORMULAIRE_TAB = 'formulaireTAB',
  NAME_SCORE_EQUIPE = 'scoreEquipe',
  NAME_SCORE_EQUIPE_ADVERSE = 'scoreEquipeAdverse',
  EVENT_VALIDATION_FORMULAIRE_TAB = 'notifierFormulaireGlobal';

  /**
   * Popin des tirs au but
   */
export default class PopinTAB extends Popin
{ 
  /**
   * constructeur
   * @param {string} titre titre de la popin
   */
  constructor(titre) {
    super(titre);
  }

  /**
   * @override
   * Génère le corps de la popin
   * @returns {HTMLElement}
   */
  genererCorps() {
    const formulaire = document.createElement('form'),
      ligneEquipe = HtmlUtils.creerDiv({'classe': CLASSE_LIGNE}),
      labelEquipe = HtmlUtils.creerLabel({'texte': 'Nb de tir au but de l\'équipe'}),
      inputEquipe = HtmlUtils.creeInput({'name': NAME_SCORE_EQUIPE, 'type': 'number'}),
      ligneEquipeAdverse = HtmlUtils.creerDiv({'classe': CLASSE_LIGNE}),
      labelEquipeAdverse = HtmlUtils.creerLabel({'texte': 'Nb de tir au but de l\'équipe adverse'}),
      inputEquipeAdverse = HtmlUtils.creeInput({'name': NAME_SCORE_EQUIPE_ADVERSE, 'type': 'number'}),
      boutonValider = HtmlUtils.creerBouton({'classe': 'boutonValider', 'onclick': this.validerFormulaire, 'text': 'valider', 'type': 'submit'});

    formulaire.classList.add([CLASSE_FORMULAIRE_TAB]);

    ligneEquipe.appendChild(labelEquipe);
    ligneEquipe.appendChild(inputEquipe);
    ligneEquipeAdverse.appendChild(labelEquipeAdverse);
    ligneEquipeAdverse.appendChild(inputEquipeAdverse);
    formulaire.appendChild(ligneEquipe);
    formulaire.appendChild(ligneEquipeAdverse);
    formulaire.appendChild(boutonValider);

    return formulaire;
  }

  /**
   * fonction appelée lors de la validation du formulaire
   * @param {Event} e
   */
  validerFormulaire(e) {
    const popin = e.target.parentNode.parentNode,
      formulaireTAB = popin.querySelector(`.${CLASSE_FORMULAIRE_TAB}`),
      scoreEquipe = formulaireTAB.querySelector(`input[name='${NAME_SCORE_EQUIPE}']`).value,
      scoreEquipeAdverse = formulaireTAB.querySelector(`input[name='${NAME_SCORE_EQUIPE_ADVERSE}']`).value,
      event = new CustomEvent(EVENT_VALIDATION_FORMULAIRE_TAB, {detail: {scoreEquipe, scoreEquipeAdverse}, bubbles: true});

    e.target.dispatchEvent(event);
    super.supprimerFormulaire();
    e.preventDefault();
  }
}