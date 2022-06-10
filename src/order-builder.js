const BuilderAbstract = require('./builder-abstract');


/* собирает массив для сортировки из распарсенного через qs объекта */
class OrderBuilder extends BuilderAbstract {
  getQuery() {
    const { request } = this;
    const query = [];

    Object.keys(request).forEach((key) => {
      /* создаём массив из ключа */
      const value = key.split('.');
      /* в массив добавляется значение */
      value.push(request[key]);
      query.push(value);
    });

    return query;
  }
}

module.exports = OrderBuilder;
