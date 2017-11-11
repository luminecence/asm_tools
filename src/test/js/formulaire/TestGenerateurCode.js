import GenerateurCode from '../../../main/js/formulaire/GenerateurCode';
import * as HtmlUtils from '../../../main/js/utils/HtmlUtils';

describe('Test de GenerateurCode avec la fonction', () => {
  describe('afficherCodeGenerer', () => {
    it('un code valide', () => {
      const div = document.createElement('div'),
        boutonCopie = HtmlUtils.creerBouton({'classe': 'boutonCopie'});

      const codeGenererElement = document.createElement('p');
      codeGenererElement.id = 'codeGenerer';
      codeGenererElement.innerText = 'toto';

      div.appendChild(boutonCopie);
      div.appendChild(codeGenererElement);
      document.body.appendChild(div);

      const codeAttendu = `<p id="codeGenerer">toto</p>`,
        p = document.createElement('p');

      p.appendChild(document.createTextNode('toto'));
      p.id = 'codeGenerer';

      const generateurCode = new GenerateurCode();

      generateurCode.afficherCodeGenerer(p);

      expect(document.getElementById('codeGenerer').outerHTML).to.equal(codeAttendu);
    });
  });
});