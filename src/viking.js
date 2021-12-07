// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }

}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) return `${this.name} has received ${damage} points of damage`;
    else return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) return `A Saxon has received ${damage} points of damage`;
    else return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {

    const indexSax = Math.round(Math.random() * this.saxonArmy.length);
    const indexVik = Math.round(Math.random() * this.vikingArmy.length);
    const randoSax = this.saxonArmy[indexSax];
    const randoVik = this.vikingArmy[indexVik];
    const result = randoSax.receiveDamage(randoVik.strength);
    
    if (randoSax.health <= 0) {
      this.saxonArmy.splice(indexSax, 1);
    }

    return result;
  }

    saxonAttack(){

    }

    showStatus(){

    }
  }



  // The following is required to make unit tests work.
  /* Environment setup. Do not modify the below code. */
  if(typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
