/**
 * Crée un input
 * @param {Object} Object Objet contenant les propriétés name, type et valeur
 * @returns {HTMLInputElement} le nouvel input
 */
export function creeInput({name, type = 'text', valeur = null}) {
  const input = document.createElement('input');

  input.name = name;
  input.type = type;
  input.valeur = valeur;

  return input;
}

/**
 * Créer une liste déroulante
 * @param {Object} Object Objet contenant les propriétés name et options
 * @param {string} Object.name Nom dans le formulaire
 * @param {Array<Object>} Object.options options à ajouter le formulaire
 * @returns {HTMLSelectElement} le nouvel select
 */
export function creeSelect({name, options = []}) {
  const select = document.createElement('select');

  select.name = name;

  options.forEach((contenuOption) => {
    const option = document.createElement('option');

    option.value = contenuOption.value;
    option.innerHTML = contenuOption.text;
    select.appendChild(option)
  });

  return select;
}

/**
 * Créer un bouton
 * @param {Object} Objet - objet contenant les propriétés clase, onclick, text, type
 * @returns {HTMLButtonElement} le nouveau bouton
 */
export function creerBouton({classe, onclick, text, type = 'button'}) {
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