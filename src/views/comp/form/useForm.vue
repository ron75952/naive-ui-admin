<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="Базовая форма">
        useForm для сбора данных.
      </n-card>
    </div>
    <n-card :bordered="false" class="mt-4 proCard">
      <div class="BasicForm">
        <BasicForm @register="register" @submit="handleSubmit" @reset="handleReset">
          <template #statusSlot="{ model, field }">
            <n-input v-model:value="model[field]" />
          </template>
        </BasicForm>
      </div>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import { BasicForm, FormSchema, useForm } from '@/components/Form/index';
  import { useMessage } from 'naive-ui';

  const schemas: FormSchema[] = [
    {
      field: 'name',
      component: 'NInput',
      label: 'Имя',
      labelMessage: 'Подсказка',
      giProps: {
        span: 1,
      },
      componentProps: {
        placeholder: 'Введите имя',
        onInput: (e: any) => {
          console.log(e);
        },
      },
      rules: [{ required: true, message: 'Введите имя', trigger: ['blur'] }],
    },
    {
      field: 'mobile',
      component: 'NInputNumber',
      label: 'Телефон',
      componentProps: {
        placeholder: 'Введите телефон',
        showButton: false,
        onInput: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'type',
      component: 'NSelect',
      label: 'Тип',
      giProps: {
        //span: 24,
      },
      componentProps: {
        placeholder: 'Выберите тип',
        options: [
          {
            label: 'Комфорт',
            value: 1,
          },
          {
            label: 'Эконом',
            value: 2,
          },
        ],
        onUpdateValue: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'makeDate',
      component: 'NDatePicker',
      label: 'Дата',
      giProps: {
        //span: 24,
      },
      defaultValue: 1183135260000,
      componentProps: {
        type: 'date',
        clearable: true,
        onUpdateValue: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'makeTime',
      component: 'NTimePicker',
      label: 'Время',
      giProps: {
        //span: 24,
      },
      componentProps: {
        clearable: true,
        onUpdateValue: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'makeProject',
      component: 'NCheckbox',
      label: 'Услуга',
      giProps: {
        //span: 24,
      },
      componentProps: {
        placeholder: 'Выберите услугу',
        options: [
          {
            label: 'Имплант',
            value: 1,
          },
          {
            label: 'Пломба',
            value: 2,
          },
          {
            label: 'Канал',
            value: 3,
          },
        ],
        onUpdateChecked: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'makeSource',
      component: 'NRadioGroup',
      label: 'Источник',
      giProps: {
        //span: 24,
      },
      componentProps: {
        options: [
          {
            label: 'Онлайн',
            value: 1,
          },
          {
            label: 'Магазин',
            value: 2,
          },
        ],
        onUpdateChecked: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'status',
      label: 'Статус',
      giProps: {
        //span: 24,
      },
      //插槽
      slot: 'statusSlot',
    },
  ];

  const message = useMessage();

  const [register, {}] = useForm({
    gridProps: { cols: 1 },
    collapsedRows: 3,
    labelWidth: 120,
    layout: 'horizontal',
    submitButtonText: 'Отправить',
    schemas,
  });

  function handleSubmit(values: Recordable) {
    if (!values) {
      return message.error('Заполните все поля');
    }
    console.log(values);
    message.success(JSON.stringify(values));
  }

  function handleReset(values: Recordable) {
    console.log(values);
  }
</script>

<style lang="less" scoped>
  .BasicForm {
    width: 550px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 20px;
  }
</style>
