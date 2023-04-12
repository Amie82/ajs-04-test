import loadUser from '../src/js/user';
import { httpGet } from '../src/js/http';
jest.mock('../src/js/http'); // этот файл будет заглушка-мок
beforeEach(() => {  //стандартная функция, которая есть в каждом тесте и она выполняется каждый раз когда у нас запускается тот или иной тест
jest.resetAllMocks();  // сбрасываем все моки
});
test('should call loadUser once', () => {
httpGet.mockReturnValue(JSON.stringify({}));
loadUser(1);
expect(httpGet).toBeCalledWith('http://server:8080/users/1');
});
