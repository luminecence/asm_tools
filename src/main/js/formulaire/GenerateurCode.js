import * as HtmlUtils from '../utils/HtmlUtils';
import {ATTR_SCORE_EQUIPE, ATTR_SCORE_EQUIPE_ADVERSE} from '../formulaire/GestionFormulaire';

export const NOM_EQUIPE1 = 'equipe1',
  NOM_EQUIPE2 = 'equipe2',
  NOM_SCORE1 = 'score1',
  NOM_SCORE2 = 'score2';

export default class GenerateurCode {

  /**
   * Recupère les données du formulaire et les place dans un tableau d'objets.
   * Chaque ligne du tableau représente une ligne du formulaire (équipe, score, équipe)
   * Chaque objets est composés des données de la ligne du formulaire
   * @returns {Array<Object>} - Un tableau d'objet comportant les données du formulaire
   */
  recupereDonneesFormulaire() {
    const matchs = document.querySelectorAll('.ligne')
    const donneesMatchs = []

    matchs.forEach((match) => {
      let donneeMatch = [...(match.children)].reduce((objetMatchPrecedent, match) => {
        if(match.name === NOM_EQUIPE1) {
          return {[NOM_EQUIPE1]: match.options[match.selectedIndex].text, ...objetMatchPrecedent};
        }
        else if(match.name === NOM_EQUIPE2) {
          return {[NOM_EQUIPE2]: match.value, ...objetMatchPrecedent};
        }
        else if(match.name === NOM_SCORE1) {
          return {[NOM_SCORE1]: match.value, ...objetMatchPrecedent};
        }
        else if(match.name === NOM_SCORE2) {
          return {[NOM_SCORE2]: match.value, ...objetMatchPrecedent};
        }
        return objetMatchPrecedent
      }, {});

      if(match.dataset[ATTR_SCORE_EQUIPE] && match.dataset[ATTR_SCORE_EQUIPE_ADVERSE]) {
        donneeMatch = {[ATTR_SCORE_EQUIPE]: match.dataset[ATTR_SCORE_EQUIPE], [ATTR_SCORE_EQUIPE_ADVERSE]: match.dataset[ATTR_SCORE_EQUIPE_ADVERSE], ...donneeMatch};
      }
      donneesMatchs.push(donneeMatch)
    });

    return donneesMatchs;
  }

  /**
   * Genère le code pour tous les match
   * @param {Array<Object>} objetsMatch
   * @returns {string} le code généré rerésentant tous les matchs
   */
  genererCodeMatchs(objetsMatch) {
    const codeGenerer = objetsMatch.reduce((matchPrecedent, matchCourant) => {
      let codeMatchGenere = `${matchPrecedent}
      <tr>
        <td>${matchCourant[NOM_EQUIPE1]}</td>
        <td>${matchCourant[NOM_SCORE1]} - ${matchCourant[NOM_SCORE2]}</td>
        <td>${matchCourant[NOM_EQUIPE2]}</td>
      </tr>`;

      if(matchCourant[ATTR_SCORE_EQUIPE] && matchCourant[ATTR_SCORE_EQUIPE_ADVERSE]) {
        codeMatchGenere += `
        <tr>
          <td>Tir au but :</td>
          <td>${matchCourant[ATTR_SCORE_EQUIPE]} - ${matchCourant[ATTR_SCORE_EQUIPE_ADVERSE]}</td>
        </tr>
        `;
      };

      return codeMatchGenere;
    }, '');
    return codeGenerer;
  }

  /**
   * Affiche le code générer dans une div à la suite du body (la créer si n'existe pas)
   * @param {string} codeGenerer 
   */
  afficherCodeGenerer(codeGenerer) {
    let codeGenererElement = document.getElementById('codeGenerer');

    if(!codeGenererElement) {
      const div = document.createElement('div'),
        boutonCopie = HtmlUtils.creerBouton({'classe': 'boutonCopie', 'onclick': copierCode});
      codeGenererElement = document.createElement('p');
      codeGenererElement.id = 'codeGenerer';
      codeGenererElement.innerText = codeGenerer;

      div.appendChild(boutonCopie);
      div.appendChild(codeGenererElement);
      document.body.appendChild(div);
    }
    else {
      codeGenererElement.p = codeGenerer;
    }
  }

  /**
   * Affiche une prévisualisation du code généré
   * @param {string} codeGenerer 
   */
  afficherPrevisualisation(codeGenerer) {
    let previsuElement = document.getElementById('previsualisation');

    if(!previsuElement) {
      previsuElement = document.createElement('div');
      previsuElement.id = 'previsualisation';
      previsuElement.innerHTML = codeGenerer;

      document.body.appendChild(previsuElement);
    }
    else {
      previsuElement.innerHTML = codeGenerer;
    }
  }

  /**
   * Génère le code à partir du formulaire
   */
  generer() {
    const selectDateMatch = document.querySelector('.blocDate select'),
      date = selectDateMatch.options[selectDateMatch.value-1].text,
      codeMatchGenere = this.recupereDonneesFormulaire(),
      codeGenerer = `<p>${date}</p>
    <table>
      <tbody>
        <tr>
          <td>Equipe</td>
          <td>Score</td>
          <td>Equipe</td>
        </tr>
        ${this.genererCodeMatchs(codeMatchGenere)}
      </tbody>
    </table>
    `;
    this.afficherCodeGenerer(codeGenerer);
    this.afficherPrevisualisation(codeGenerer);
  }
}

/**
 * Fonction appelé lors du clic sur le bouton pour copier le code généré
 * @param {Event} e 
 */
function copierCode(e) {
  const paragraphe = e.target.parentNode.querySelector('p'),
    range = document.createRange();

  range.selectNodeContents(paragraphe);

  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  document.execCommand('copy');
  HtmlUtils.afficherPopup('Code copié dans le presse papier');
}