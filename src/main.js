import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {Attributes, Character} from './js/character.js';
import Items from './js/items';

console.log(Attributes);
console.log(Items)
$(document).ready(function() {
  $('#name').submit(function(event) {
    event.preventDefault();
    const userName = $('#enterName').val();
    $('#nameOutput').text(userName);
    $('#name').hide()
    let villain = new Character(userName);

    villain.equipItems();
    console.log(villain);
  })

})