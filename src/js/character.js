export class Attributes {
  constructor(health, attack, defense) {
    this.health = 100
    this.attack = 10
    this.defense = 10
  }
}

 
export class Character extends Attributes {
  constructor(health, attack, defense, name) {
    super(health, attack, defense)
    this.name = name;
    this.attack += 20;
  }
}









