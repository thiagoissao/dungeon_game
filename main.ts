import { Monsters, Venturers } from './interfaces';

const config = (): { monsters: Monsters, venturers: Venturers; } => {
  const monsters: Monsters = {
    dragon: {
      life: 12,
      magicDamageReduction: 0.5,
      physicalDamageReduction: 0,
      poisonDamageReduction: 0
    },
    orc: {
      life: 6,
      magicDamageReduction: 0,
      physicalDamageReduction: 0.5,
      poisonDamageReduction: 0
    },
    walker: {
      life: 8,
      magicDamageReduction: 0,
      physicalDamageReduction: 0,
      poisonDamageReduction: 0.5
    }
  };

  const venturers: Venturers = {
    magician: {
      monstersTargetQuantity: 4,
      magicDamage: 4,
      physicalDamage: 0,
      poisonDamage: 0
    },
    druid: {
      monstersTargetQuantity: 3,
      poisonDamage: 5,
      magicDamage: 0,
      physicalDamage: 0
    },
    warrior: {
      monstersTargetQuantity: 2,
      physicalDamage: 6,
      magicDamage: 0,
      poisonDamage: 0
    }
  };

  return { monsters, venturers };
};

const main = () => {
  const { monsters, venturers } = config();
  console.log(monsters);
};

main();
