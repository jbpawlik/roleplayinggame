import Character from '../src/js/character.js'

describe ('Character', () => {

  test ('create character class with properties', ()=> {
    let hero = new Character();
    expect(hero.health).toEqual(100);
  })
})