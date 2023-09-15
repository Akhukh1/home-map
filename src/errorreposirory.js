export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Ошибка 1'],
      [2, 'Ошибка 2'],
      [3, 'Ошибка 3'],
    ]);
  }

  translate(code) {
    let errorString = this.errors.get(code);
    if (!errorString) {
      errorString = 'Unknown error';
    }
    return errorString;
  }
}
