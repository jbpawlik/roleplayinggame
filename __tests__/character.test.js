import {Character, Attributes} from '../src/js/character.js'
import Items from '../src/js/items.js'

describe ('Character', () => {
  let villain;
  let items;
  let hero;

  beforeEach(() => {
    villain = new Character();
    hero = new Character();
    items = new Items('chainmail', 'sword', 'potion');
    villain.changeAttributes('villain');
    hero.changeAttributes('hero');
  })

  test('Character class should exist', () => {
    expect(villain).toBeDefined();
  })

  test('equipItems should add items to Character', () => {
    villain.equipItems('chainmail', 'sword', 'potion')
    expect(villain.items).toBe('chainmail', 'sword', 'potion');
  })

  test('changeAttributes should change the attributes when type changes', () => {
    villain.changeAttributes('hero');
    expect(villain.type).toBe('hero');
  })

  test('attack should deal damage to villain if the character turn is hero', () => {
    hero.dealDamage(villain)
    expect(villain.health).toBeLessThan(100)
  })

  test('attack should deal damage to villain if the character turn is hero', () => {
    villain.dealDamage(hero)
    expect(hero.health).toBeLessThan(100)
  })
})

describe ('Attributes', () => {
  let hero;

  beforeEach(() => {
    hero = new Attributes();
  });

  test ('create attributes class with health property', ()=> {
    expect(hero.health).toEqual(100);
  });
  
  test('attributes class should have attack property with value of 10', () => {
    expect(hero.attack).toEqual(10);
  })

  test('attributes class should have defense property with value of 10', () => {
    expect(hero.defense).toEqual(10);
  })
});