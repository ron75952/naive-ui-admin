<template>
  <n-card :bordered="false" class="proCard">
    <BasicTable
      title="Таблица"
      titleTooltip="Подсказка"
      :columns="columns"
      :request="loadDataTable"
      :row-key="(row) => row.id"
      ref="actionRef"
      :actionColumn="actionColumn"
      :scroll-x="1360"
      @update:checked-row-keys="onCheckedRow"
    />
  </n-card>
</template>

<script lang="ts" setup>
  import { reactive, ref, h } from 'vue';
  import { BasicTable, TableAction } from '@/components/Table';
  import { getTableList } from '@/api/table/list';
  import { columns } from './basicColumns';
  import { useDialog, useMessage } from 'naive-ui';
  import { DeleteOutlined, EditOutlined } from '@vicons/antd';

  const message = useMessage();
  const dialog = useDialog();
  const actionRef = ref();

  const params = reactive({
    pageSize: 5,
    name: 'NaiveAdmin',
  });

  const actionColumn = reactive({
    width: 180,
    title: 'Действия',
    key: 'action',
    fixed: 'right',
    align: 'center',
    render(record) {
      return h(TableAction as any, {
        style: 'button',
        actions: createActions(record),
      });
    },
  });

  function createActions(record) {
    return [
      {
        label: 'Удалить',
        // 配置 color 会覆盖 type
        icon: DeleteOutlined,
        onClick: handleDelete.bind(null, record),
        // 根据权限控制是否显示: 有权限，会显示，支持多个
        auth: ['basic_list'],
      },
      {
        label: 'Правка',
        icon: EditOutlined,
        onClick: handleEdit.bind(null, record),
        auth: ['basic_list'],
      },
    ];
  }

  const loadDataTable = async (res) => {
    return await getTableList({ ...params, ...res });
  };

  function onCheckedRow(rowKeys) {
    console.log(rowKeys);
  }

  function handleDelete(record) {
    console.log(record);
    dialog.info({
      title: 'Внимание',
      content: `Удалить ${record.name}?`,
      positiveText: 'Ок',
      negativeText: 'Отмена',
      onPositiveClick: () => {
        message.success('Удалено');
      },
      onNegativeClick: () => {},
    });
  }

  function handleEdit(record) {
    console.log(record);
    message.success('Открыто редактирование');
  }
</script>

<style lang="less" scoped></style>
