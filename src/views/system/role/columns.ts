import { h } from 'vue';
import { NTag } from 'naive-ui';

export const columns = [
  {
    title: 'id',
    key: 'id',
  },
  {
    title: 'Роль',
    key: 'name',
  },
  {
    title: 'Описание',
    key: 'explain',
  },
  {
    title: 'Роль по умолчанию',
    key: 'isDefault',
    render(row) {
      return h(
        NTag,
        {
          type: row.isDefault ? 'success' : 'error',
        },
        {
          default: () => (row.isDefault ? 'Да' : 'Нет'),
        }
      );
    },
  },
  {
    title: 'Создано',
    key: 'create_date',
  },
];
