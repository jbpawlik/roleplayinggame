import {Character, Attributes} from '../src/js/character.js'

describe ('Character', () => {
  let villain;
  beforeEach(() => {
    villain = new Character()
  })

  test('Character class should exist', () => {
    expect(villain).toBeDefined();
  })
})

describe ('Attributes', () => {
  let hero;

  beforeEach(() => {
    hero = new Attributes()
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