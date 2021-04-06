[![Build status](https://ci.appveyor.com/api/projects/status/601lot4fww8yu62m?svg=true)](https://ci.appveyor.com/project/zuev720/symbol-generates)



## Символы и генераторы

### Легенда

Реализовывать итераторы не так уж здорово, правда? Давайте посмотрим, как нам могут помочь генераторы при переборе.

### Описание

Используйте следующую заготовку для организации перебора класса `Team`:
```javascript
class Team {
  ...
  *[Symbol.iterator]() {
    // это генератор
    // и здесь есть доступ к this
    // остаётся лишь правильно написать yield
  }
}
```

---
