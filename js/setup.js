'use strict';

var COUNT_WIZARD = 4;

// всплывающее окно
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

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
userDialog.querySelector('.setup-similar').classList.remove('hidden');


