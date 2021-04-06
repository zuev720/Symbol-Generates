export default class Team {
  constructor() {
    this.members = new Set();
  }

  // Метод должен добавлять выбранного персонажа в команду (объект класса Character).

  add(person) {
    for (const character of this.members) {
      if (character.name.toLowerCase() === person.name.toLowerCase()
        && character.type === person.type
        && character.level === person.level) {
        throw new Error('Этот персонаж уже находится в вашей команде!');
      }
    }
    this.members.add(person);
  }

  // Метод должен иметь возможность добавлять произвольное количество персонажей в команду

  addAll(...persons) {
    const arr = [];
    persons.reduce((result, person) => {
      result.forEach((character) => {
        arr.push(character.name);
      });
      if (!(arr.includes(person.name))
        && !(arr.includes(person.type))
        && !(arr.includes(person.level))) {
        result.add(person);
      }
      return result;
    }, this.members);
  }

  // Метод должен производить конвертацию this.members в массив

  toArray() {
    return [...this.members];
  }

  * [Symbol.iterator]() {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.toArray().length; i++) {
      yield this.toArray()[i];
    }
  }
}
