import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {Attributes, Character} from './js/character.js';
import Items from './js/items';

console.log(Attributes);
console.log(Items);

$(document).ready(function() {
  $('#name').submit(function(event) {
    event.preventDefault();
    const userName = $('#enterName').val();
    $('#nameOutput').text(userName);
    $('#name').hide();

  });

  let villain = new Character();
  let hero = new Character();
  let general = new Items('chainmail', 'gun blade', 'health');
  let rogue = new Items('leather', 'dagger', 'stealth');
  let mage = new Items('robe', 'staff', 'mana');
  villain.changeAttributes();
  hero.changeAttributes();

  // $('#rollCharacter').click(function(event) {
  //   event.preventDefault;

    
  // });

  $('#classSelector').click(function() {

    const classVal = $('input:radio:checked[name=classSelect]').val();

    if (classVal === 'general') {
      villain.equipItems(general);
      $('#armor').text(general.armor);
      $('#weapon').text(general.weapon);
      $('#potion').text(general.potion);
    } else if (classVal === 'rogue') {
      villain.equipItems(rogue);
      $('#armor').text(rogue.armor);
      $('#weapon').text(rogue.weapon);
      $('#potion').text(rogue.potion);
    } else  {
      villain.equipItems(mage);
      $('#armor').text(mage.armor);
      $('#weapon').text(mage.weapon);
      $('#potion').text(mage.potion);
    }
    $('#v-health').text(villain.health);
    $('#v-defense').text(villain.defense);
    $('#v-attack').text(villain.attack);
  });
  villain.whosTurn();

  $('#attackButton').click(function() {
    villain.dealDamage(hero);
    console.log('Im a hero', hero);
    console.log(villain);
  });
});




