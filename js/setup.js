'use strict';

var COUNT_WIZARD = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var COLOR_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var COLOR_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var COLOR_FIREBALL_WRAP = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getSetup = function (argumentQuery) {
  return document.querySelector(argumentQuery);
};

var changeColors = function (changeWizard, arrayColors) {
  getSetup(changeWizard).style.fill = getRandomElement(arrayColors);
};

var changeColorsFireball = function (changeWizard, arrayColors) {
  var color = getRandomElement(arrayColors);
  getSetup(changeWizard).style.backgroundColor = color;
  getSetup(changeWizard).querySelector('input').value = color;
};

// var changeColorsInput = function (inputName, colors) {
//   getSetup(inputName).value = colors;
// };

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  getSetup('.setup').classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  getSetup('.setup').classList.add('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

getSetup('.setup-open').addEventListener('click', function () {
  openPopup();
});

getSetup('.setup-open').addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

getSetup('.setup-close').addEventListener('click', function () {
  closePopup();
});

getSetup('.setup-close').addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

getSetup('.setup-submit').addEventListener('click', function () {
  getSetup('.setup-wizard-form').submit();
});

getSetup('.setup-submit').addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    getSetup('.setup-wizard-form').submit();
  }
});

getSetup('.wizard-coat').addEventListener('click', function () {
  changeColors('.wizard-coat', COLOR_COAT);
});

getSetup('.wizard-eyes').addEventListener('click', function () {
  changeColors('.wizard-eyes', COLOR_EYES);
});

getSetup('.setup-fireball-wrap').addEventListener('click', function () {
  changeColorsFireball('.setup-fireball-wrap', COLOR_FIREBALL_WRAP);
});

// блок с похожими персонажами
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemlate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SERNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomElement = function (arrayOfElements) {
  var numberRandom = Math.random() * (arrayOfElements.length - 1);
  return arrayOfElements[Math.round(numberRandom)];
};

var renderWizard = function (wizards) {
  var wizardElement = similarWizardTemlate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();

var wizard = [];
var objWizard = {};
for (var i = 0; i < COUNT_WIZARD; i++) {
  objWizard.name = getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SERNAME);
  objWizard.coatColor = getRandomElement(WIZARD_COATCOLOR);
  objWizard.eyesColor = getRandomElement(WIZARD_EYESCOLOR);
  wizard[i] = objWizard;
  fragment.appendChild(renderWizard(wizard[i]));
}

similarListElement.appendChild(fragment);
getSetup('.setup-similar').classList.remove('hidden');


