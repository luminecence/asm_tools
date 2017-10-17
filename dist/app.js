/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOM_SCORE2 = exports.NOM_SCORE1 = exports.NOM_EQUIPE2 = exports.NOM_EQUIPE1 = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HtmlUtils = __webpack_require__(1);

var HtmlUtils = _interopRequireWildcard(_HtmlUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NOM_EQUIPE1 = exports.NOM_EQUIPE1 = 'equipe1',
    NOM_EQUIPE2 = exports.NOM_EQUIPE2 = 'equipe2',
    NOM_SCORE1 = exports.NOM_SCORE1 = 'score1',
    NOM_SCORE2 = exports.NOM_SCORE2 = 'score2';

var Parseur = function () {
  function Parseur() {
    _classCallCheck(this, Parseur);
  }

  _createClass(Parseur, [{
    key: 'recupereDonneesFormulaire',


    /**
     * Recupère les données du formulaire et les place dans un tableau d'objets.
     * Chaque ligne du tableau représente une ligne du formulaire (équipe, score, équipe)
     * Chaque objets est composés des données de la ligne du formulaire
     * @returns {Array<Object>} - Un tableau d'objet comportant les données du formulaire
     */
    value: function recupereDonneesFormulaire() {
      var matchs = document.querySelectorAll('.ligne');
      var donneesMatchs = [];

      matchs.forEach(function (match) {
        var donneeMatch = [].concat(_toConsumableArray(match.children)).reduce(function (objetMatchPrecedent, match) {
          if (match.name === NOM_EQUIPE1) {
            return _extends(_defineProperty({}, NOM_EQUIPE1, match.options[match.selectedIndex].text), objetMatchPrecedent);
          } else if (match.name === NOM_EQUIPE2) {
            return _extends(_defineProperty({}, NOM_EQUIPE2, match.value), objetMatchPrecedent);
          } else if (match.name === NOM_SCORE1) {
            return _extends(_defineProperty({}, NOM_SCORE1, match.value), objetMatchPrecedent);
          } else if (match.name === NOM_SCORE2) {
            return _extends(_defineProperty({}, NOM_SCORE2, match.value), objetMatchPrecedent);
          }
          return objetMatchPrecedent;
        }, {});
        donneesMatchs.push(donneeMatch);
      });

      return donneesMatchs;
    }

    /**
     * Genère le code pour tous les match
     * @param {Array<Object>} objetsMatch
     * @returns {string} le code généré rerésentant tous les matchs
     */

  }, {
    key: 'genererCodeMatchs',
    value: function genererCodeMatchs(objetsMatch) {
      var codeGenerer = objetsMatch.reduce(function (matchPrecedent, matchCourant) {
        return matchPrecedent + '\n      <tr>\n        <td>' + matchCourant[NOM_EQUIPE1] + '</td>\n        <td>' + matchCourant[NOM_SCORE1] + ' - ' + matchCourant[NOM_SCORE2] + '</td>\n        <td>' + matchCourant[NOM_EQUIPE2] + '</td>\n      </tr>\n      ';
      }, '');
      return codeGenerer;
    }

    /**
     * Affiche le code générer dans une div à la suite du body (la créer si n'existe pas)
     * @param {string} codeGenerer 
     */

  }, {
    key: 'afficherCodeGenerer',
    value: function afficherCodeGenerer(codeGenerer) {
      var codeGenererElement = document.getElementById('codeGenerer');

      if (!codeGenererElement) {
        var div = document.createElement('div'),
            boutonCopie = HtmlUtils.creerBouton({ 'classe': 'boutonCopie', 'onclick': copierCode, 'text': 'copie(icone)' });
        codeGenererElement = document.createElement('p');
        codeGenererElement.id = 'codeGenerer';
        codeGenererElement.innerText = codeGenerer;

        div.appendChild(boutonCopie);
        div.appendChild(codeGenererElement);
        document.body.appendChild(div);
      } else {
        codeGenererElement.p = codeGenerer;
      }
    }

    /**
     * Affiche une prévisualisation du code généré
     * @param {string} codeGenerer 
     */

  }, {
    key: 'afficherPrevisualisation',
    value: function afficherPrevisualisation(codeGenerer) {
      var previsuElement = document.getElementById('previsualisation');

      if (!previsuElement) {
        previsuElement = document.createElement('div');
        previsuElement.id = 'previsualisation';
        previsuElement.innerHTML = codeGenerer;

        document.body.appendChild(previsuElement);
      } else {
        previsuElement.innerHTML = codeGenerer;
      }
    }

    /**
     * Génère le code à partir du formulaire
     */

  }, {
    key: 'generer',
    value: function generer() {
      var selectDateMatch = document.querySelector('.blocDate select'),
          date = selectDateMatch.options[selectDateMatch.value - 1].text,
          codeMatchGenere = this.recupereDonneesFormulaire(),
          codeGenerer = '<p>' + date + '</p>\n    <table>\n      <tbody>\n        <tr>\n          <td>Equipe</td>\n          <td>Score</td>\n          <td>Equipe</td>\n        </tr>\n        ' + this.genererCodeMatchs(codeMatchGenere) + '\n      </tbody>\n    </table>\n    ';
      this.afficherCodeGenerer(codeGenerer);
      this.afficherPrevisualisation(codeGenerer);
    }
  }]);

  return Parseur;
}();

exports.default = Parseur;


function copierCode(e) {
  var paragraphe = e.target.parentNode.querySelector('p'),
      range = document.createRange();

  range.selectNodeContents(paragraphe);

  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  document.execCommand('copy');
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.creeInput = creeInput;
exports.creeSelect = creeSelect;
exports.creerBouton = creerBouton;
exports.creerDiv = creerDiv;
/**
 * Crée un input
 * @param {Object} Object Objet contenant les propriétés name, type et valeur
 * @returns {HTMLInputElement} le nouvel input
 */
function creeInput(_ref) {
  var name = _ref.name,
      _ref$type = _ref.type,
      type = _ref$type === undefined ? 'text' : _ref$type,
      _ref$valeur = _ref.valeur,
      valeur = _ref$valeur === undefined ? null : _ref$valeur,
      _ref$required = _ref.required,
      required = _ref$required === undefined ? false : _ref$required;

  var input = document.createElement('input');

  input.name = name;
  input.type = type;
  input.valeur = valeur;

  if (required === true) {
    input.required = true;
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
function creeSelect(_ref2) {
  var name = _ref2.name,
      _ref2$options = _ref2.options,
      options = _ref2$options === undefined ? {} : _ref2$options;

  var select = document.createElement('select');

  select.name = name;

  var _loop = function _loop(groupe) {
    var optGroup = document.createElement('optgroup');

    optGroup.label = groupe;

    options[groupe].forEach(function (element) {
      var option = document.createElement('option');

      option.value = element;
      option.innerHTML = element;
      optGroup.appendChild(option);
    });

    select.appendChild(optGroup);
  };

  for (var groupe in options) {
    _loop(groupe);
  }

  return select;
}

/**
 * Créer un bouton
 * @param {Object} Objet - objet contenant les propriétés clase, onclick, text, type
 * @returns {HTMLButtonElement} le nouveau bouton
 */
function creerBouton(_ref3) {
  var classe = _ref3.classe,
      onclick = _ref3.onclick,
      text = _ref3.text,
      _ref3$type = _ref3.type,
      type = _ref3$type === undefined ? 'button' : _ref3$type;

  var bouton = document.createElement('button'),
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
function creerDiv(_ref4) {
  var classe = _ref4.classe;

  var div = document.createElement('div');

  div.classList.add(classe);

  return div;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Parseur = __webpack_require__(0);

var _Parseur2 = _interopRequireDefault(_Parseur);

var _GestionFormulaire = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * fonction appelé lors de la validation du formulaire
 * @param {Event} e
 */
function validerFormulaire(e) {
  var codeGenere = new _Parseur2.default().generer();
  e.preventDefault();
}

/**
 * Fonction appelée lorsque la page est chargée
 */
function init() {
  var boutonsSupprimerLigne = [].concat(_toConsumableArray(document.getElementsByClassName('supprimerLigne')));

  (0, _GestionFormulaire.ajouterLigne)();

  boutonsSupprimerLigne.forEach(function (bouton) {
    bouton.onclick = _GestionFormulaire.supprimerLigne;
  });
  document.getElementById('validerFormulaire').onclick = validerFormulaire;
  document.getElementById('ajouterLigne').onclick = _GestionFormulaire.ajouterLigne;
}

window.onload = init;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ajouterLigne = ajouterLigne;
exports.supprimerLigne = supprimerLigne;

var _Parseur = __webpack_require__(0);

var _HtmlUtils = __webpack_require__(1);

var HtmlUtils = _interopRequireWildcard(_HtmlUtils);

var _Equipes = __webpack_require__(4);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var CLASSE_LIGNE = 'ligne',
    CLASSE_FORMULAIRE = 'formulaire',
    CLASSE_SUPPRIMER_LIGNE = 'supprimerLigne';

/**
 * Ajoute une ligne dans le formulaire
 * @param {Event} e événement
 */
function ajouterLigne(e) {
  var ligne = HtmlUtils.creerDiv({ 'classe': CLASSE_LIGNE }),
      equipe1 = HtmlUtils.creeSelect({ 'name': _Parseur.NOM_EQUIPE1, 'options': _Equipes.equipes }),
      equipe2 = HtmlUtils.creeInput({ 'name': _Parseur.NOM_EQUIPE2 }),
      score1 = HtmlUtils.creeInput({ 'name': _Parseur.NOM_SCORE1, type: 'number', required: true }),
      score2 = HtmlUtils.creeInput({ 'name': _Parseur.NOM_SCORE2, type: 'number', required: true }),
      boutonSupprimerLigne = HtmlUtils.creerBouton({ 'classe': CLASSE_SUPPRIMER_LIGNE, 'onclick': supprimerLigne, 'text': 'Supprimer une ligne' }),
      formulaire = document.querySelector('.' + CLASSE_FORMULAIRE);

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
function supprimerLigne(e) {
  if (document.querySelectorAll('.' + CLASSE_LIGNE).length > 1) {
    var ligne = e.target.parentNode;
    ligne.parentNode.removeChild(ligne);
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var equipes = exports.equipes = {
  'Garçons': ['Seniors A', 'Seniors B', 'Seniors C', 'U17', 'U15 (1)', 'U15 (2)', 'U13 (1)', 'U13 (2)', 'U11 (1)', 'U11 (2)', 'U10'],
  'Filles': ['U18 F', 'U16 F', 'U13 F', 'U11 F']
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODBkODc5MzJmYjVhNjQ0OGQxN2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vanMvZm9ybXVsYWlyZS9QYXJzZXVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2pzL2Zvcm11bGFpcmUvSHRtbFV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2pzL2Zvcm11bGFpcmUvR2VzdGlvbkZvcm11bGFpcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vanMvZm9ybXVsYWlyZS9FcXVpcGVzLmpzIl0sIm5hbWVzIjpbIkh0bWxVdGlscyIsIk5PTV9FUVVJUEUxIiwiTk9NX0VRVUlQRTIiLCJOT01fU0NPUkUxIiwiTk9NX1NDT1JFMiIsIlBhcnNldXIiLCJtYXRjaHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkb25uZWVzTWF0Y2hzIiwiZm9yRWFjaCIsIm1hdGNoIiwiZG9ubmVlTWF0Y2giLCJjaGlsZHJlbiIsInJlZHVjZSIsIm9iamV0TWF0Y2hQcmVjZWRlbnQiLCJuYW1lIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJ0ZXh0IiwidmFsdWUiLCJwdXNoIiwib2JqZXRzTWF0Y2giLCJjb2RlR2VuZXJlciIsIm1hdGNoUHJlY2VkZW50IiwibWF0Y2hDb3VyYW50IiwiY29kZUdlbmVyZXJFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiYm91dG9uQ29waWUiLCJjcmVlckJvdXRvbiIsImNvcGllckNvZGUiLCJpZCIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwiYm9keSIsInAiLCJwcmV2aXN1RWxlbWVudCIsImlubmVySFRNTCIsInNlbGVjdERhdGVNYXRjaCIsInF1ZXJ5U2VsZWN0b3IiLCJkYXRlIiwiY29kZU1hdGNoR2VuZXJlIiwicmVjdXBlcmVEb25uZWVzRm9ybXVsYWlyZSIsImdlbmVyZXJDb2RlTWF0Y2hzIiwiYWZmaWNoZXJDb2RlR2VuZXJlciIsImFmZmljaGVyUHJldmlzdWFsaXNhdGlvbiIsImUiLCJwYXJhZ3JhcGhlIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJzZWxlY3Rpb24iLCJ3aW5kb3ciLCJnZXRTZWxlY3Rpb24iLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImV4ZWNDb21tYW5kIiwiY3JlZUlucHV0IiwiY3JlZVNlbGVjdCIsImNyZWVyRGl2IiwidHlwZSIsInZhbGV1ciIsInJlcXVpcmVkIiwiaW5wdXQiLCJzZWxlY3QiLCJncm91cGUiLCJvcHRHcm91cCIsImxhYmVsIiwiZWxlbWVudCIsIm9wdGlvbiIsImNsYXNzZSIsIm9uY2xpY2siLCJib3V0b24iLCJ0ZXh0ZUJvdXRvbiIsImNyZWF0ZVRleHROb2RlIiwiY2xhc3NMaXN0IiwiYWRkIiwidmFsaWRlckZvcm11bGFpcmUiLCJjb2RlR2VuZXJlIiwiZ2VuZXJlciIsInByZXZlbnREZWZhdWx0IiwiaW5pdCIsImJvdXRvbnNTdXBwcmltZXJMaWduZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJvbmxvYWQiLCJham91dGVyTGlnbmUiLCJzdXBwcmltZXJMaWduZSIsIkNMQVNTRV9MSUdORSIsIkNMQVNTRV9GT1JNVUxBSVJFIiwiQ0xBU1NFX1NVUFBSSU1FUl9MSUdORSIsImxpZ25lIiwiZXF1aXBlMSIsImVxdWlwZTIiLCJzY29yZTEiLCJzY29yZTIiLCJib3V0b25TdXBwcmltZXJMaWduZSIsImZvcm11bGFpcmUiLCJsZW5ndGgiLCJyZW1vdmVDaGlsZCIsImVxdWlwZXMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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TVQsU0FOUyxFQU9ULFNBUFMsRUFRVCxTQVJTLEVBU1QsU0FUUyxFQVVULFNBVlMsRUFXVCxLQVhTLENBRFU7QUFjckIsWUFBVSxDQUNSLE9BRFEsRUFFUixPQUZRLEVBR1IsT0FIUSxFQUlSLE9BSlE7QUFkVyxDQUFoQixDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDgwZDg3OTMyZmI1YTY0NDhkMTdkIiwiaW1wb3J0ICogYXMgSHRtbFV0aWxzIGZyb20gJy4vSHRtbFV0aWxzJztcclxuXHJcbmV4cG9ydCBjb25zdCBOT01fRVFVSVBFMSA9ICdlcXVpcGUxJyxcclxuICBOT01fRVFVSVBFMiA9ICdlcXVpcGUyJyxcclxuICBOT01fU0NPUkUxID0gJ3Njb3JlMScsXHJcbiAgTk9NX1NDT1JFMiA9ICdzY29yZTInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyc2V1ciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlY3Vww6hyZSBsZXMgZG9ubsOpZXMgZHUgZm9ybXVsYWlyZSBldCBsZXMgcGxhY2UgZGFucyB1biB0YWJsZWF1IGQnb2JqZXRzLlxyXG4gICAqIENoYXF1ZSBsaWduZSBkdSB0YWJsZWF1IHJlcHLDqXNlbnRlIHVuZSBsaWduZSBkdSBmb3JtdWxhaXJlICjDqXF1aXBlLCBzY29yZSwgw6lxdWlwZSlcclxuICAgKiBDaGFxdWUgb2JqZXRzIGVzdCBjb21wb3PDqXMgZGVzIGRvbm7DqWVzIGRlIGxhIGxpZ25lIGR1IGZvcm11bGFpcmVcclxuICAgKiBAcmV0dXJucyB7QXJyYXk8T2JqZWN0Pn0gLSBVbiB0YWJsZWF1IGQnb2JqZXQgY29tcG9ydGFudCBsZXMgZG9ubsOpZXMgZHUgZm9ybXVsYWlyZVxyXG4gICAqL1xyXG4gIHJlY3VwZXJlRG9ubmVlc0Zvcm11bGFpcmUoKSB7XHJcbiAgICBjb25zdCBtYXRjaHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlnbmUnKVxyXG4gICAgY29uc3QgZG9ubmVlc01hdGNocyA9IFtdXHJcblxyXG4gICAgbWF0Y2hzLmZvckVhY2goKG1hdGNoKSA9PiB7IFxyXG4gICAgICBjb25zdCBkb25uZWVNYXRjaCA9IFsuLi4obWF0Y2guY2hpbGRyZW4pXS5yZWR1Y2UoKG9iamV0TWF0Y2hQcmVjZWRlbnQsIG1hdGNoKSA9PiB7XHJcbiAgICAgICAgaWYobWF0Y2gubmFtZSA9PT0gTk9NX0VRVUlQRTEpIHtcclxuICAgICAgICAgIHJldHVybiB7W05PTV9FUVVJUEUxXTogbWF0Y2gub3B0aW9uc1ttYXRjaC5zZWxlY3RlZEluZGV4XS50ZXh0LCAuLi5vYmpldE1hdGNoUHJlY2VkZW50fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihtYXRjaC5uYW1lID09PSBOT01fRVFVSVBFMikge1xyXG4gICAgICAgICAgcmV0dXJuIHtbTk9NX0VRVUlQRTJdOiBtYXRjaC52YWx1ZSwgLi4ub2JqZXRNYXRjaFByZWNlZGVudH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYobWF0Y2gubmFtZSA9PT0gTk9NX1NDT1JFMSkge1xyXG4gICAgICAgICAgcmV0dXJuIHtbTk9NX1NDT1JFMV06IG1hdGNoLnZhbHVlLCAuLi5vYmpldE1hdGNoUHJlY2VkZW50fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihtYXRjaC5uYW1lID09PSBOT01fU0NPUkUyKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1tOT01fU0NPUkUyXTogbWF0Y2gudmFsdWUsIC4uLm9iamV0TWF0Y2hQcmVjZWRlbnR9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqZXRNYXRjaFByZWNlZGVudFxyXG4gICAgICB9LCB7fSlcclxuICAgICAgZG9ubmVlc01hdGNocy5wdXNoKGRvbm5lZU1hdGNoKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gZG9ubmVlc01hdGNocztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbsOocmUgbGUgY29kZSBwb3VyIHRvdXMgbGVzIG1hdGNoXHJcbiAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBvYmpldHNNYXRjaFxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGxlIGNvZGUgZ8OpbsOpcsOpIHJlcsOpc2VudGFudCB0b3VzIGxlcyBtYXRjaHNcclxuICAgKi9cclxuICBnZW5lcmVyQ29kZU1hdGNocyhvYmpldHNNYXRjaCkge1xyXG4gICAgY29uc3QgY29kZUdlbmVyZXIgPSBvYmpldHNNYXRjaC5yZWR1Y2UoKG1hdGNoUHJlY2VkZW50LCBtYXRjaENvdXJhbnQpID0+IHtcclxuICAgICAgcmV0dXJuIGAke21hdGNoUHJlY2VkZW50fVxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRkPiR7bWF0Y2hDb3VyYW50W05PTV9FUVVJUEUxXX08L3RkPlxyXG4gICAgICAgIDx0ZD4ke21hdGNoQ291cmFudFtOT01fU0NPUkUxXX0gLSAke21hdGNoQ291cmFudFtOT01fU0NPUkUyXX08L3RkPlxyXG4gICAgICAgIDx0ZD4ke21hdGNoQ291cmFudFtOT01fRVFVSVBFMl19PC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICAgYDtcclxuICAgIH0sICcnKTtcclxuICAgIHJldHVybiBjb2RlR2VuZXJlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFmZmljaGUgbGUgY29kZSBnw6luw6lyZXIgZGFucyB1bmUgZGl2IMOgIGxhIHN1aXRlIGR1IGJvZHkgKGxhIGNyw6llciBzaSBuJ2V4aXN0ZSBwYXMpXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvZGVHZW5lcmVyIFxyXG4gICAqL1xyXG4gIGFmZmljaGVyQ29kZUdlbmVyZXIoY29kZUdlbmVyZXIpIHtcclxuICAgIGxldCBjb2RlR2VuZXJlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29kZUdlbmVyZXInKTtcclxuXHJcbiAgICBpZighY29kZUdlbmVyZXJFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgIGJvdXRvbkNvcGllID0gSHRtbFV0aWxzLmNyZWVyQm91dG9uKHsnY2xhc3NlJzogJ2JvdXRvbkNvcGllJywgJ29uY2xpY2snOiBjb3BpZXJDb2RlLCAndGV4dCc6ICdjb3BpZShpY29uZSknfSk7XHJcbiAgICAgIGNvZGVHZW5lcmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgY29kZUdlbmVyZXJFbGVtZW50LmlkID0gJ2NvZGVHZW5lcmVyJztcclxuICAgICAgY29kZUdlbmVyZXJFbGVtZW50LmlubmVyVGV4dCA9IGNvZGVHZW5lcmVyO1xyXG5cclxuICAgICAgZGl2LmFwcGVuZENoaWxkKGJvdXRvbkNvcGllKTtcclxuICAgICAgZGl2LmFwcGVuZENoaWxkKGNvZGVHZW5lcmVyRWxlbWVudCk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBjb2RlR2VuZXJlckVsZW1lbnQucCA9IGNvZGVHZW5lcmVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWZmaWNoZSB1bmUgcHLDqXZpc3VhbGlzYXRpb24gZHUgY29kZSBnw6luw6lyw6lcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29kZUdlbmVyZXIgXHJcbiAgICovXHJcbiAgYWZmaWNoZXJQcmV2aXN1YWxpc2F0aW9uKGNvZGVHZW5lcmVyKSB7XHJcbiAgICBsZXQgcHJldmlzdUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlzdWFsaXNhdGlvbicpO1xyXG5cclxuICAgIGlmKCFwcmV2aXN1RWxlbWVudCkge1xyXG4gICAgICBwcmV2aXN1RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBwcmV2aXN1RWxlbWVudC5pZCA9ICdwcmV2aXN1YWxpc2F0aW9uJztcclxuICAgICAgcHJldmlzdUVsZW1lbnQuaW5uZXJIVE1MID0gY29kZUdlbmVyZXI7XHJcblxyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByZXZpc3VFbGVtZW50KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBwcmV2aXN1RWxlbWVudC5pbm5lckhUTUwgPSBjb2RlR2VuZXJlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEfDqW7DqHJlIGxlIGNvZGUgw6AgcGFydGlyIGR1IGZvcm11bGFpcmVcclxuICAgKi9cclxuICBnZW5lcmVyKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0RGF0ZU1hdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NEYXRlIHNlbGVjdCcpLFxyXG4gICAgICBkYXRlID0gc2VsZWN0RGF0ZU1hdGNoLm9wdGlvbnNbc2VsZWN0RGF0ZU1hdGNoLnZhbHVlLTFdLnRleHQsXHJcbiAgICAgIGNvZGVNYXRjaEdlbmVyZSA9IHRoaXMucmVjdXBlcmVEb25uZWVzRm9ybXVsYWlyZSgpLFxyXG4gICAgICBjb2RlR2VuZXJlciA9IGA8cD4ke2RhdGV9PC9wPlxyXG4gICAgPHRhYmxlPlxyXG4gICAgICA8dGJvZHk+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkPkVxdWlwZTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+U2NvcmU8L3RkPlxyXG4gICAgICAgICAgPHRkPkVxdWlwZTwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICAke3RoaXMuZ2VuZXJlckNvZGVNYXRjaHMoY29kZU1hdGNoR2VuZXJlKX1cclxuICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgICBgO1xyXG4gICAgdGhpcy5hZmZpY2hlckNvZGVHZW5lcmVyKGNvZGVHZW5lcmVyKTtcclxuICAgIHRoaXMuYWZmaWNoZXJQcmV2aXN1YWxpc2F0aW9uKGNvZGVHZW5lcmVyKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcGllckNvZGUoZSkge1xyXG4gIGNvbnN0IHBhcmFncmFwaGUgPSBlLnRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ3AnKSxcclxuICAgIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuXHJcbiAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHBhcmFncmFwaGUpO1xyXG5cclxuICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcblxyXG4gIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9qcy9mb3JtdWxhaXJlL1BhcnNldXIuanMiLCIvKipcclxuICogQ3LDqWUgdW4gaW5wdXRcclxuICogQHBhcmFtIHtPYmplY3R9IE9iamVjdCBPYmpldCBjb250ZW5hbnQgbGVzIHByb3ByacOpdMOpcyBuYW1lLCB0eXBlIGV0IHZhbGV1clxyXG4gKiBAcmV0dXJucyB7SFRNTElucHV0RWxlbWVudH0gbGUgbm91dmVsIGlucHV0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlZUlucHV0KHtuYW1lLCB0eXBlID0gJ3RleHQnLCB2YWxldXIgPSBudWxsLCByZXF1aXJlZCA9IGZhbHNlfSkge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcbiAgaW5wdXQubmFtZSA9IG5hbWU7XHJcbiAgaW5wdXQudHlwZSA9IHR5cGU7XHJcbiAgaW5wdXQudmFsZXVyID0gdmFsZXVyO1xyXG5cclxuICBpZiAocmVxdWlyZWQgPT09IHRydWUpIHtcclxuICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBpbnB1dDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyw6llciB1bmUgbGlzdGUgZMOpcm91bGFudGVcclxuICogQHBhcmFtIHtPYmplY3R9IE9iamVjdCBPYmpldCBjb250ZW5hbnQgbGVzIHByb3ByacOpdMOpcyBuYW1lIGV0IG9wdGlvbnNcclxuICogQHBhcmFtIHtzdHJpbmd9IE9iamVjdC5uYW1lIE5vbSBkYW5zIGxlIGZvcm11bGFpcmVcclxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBPYmplY3Qub3B0aW9ucyBvcHRpb25zIMOgIGFqb3V0ZXIgbGUgZm9ybXVsYWlyZVxyXG4gKiBAcmV0dXJucyB7SFRNTFNlbGVjdEVsZW1lbnR9IGxlIG5vdXZlbCBzZWxlY3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVlU2VsZWN0KHtuYW1lLCBvcHRpb25zID0ge319KSB7XHJcbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcblxyXG4gIHNlbGVjdC5uYW1lID0gbmFtZTtcclxuXHJcbiAgZm9yIChsZXQgZ3JvdXBlIGluIG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IG9wdEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0Z3JvdXAnKTtcclxuXHJcbiAgICBvcHRHcm91cC5sYWJlbCA9IGdyb3VwZTtcclxuXHJcbiAgICBvcHRpb25zW2dyb3VwZV0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuXHJcbiAgICAgIG9wdGlvbi52YWx1ZSA9IGVsZW1lbnQ7XHJcbiAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSBlbGVtZW50O1xyXG4gICAgICBvcHRHcm91cC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdEdyb3VwKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBzZWxlY3Q7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcsOpZXIgdW4gYm91dG9uXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBPYmpldCAtIG9iamV0IGNvbnRlbmFudCBsZXMgcHJvcHJpw6l0w6lzIGNsYXNlLCBvbmNsaWNrLCB0ZXh0LCB0eXBlXHJcbiAqIEByZXR1cm5zIHtIVE1MQnV0dG9uRWxlbWVudH0gbGUgbm91dmVhdSBib3V0b25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVlckJvdXRvbih7Y2xhc3NlLCBvbmNsaWNrLCB0ZXh0LCB0eXBlID0gJ2J1dHRvbid9KSB7XHJcbiAgY29uc3QgYm91dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcbiAgICB0ZXh0ZUJvdXRvbiA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xyXG5cclxuICBib3V0b24uY2xhc3NMaXN0LmFkZChjbGFzc2UpO1xyXG4gIGJvdXRvbi50eXBlID0gdHlwZTtcclxuICBib3V0b24ub25jbGljayA9IG9uY2xpY2s7XHJcbiAgYm91dG9uLmFwcGVuZENoaWxkKHRleHRlQm91dG9uKTtcclxuXHJcbiAgcmV0dXJuIGJvdXRvbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyw6llIHVuZSBkaXZcclxuICogQHBhcmFtIHtPYmplY3R9IE9iamV0IC0gb2JqZXQgY29udGVuYW50IGxhIHByb3ByacOpdMOpIGNsYXNzZVxyXG4gKiBAcmV0dXJucyB7SFRNTERpdkVsZW1lbnR9IExhIG5vdXZlbGxlIGRpdlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWVyRGl2KHtjbGFzc2V9KSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzZSk7XHJcblxyXG4gIHJldHVybiBkaXY7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9qcy9mb3JtdWxhaXJlL0h0bWxVdGlscy5qcyIsImltcG9ydCBQYXJzZXVyIGZyb20gJy4vZm9ybXVsYWlyZS9QYXJzZXVyJ1xyXG5pbXBvcnQge2Fqb3V0ZXJMaWduZSwgc3VwcHJpbWVyTGlnbmV9IGZyb20gJy4vZm9ybXVsYWlyZS9HZXN0aW9uRm9ybXVsYWlyZSdcclxuXHJcbi8qKlxyXG4gKiBmb25jdGlvbiBhcHBlbMOpIGxvcnMgZGUgbGEgdmFsaWRhdGlvbiBkdSBmb3JtdWxhaXJlXHJcbiAqIEBwYXJhbSB7RXZlbnR9IGVcclxuICovXHJcbmZ1bmN0aW9uIHZhbGlkZXJGb3JtdWxhaXJlKGUpIHtcclxuICBjb25zdCBjb2RlR2VuZXJlID0gbmV3IFBhcnNldXIoKS5nZW5lcmVyKClcclxuICBlLnByZXZlbnREZWZhdWx0KClcclxufVxyXG5cclxuLyoqXHJcbiAqIEZvbmN0aW9uIGFwcGVsw6llIGxvcnNxdWUgbGEgcGFnZSBlc3QgY2hhcmfDqWVcclxuICovXHJcbmZ1bmN0aW9uIGluaXQgKCkge1xyXG4gIGNvbnN0IGJvdXRvbnNTdXBwcmltZXJMaWduZSA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdXBwcmltZXJMaWduZScpXTtcclxuXHJcbiAgYWpvdXRlckxpZ25lKCk7XHJcblxyXG4gIGJvdXRvbnNTdXBwcmltZXJMaWduZS5mb3JFYWNoKChib3V0b24pID0+IHtcclxuICAgIGJvdXRvbi5vbmNsaWNrID0gc3VwcHJpbWVyTGlnbmU7XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZhbGlkZXJGb3JtdWxhaXJlJykub25jbGljayA9IHZhbGlkZXJGb3JtdWxhaXJlO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdham91dGVyTGlnbmUnKS5vbmNsaWNrID0gYWpvdXRlckxpZ25lO1xyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gaW5pdFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2pzL2luZGV4LmpzIiwiaW1wb3J0IHtOT01fRVFVSVBFMSwgTk9NX0VRVUlQRTIsIE5PTV9TQ09SRTEsIE5PTV9TQ09SRTJ9IGZyb20gJy4vUGFyc2V1cic7XHJcbmltcG9ydCAqIGFzIEh0bWxVdGlscyBmcm9tICcuL0h0bWxVdGlscyc7XHJcbmltcG9ydCB7ZXF1aXBlcyBhcyBFUVVJUEVTfSBmcm9tICcuL0VxdWlwZXMnO1xyXG5cclxuY29uc3QgQ0xBU1NFX0xJR05FID0gJ2xpZ25lJyxcclxuICBDTEFTU0VfRk9STVVMQUlSRSA9ICdmb3JtdWxhaXJlJyxcclxuICBDTEFTU0VfU1VQUFJJTUVSX0xJR05FID0gJ3N1cHByaW1lckxpZ25lJztcclxuXHJcbi8qKlxyXG4gKiBBam91dGUgdW5lIGxpZ25lIGRhbnMgbGUgZm9ybXVsYWlyZVxyXG4gKiBAcGFyYW0ge0V2ZW50fSBlIMOpdsOpbmVtZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWpvdXRlckxpZ25lKGUpIHtcclxuICBjb25zdCBsaWduZSA9IEh0bWxVdGlscy5jcmVlckRpdih7J2NsYXNzZSc6IENMQVNTRV9MSUdORX0pLFxyXG4gICAgZXF1aXBlMSA9IEh0bWxVdGlscy5jcmVlU2VsZWN0KHsnbmFtZSc6IE5PTV9FUVVJUEUxLCAnb3B0aW9ucyc6IEVRVUlQRVN9KSxcclxuICAgIGVxdWlwZTIgPSBIdG1sVXRpbHMuY3JlZUlucHV0KHsnbmFtZSc6IE5PTV9FUVVJUEUyfSksXHJcbiAgICBzY29yZTEgPSBIdG1sVXRpbHMuY3JlZUlucHV0KHsnbmFtZSc6IE5PTV9TQ09SRTEsIHR5cGU6ICdudW1iZXInLCByZXF1aXJlZDogdHJ1ZX0pLFxyXG4gICAgc2NvcmUyID0gSHRtbFV0aWxzLmNyZWVJbnB1dCh7J25hbWUnOiBOT01fU0NPUkUyLCB0eXBlOiAnbnVtYmVyJywgcmVxdWlyZWQ6IHRydWV9KSxcclxuICAgIGJvdXRvblN1cHByaW1lckxpZ25lID0gSHRtbFV0aWxzLmNyZWVyQm91dG9uKHsnY2xhc3NlJzogQ0xBU1NFX1NVUFBSSU1FUl9MSUdORSwgJ29uY2xpY2snOiBzdXBwcmltZXJMaWduZSwgJ3RleHQnOiAnU3VwcHJpbWVyIHVuZSBsaWduZSd9KSxcclxuICAgIGZvcm11bGFpcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtDTEFTU0VfRk9STVVMQUlSRX1gKTtcclxuXHJcbiAgICBsaWduZS5hcHBlbmRDaGlsZChlcXVpcGUxKTtcclxuICAgIGxpZ25lLmFwcGVuZENoaWxkKHNjb3JlMSk7XHJcbiAgICBsaWduZS5hcHBlbmRDaGlsZChzY29yZTIpO1xyXG4gICAgbGlnbmUuYXBwZW5kQ2hpbGQoZXF1aXBlMik7XHJcbiAgICBsaWduZS5hcHBlbmRDaGlsZChib3V0b25TdXBwcmltZXJMaWduZSk7XHJcblxyXG4gICAgZm9ybXVsYWlyZS5hcHBlbmRDaGlsZChsaWduZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTdXBwcmltZSBsYSBsaWduZSBkdSBmb3JtdWxhaXJlIHF1aSBjb250aWVudCBsZSBib3V0b24gc3VyIGxlcXVlbCBsJ8OpdsOpbmVtZW50IGMnZXN0IGTDqWNsYW5jaMOpXHJcbiAqIEBwYXJhbSB7RXZlbnR9IGUgw6l2w6luZW1lbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdXBwcmltZXJMaWduZShlKSB7XHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke0NMQVNTRV9MSUdORX1gKS5sZW5ndGggPiAxKSB7XHJcbiAgICBjb25zdCBsaWduZSA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICBsaWduZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpZ25lKTtcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9qcy9mb3JtdWxhaXJlL0dlc3Rpb25Gb3JtdWxhaXJlLmpzIiwiZXhwb3J0IGNvbnN0IGVxdWlwZXMgPSB7XHJcbiAgJ0dhcsOnb25zJzogW1xyXG4gICAgJ1NlbmlvcnMgQScsXHJcbiAgICAnU2VuaW9ycyBCJyxcclxuICAgICdTZW5pb3JzIEMnLFxyXG4gICAgJ1UxNycsXHJcbiAgICAnVTE1ICgxKScsXHJcbiAgICAnVTE1ICgyKScsXHJcbiAgICAnVTEzICgxKScsXHJcbiAgICAnVTEzICgyKScsXHJcbiAgICAnVTExICgxKScsXHJcbiAgICAnVTExICgyKScsXHJcbiAgICAnVTEwJ1xyXG4gIF0sXHJcbiAgJ0ZpbGxlcyc6IFtcclxuICAgICdVMTggRicsXHJcbiAgICAnVTE2IEYnLFxyXG4gICAgJ1UxMyBGJyxcclxuICAgICdVMTEgRidcclxuICBdXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9qcy9mb3JtdWxhaXJlL0VxdWlwZXMuanMiXSwic291cmNlUm9vdCI6IiJ9