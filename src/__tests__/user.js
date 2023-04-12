import loadUser from '../loadUser';
import httpGet from '../http';

jest.mock('../http');// этот файл будет заглушка
beforeEach(() => { // стандартная функция, которая есть в каждом тесте
  // и она выполняется каждый раз когда у нас запускается тот или иной тест
  jest.resetAllMocks(); // сбрасываем все моки
});
test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({})); // httpget должен вернуть в
  // строковом эквиваленте объект
  loadUser(1);
  expect(httpGet).toBeCalledWith('http://server:8080/users/1'); // убеждаемся, что функция hpptget была
  // вызвана с параметром users/1  (1 подставляется в id)
});
