import * as HTMLUtils from '../utils/HtmlUtils';

const CLASSE_CONTAINEUR_POPIN = 'containeurPopin',
  CHEMIN_IMAGE_CROIX = 'images/croix.png';

/**
 * Classe de base des popin
 */
export default class Popin
{
  /**
   * Constructeur
   * @param {string} titre titre de la popin
   */
  constructor(titre) {
    const containeurPopin = HTMLUtils.creerDiv({'classe': CLASSE_CONTAINEUR_POPIN}),
      popin = HTMLUtils.creerDiv({'classe': 'popin'}),
      header = HTMLUtils.creerDiv({'classe': 'header'}),
      body = HTMLUtils.creerDiv({'classe': 'body'}),
      h1 = document.createElement('h1'),
      imageCroix = document.createElement('img');

    popin.classList.add('pure-g');
    header.classList.add('pure-u-1-1');
    h1.appendChild(document.createTextNode(titre));
    h1.classList.add('pure-u-11-12');
    imageCroix.src = CHEMIN_IMAGE_CROIX;
    imageCroix.onclick = this.supprimerFormulaire;
    imageCroix.classList.add('pure-u-1-12');

    header.appendChild(h1);
    header.appendChild(imageCroix);
    body.appendChild(this.genererCorps());
    popin.appendChild(header);
    popin.appendChild(body);
    containeurPopin.appendChild(popin);

    this.template = containeurPopin;
  }

  /**
   * Supprime le formulaire
   */
  supprimerFormulaire() {
    const containeurPopin = document.querySelector(`.${CLASSE_CONTAINEUR_POPIN}`);

    containeurPopin.parentNode.removeChild(containeurPopin);
  }

  /**
   * Genère le corps de la popin
   */
  genererCorps() {
    console.error('Implémentation du corps de la popin requise');
  }
}
