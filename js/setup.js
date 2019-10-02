'use strict';

var COUNT_WIZARD = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var COLOR_COAT = ['rgb(101, 137, 164)','rgb(241, 43, 107)','rgb(146, 100, 161)','rgb(56, 159, 117)','rgb(215, 210, 55)','rgb(0, 0, 0)'];
var COLOR_EYES = ['black','red','blue','yellow','green'];
var COLOR_FIREBALL_WRAP = ['#ee4830','#30a8ee','#5ce6c0','#e848d5','#e6e848'];

// всплывающее окно
var userDialog = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var setupSubmit = userDialog.querySelector('.setup-submit');
var formWizard = document.querySelector('.setup-wizard-form');
var setupWizardCoat = userDialog.querySelector('.wizard-coat');

var onChangeCoat = function () {
  setupWizardCoat.style = COLOR_COAT[getRandomElement(COLOR_COAT)];
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

// document.addEventListener('keydown', function (evt) {
//   console.log(evt.keyCode);
// })

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupSubmit.addEventListener('click', function () {
  formWizard.submit();
});

setupSubmit.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    formWizard.submit();
  }
});


setupWizardCoat.addEventListener('click', function () {
  onChangeCoat();
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
userDialog.querySelector('.setup-similar').classList.remove('hidden');


