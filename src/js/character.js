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
    this.turn = '';
    this.imDead = '';
  }

  equipItems(Items) {
    this.items = Items
    if (this.items === 'warrior') {
      this.attack += 10;
      this.defense += 10;
      this.health += 20;
    } else if (this.items === 'rogue') {
      this.defense += 20;
      this.attack -= 5;
      this.health -= 10;
    } else {
      this.attack += 25;
      this.defense -= 10;
      this.health -= 20;
    }
  }

  changeAttributes(type) {
    this.type = type
    if (this.type === 'hero') {
      this.defense +=20;
      this.health +=20
    } else if (this.type === 'villain') {
      this.attack += 20;
      this.health -= 50;
    }
  }

  whosTurn() {
    if (this.type === 'hero') {
      this.turn = 'villain';
    } else {
      this.turn = 'hero';
    }
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

  takePotion() {
    if (this.items === 'warrior') {
      this.health += 10;
    } else if (this.items === 'rogue') {
      this.defense += 10;
    } else if (this.items === 'mage') {
      this.attack += 10;
    }
  }

  amIDead(character) {
    if (this.type === 'hero' && character.health <= 0) {
      this.imDead = true;
    } else if (this.type === 'villain' && character.health <= 0) {
      this.imDead = true;
    }
  }
}






