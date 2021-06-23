export class Attributes {
  constructor(health, attack, defense) {
    this.health = 100
    this.attack = 10
    this.defense = 10
  }
}


export class Character extends Attributes {
  constructor(health, attack, defense) {
    super(health, attack, defense)
    this.name = name;
    this.turn = "hero";
  }

  equipItems(Items) {
    this.items = Items
  }

  changeAttributes(type) {
    this.type = type
    if (this.type === 'hero') {
      this.defense +=20;
    } else if (this.type === 'villain') {
      this.attack += 20;
    }
  }

  whosTurn() {
    if (this.turn === 'hero') {
      this.turn = 'villain';
    } else {
      this.turn = 'hero';
    };
  }

  dealDamage(character) {
    let random = Math.floor(Math.random()*(10)+1)
    let damage = this.attack + random
    if (this.type === 'hero') {
      character.health -= damage
    } if (this.type === 'villain') {
      character.health -= damage
    } 
  }
}






