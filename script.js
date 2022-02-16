'use strict';

const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#e_btn');
const square = document.querySelector('#square');
const circle = document.querySelector('#circle');
const inputText = document.querySelector('input[type=text]');
const inputRange  = document.querySelector('input[type=range]');
const inputRangeText  = document.querySelector('#range-span');


const changeColor = function() {
  square.style.backgroundColor = inputText.value;
  inputText.value = '';
};

const invisible = function(){
  btn2.style.display = 'none';
};

const circleParametr = function(event){
  inputRangeText.textContent = event.target.value;
  circle.style.width = inputRangeText.textContent + '%';
  circle.style.height = inputRangeText.textContent + '%';
};

btn.addEventListener('click', changeColor);
btn2.addEventListener('click', invisible);
inputRange.addEventListener('input', circleParametr);
inputRange.addEventListener('change', circleParametr);




