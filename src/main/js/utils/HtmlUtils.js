/**
 * Crée un label
 * @param {Object} Object objet contenant les propriétes texte et labelFor
 * @returns {HTMLLabelElement} le nouveau label
 */
export function creerLabel({texte, labelFor = ''}) {
  const label = document.createElement('label');

  label.appendChild(document.createTextNode(texte));
  label.for = labelFor;

  return label;
}

/**
 * Crée un input
 * @param {Object} Object Objet contenant les propriétés name, type et valeur
 * @returns {HTMLInputElement} le nouvel input
 */
export function creeInput({name, type = 'text', valeur = null, required = false, id = null}) {
  const input = document.createElement('input');

  input.name = name;
  input.type = type;
  input.valeur = valeur;

  if (required === true) {
    input.required = true;
  }

  if (id !== null) {
    input.id = id;
  }

  return input;
}

/**
 * Créer une liste déroulante
 * @param {Object} Object Objet contenant les propriétés name et options
 * @param {string} Object.name Nom dans le formulaire
 * @param {Array<Object>} Object.options options à ajouter le formulaire
 * @returns {HTMLSelectElement} le nouvel select
 */
export function creeSelect({name, options = {}}) {
  const select = document.createElement('select');

  select.name = name;

  for (let groupe in options) {
    const optGroup = document.createElement('optgroup');

    optGroup.label = groupe;

    options[groupe].forEach((element) => {
      const option = document.createElement('option');

      option.value = element;
      option.innerHTML = element;
      optGroup.appendChild(option);
    });

    select.appendChild(optGroup);
  }

  return select;
}

/**
 * Créer un bouton
 * @param {Object} Objet - objet contenant les propriétés clase, onclick, text, type
 * @returns {HTMLButtonElement} le nouveau bouton
 */
export function creerBouton({classe, onclick, text= '', type = 'button'}) {
  const bouton = document.createElement('button'),
    texteBouton = document.createTextNode(text);

  bouton.classList.add(classe);
  bouton.type = type;
  bouton.onclick = onclick;
  bouton.appendChild(texteBouton);

  return bouton;
}

/**
 * Crée une div
 * @param {Object} Objet - objet contenant la propriété classe
 * @returns {HTMLDivElement} La nouvelle div
 */
export function creerDiv({classe}) {
  const div = document.createElement('div');

  div.classList.add(classe);

  return div;
}

export function creerOption({valeur, contenu = ''}) {
  const option = document.createElement('option');

  option.value = valeur;
  option.insertAdjacentHTML('beforeend', contenu);

  return option;
}

/**
 * Affiche une popup temporairement
 * @param {String} texte texte de la popup
 */
export function afficherPopup(texte) {
  function supprimerPopup({target}) {
    target.parentNode.removeChild(target);
  }

  const popup = document.createElement('div'),
    paragraphe = document.createElement('p');

  paragraphe.appendChild(document.createTextNode(texte));
  popup.addEventListener('animationend', supprimerPopup);
  popup.classList.add('popup');
  popup.appendChild(paragraphe);

  document.body.appendChild(popup);
}