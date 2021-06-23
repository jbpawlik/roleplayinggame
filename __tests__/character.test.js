import Character from '../src/js/character.js'

describe ('Character', () => {
  let hero;

  beforeEach(() => {
    hero = new Character()
  });

  test ('create character class with health property', ()=> {
    expect(hero.health).toEqual(100);
  });
  
  test('character class should have attack property with value of 10', () => {
    expect(hero.attack).toEqual(10);
  })
});