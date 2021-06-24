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
    $('#villainName').text(userName);

  });

  let villain = new Character();
  let hero = new Character();
  let general = new Items('chainmail', 'gun blade', 'health');
  let rogue = new Items('leather', 'dagger', 'stealth');
  let mage = new Items('robe', 'staff', 'mana');
  villain.changeAttributes('villain');
  hero.changeAttributes('hero');

  $('#h-health').text(hero.health);
  $('#h-defense').text(hero.defense);
  $('#h-attack').text(hero.attack);


  $('.radio').click(function(event) {
    event.preventDefault();

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



  $('#attackButton').click(function() {
    if (villain.turn === "villain") {
      villain.dealDamage(hero);
      hero.amIDead(hero);
      villain.turn = 'hero';
      if (hero.imDead === true) {
        $('#result').text(`You have crushed the hero!`);
      }
    } else {
      hero.dealDamage(villain);
      villain.amIDead(villain)
      villain.turn = 'villain';
      if (villain.imDead === true) {
        $('#result').html(`You have destroyed the villain!`);
      }
    }
    $('#v-health').text(villain.health);
    $('#v-defense').text(villain.defense);
    $('#v-attack').text(villain.attack);
    $('#h-health').text(hero.health);
    $('#h-defense').text(hero.defense);
    $('#h-attack').text(hero.attack);
  });
});