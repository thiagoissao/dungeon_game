import {
  Monster,
  Venturer,
  ConfigTeam,
  ConfigGame,
} from './interfaces';

const dragon: Monster = {
  type: 'DRAGON',
  life: 12,
  magicDamageReduction: 0.5,
  physicalDamageReduction: 0,
  poisonDamageReduction: 0
};

const orc: Monster = {
  type: 'ORC',
  life: 6,
  magicDamageReduction: 0,
  physicalDamageReduction: 0.5,
  poisonDamageReduction: 0
};

const walker: Monster = {
  type: 'WALKER',
  life: 8,
  magicDamageReduction: 0,
  physicalDamageReduction: 0,
  poisonDamageReduction: 0.5
};


const magician: Venturer = {
  type: 'MAGICIAN',
  monstersTargetQuantity: 4,
  magicDamage: 4,
  physicalDamage: 0,
  poisonDamage: 0
};

const druid: Venturer = {
  type: 'DRUID',
  monstersTargetQuantity: 3,
  poisonDamage: 5,
  magicDamage: 0,
  physicalDamage: 0
};

const warrior: Venturer = {
  type: 'WARRIOR',
  monstersTargetQuantity: 2,
  physicalDamage: 6,
  magicDamage: 0,
  poisonDamage: 0
};

const buildMonsters = (level): Array<Monster> =>
  [...Array(level + 3)].map(() => {
    const randomValue = Math.floor(Math.random() * 3);
    return randomValue === 0 ? dragon : randomValue === 1 ? orc : walker;
  });

const main = () => {
  const maxVenturerQuantity = 5;
  const druidsQuantity = 5;
  const warriorsQuantity = 5;
  const magicianQuantity = 5;

  const levelGame = maxVenturerQuantity;
  for (let currentLevel = 1; currentLevel <= levelGame; currentLevel++) {

    const monsters = buildMonsters(currentLevel);
    console.log(monsters.length);
  }

};

main();
