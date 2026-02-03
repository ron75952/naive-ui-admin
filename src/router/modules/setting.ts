import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { SettingOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils/index';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/setting',
    name: 'Setting',
    redirect: '/setting/account',
    component: Layout,
    meta: {
      title: 'Настройки',
      icon: renderIcon(SettingOutlined),
      sort: 5,
    },
    children: [
      {
        path: 'account',
        name: 'setting-account',
        meta: {
          title: 'Профиль',
        },
        component: () => import('@/views/setting/account/account.vue'),
      },
      {
        path: 'system',
        name: 'setting-system',
        meta: {
          title: 'Системные настройки',
        },
        component: () => import('@/views/setting/system/system.vue'),
      },
    ],
  },
];

export default routes;
