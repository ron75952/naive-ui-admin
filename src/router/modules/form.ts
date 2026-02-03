import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { ProfileOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils/index';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/form',
    name: 'Form',
    redirect: '/form/basic-form',
    component: Layout,
    meta: {
      title: 'Формы',
      icon: renderIcon(ProfileOutlined),
      sort: 3,
    },
    children: [
      {
        path: 'basic-form',
        name: 'form-basic-form',
        meta: {
          title: 'Базовая форма',
        },
        component: () => import('@/views/form/basicForm/index.vue'),
      },
      {
        path: 'step-form',
        name: 'form-step-form',
        meta: {
          title: 'Пошаговая форма',
        },
        component: () => import('@/views/form/stepForm/stepForm.vue'),
      },
      {
        path: 'detail',
        name: 'form-detail',
        meta: {
          title: 'Детали формы',
        },
        component: () => import('@/views/form/detail/index.vue'),
      },
    ],
  },
];

export default routes;
