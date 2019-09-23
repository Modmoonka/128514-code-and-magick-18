'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_SHADOW = 10;
var FONT_TEXT = '16px PT Mono';
var TEXT_X = 160;
var TEXT_Y = 40;
var RETREAT = 20;
var MAX_WIDTH = 200;
var RECT_WIDTH = 40;
var BETWEEN_RECT = 50;
var MAX_HEIGHT_RECT = 150;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (elements) {
  var max = elements[0];
  for (var i = 0; i <= elements.length - 1; i++) {
    if (elements[i] >= max) {
      max = elements[i];
    }
  }
  return Math.round(max);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_SHADOW, CLOUD_Y + CLOUD_SHADOW, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');
  ctx.fillStyle = '#000';
  ctx.font = FONT_TEXT;
  ctx.fillText('Ура вы победили!', TEXT_X, TEXT_Y, MAX_WIDTH);
  ctx.fillText('Список результатов:', TEXT_X, TEXT_Y + RETREAT, MAX_WIDTH);
  var maxElement = getMaxElement(times);
  for (var i = 0; i <= names.length - 1; i++) {
    ctx.fillStyle = '#000';
    ctx.font = FONT_TEXT;
    ctx.fillText(names[i], CLOUD_X + RETREAT + (RECT_WIDTH + BETWEEN_RECT) * i, CLOUD_HEIGHT + CLOUD_Y - RETREAT);
    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + Math.random() + ')';
    var ratioToMax = times[i] / maxElement * MAX_HEIGHT_RECT;
    ctx.fillRect(CLOUD_X + RETREAT + (RECT_WIDTH + BETWEEN_RECT) * i, Math.round(CLOUD_HEIGHT + CLOUD_Y - RETREAT * 2 - ratioToMax), RECT_WIDTH, Math.round(ratioToMax));
    ctx.fillStyle = 'black';
    ctx.fillText(Math.round(times[i]), (CLOUD_X + RETREAT + (RECT_WIDTH + BETWEEN_RECT) * i) , Math.round((CLOUD_HEIGHT + CLOUD_Y - RETREAT * 2 - ratioToMax) - RETREAT / 2));
  }
};

