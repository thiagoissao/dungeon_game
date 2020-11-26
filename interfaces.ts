interface Monster {
  life: number,
  magicDamageReduction: number,
  poisonDamageReduction: number,
  physicalDamageReduction: number,
}

export interface Monsters {
  dragon: Monster,
  orc: Monster,
  walker: Monster;
}

interface Venturer {
  monstersTargetQuantity: number,
  magicDamage: number,
  poisonDamage: number,
  physicalDamage: number;
}

export interface Venturers {
  druid: Venturer,
  magician: Venturer,
  warrior: Venturer;
}
