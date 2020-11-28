export interface Monster {
  type: 'DRAGON' | 'ORC' | 'WALKER',
  life: number,
  magicDamageReduction: number,
  poisonDamageReduction: number,
  physicalDamageReduction: number,
}

export interface Venturer {
  type: 'DRUID' | 'MAGICIAN' | 'WARRIOR',
  monstersTargetQuantity: number,
  magicDamage: number,
  poisonDamage: number,
  physicalDamage: number;
}

export interface ConfigTeam {
  venturers: Array<Venturer>,
}

export interface ConfigGame {
  nivel: number,
  monsterQuantity: number,
  monsterQueue: Array<Monster>;
}
