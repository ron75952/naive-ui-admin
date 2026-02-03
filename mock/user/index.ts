import Mock from 'mockjs';
import { resultSuccess } from '../_util';
import { defineMock } from '@alova/mock';

const Random = Mock.Random;

const token = Random.string('upper', 32, 32);

const adminInfo = {
  userId: '1',
  username: 'admin',
  realName: 'Admin',
  avatar: Random.image(),
  desc: 'manager',
  password: Random.string('upper', 4, 16),
  token,
  permissions: [
    {
      label: 'Панель',
      value: 'dashboard_console',
    },
    {
      label: 'Мониторинг',
      value: 'dashboard_monitor',
    },
    {
      label: 'Рабочая',
      value: 'dashboard_workplace',
    },
    {
      label: 'Список',
      value: 'basic_list',
    },
    {
      label: 'Удалить список',
      value: 'basic_list_delete',
    },
  ],
};

export default defineMock({
  '[POST]/api/login': () => resultSuccess({ token }),
  '/api/admin_info': () => resultSuccess(adminInfo),
});
