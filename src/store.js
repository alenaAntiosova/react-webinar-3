/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = {...initState, cart: []};
    this.listeners = [];
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @return {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter((item) => item !== listener);
    };
  }

  /**
   * Выбор состояния
   * @return {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) {
      listener();
    }
  }

  addToCart(item) {
    const updatedCart = [...this.state.cart, item];
    this.setState({...this.state, cart: updatedCart});
  }

  getCart() {
    return this.state.cart || [];
  }

  getTotalPrice() {
    return this.state.cart.reduce((total, item) => total + item.price, 0);
  }


  /**
   * Удаление записи по коду
   * @param code
   */
  getCartItemRemove(code) {
    this.setState({
      ...this.state,
      // Новый список, в котором не будет удаляемой записи
      cart: this.state.cart.filter((item) => item.code !== code)
    });
  }

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map((item) => {
        if (item.code === code) {
          // Смена выделения и подсчёт
          return {
            ...item,
            selected: !item.selected,
            count: item.selected ? item.count : item.count + 1 || 1,
          };
        }
        // Сброс выделения если выделена
        return item.selected ? {...item, selected: false} : item;
      })
    });
  }
}

export default Store;
