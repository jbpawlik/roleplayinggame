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

  dealDamage(character) {
    let damage = this.attack
    if (this.type === 'hero') {
      character.health -= damage
    } if (this.type === 'villain') {
      hero.health -= damage
    } 
  }
}
// Math.floor(Math.random()*(6)+1)





