import { h } from 'vue';
import { NAvatar, NTag } from 'naive-ui';
import { BasicColumn } from '@/components/Table';
export interface ListData {
  id: number;
  name: string;
  sex: string;
  avatar: string;
  email: string;
  city: string;
  status: string;
  type: string;
  createDate: string;
}

const sexMap = {
  male: 'М',
  female: 'Ж',
  unknown: '?',
};

const statusMap = {
  close: 'Отменено',
  refuse: 'Отклонено',
  pass: 'Принято',
};

export const columns: BasicColumn<ListData>[] = [
  {
    title: 'id',
    key: 'id',
  },
  {
    title: 'Название',
    key: 'name',
  },
  {
    title: 'Аватар',
    key: 'avatar',
    render(record) {
      return h(NAvatar, {
        size: 50,
        src: record.avatar,
      });
    },
  },
  {
    title: 'Пол',
    key: 'sex',
    render(record) {
      return h(
        NTag,
        {
          type: record.sex === 'male' ? 'info' : 'error',
        },
        {
          default: () => sexMap[record.sex],
        }
      );
    },
  },
  {
    title: 'Email',
    key: 'email',
    width: 220,
  },
  {
    title: 'Город',
    key: 'city',
  },
  {
    title: 'Статус',
    key: 'status',
    render(record) {
      return h(
        NTag,
        {
          type:
            record.status === 'close'
              ? 'default'
              : record.status === 'refuse'
              ? 'error'
              : 'success',
        },
        {
          default: () => statusMap[record.status],
        }
      );
    },
  },
  {
    title: 'Создано',
    key: 'createDate',
  },
];
