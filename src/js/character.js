export class Attributes {
  constructor() {
    this.health = 100;
    this.attack = 20;
    this.defense = 20;
  }
}

export class Character extends Attributes {
  constructor(health, attack, defense) {
    super(health, attack, defense);
    this.name = name;
    this.turn = '';
    this.imDead = '';
  }

  equipItems(Items) {
    this.items = Items;
    if (this.items === 'warrior') {
      this.attack += 5;
      this.defense += 5;
      this.health += 10;
    } else if (this.items === 'rogue') {
      this.defense += 10;
      this.attack -= 5;
      this.health -= 5;
    } else {
      this.attack += 20;
      this.defense -= 10;
      this.health -= 10;
    }
  }

  changeAttributes(type) {
    this.type = type;
    if (this.type === 'hero') {
      this.defense +=20;
      this.health +=20;
    } else if (this.type === 'villain') {
      this.attack += 30;
      this.health += 100;
    }
  }

  whosTurn() {
    if (this.turn === 'hero') {
      this.turn = 'villain';
    } else {
      this.turn = 'hero';
    }
  }

  dealDamage(character) {
    let random = Math.floor(Math.random()*(10)+1);
    let damage = this.attack + random;
    if (this.type === 'hero') {
      character.health -= (damage - character.defense);
    } else if (this.type === 'villain') {
      character.health -= (damage - character.defense);
    }
  }

  takePotion() {
    if (this.items === 'warrior') {
      this.health += 10;
    } else if (this.items === 'rogue') {
      this.defense += 10;
    } else if (this.items === 'mage') {
      this.attack += 10;
    }
    delete this.items.potion;
  }

  amIDead(character) {
    if (this.type === 'hero' && character.health <= 0) {
      character.health = 0;
      this.imDead = true;
    } else if (this.type === 'villain' && character.health <= 0) {
      character.health = 0;
      this.imDead = true;
    }
  }
}






