import ErrorRepository from '../errorreposirory';

test('test ErrorRepository', () => {
  const testError = new ErrorRepository();
  const result = testError.translate(2);
  expect(result).toEqual('Ошибка 2');
});

test('test ErrorRepository Unknown error', () => {
  const testError = new ErrorRepository();
  const result = testError.translate(5);
  expect(result).toEqual('Unknown error');
});
