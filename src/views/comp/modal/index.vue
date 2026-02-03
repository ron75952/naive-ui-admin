<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="Модальные окна">
        Модальное окно для сбора и показа данных. Modal использует пресет Dialog и поддерживает
        перетаскивание.
        <br />
        Ниже пример useModal и ref: modalRef.value.closeModal()
      </n-card>
    </div>
    <n-card :bordered="false" class="mt-4 proCard">
      <n-alert title="Modal + Form" type="info">
        useModal для открытия и работы с Form внутри.
      </n-alert>
      <n-divider />
      <n-space>
        <n-button type="primary" @click="showModal">Открыть пример</n-button>
      </n-space>
      <n-divider />
      <n-alert title="Лёгкий режим" type="info">
        useModal с кастомной настройкой. Подробности в документации.
      </n-alert>
      <n-divider />
      <n-space>
        <n-button type="primary" @click="showLightModal">Лёгкое подтверждение</n-button>
      </n-space>
      <n-divider />
      <n-alert title="Внимание" type="info">
        Метод setProps меняет параметры внутри компонента (например, заголовок).
      </n-alert>
    </n-card>

    <basicModal @register="modalRegister" ref="modalRef" class="basicModal" @on-ok="okModal">
      <template #default>
        <BasicForm @register="register" @reset="handleReset" class="basicForm">
          <template #statusSlot="{ model, field }">
            <n-input v-model:value="model[field]" />
          </template>
        </BasicForm>
      </template>
    </basicModal>

    <basicModal
      @register="lightModalRegister"
      class="basicModalLight"
      ref="modalRef"
      @on-ok="lightOkModal"
    >
      <template #default>
        <p class="text-gray-500" style="padding-left: 35px">Текст диалога</p>
      </template>
    </basicModal>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { useMessage } from 'naive-ui';
  import { basicModal, useModal } from '@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '@/components/Form/index';

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

  const modalRef: any = ref(null);
  const message = useMessage();

  const [modalRegister, { openModal, closeModal, setSubLoading }] = useModal({
    title: 'Новая запись',
  });

  const [
    lightModalRegister,
    { openModal: lightOpenModal, closeModal: lightCloseModal, setSubLoading: lightSetSubLoading },
  ] = useModal({
    title: 'Подтверждение',
    showIcon: true,
    type: 'warning',
    closable: false,
    maskClosable: true,
  });

  const [register, { submit }] = useForm({
    gridProps: { cols: 1 },
    collapsedRows: 3,
    labelWidth: 120,
    layout: 'horizontal',
    submitButtonText: 'Отправить',
    showActionButtonGroup: false,
    schemas,
  });

  async function okModal() {
    const formRes = await submit();
    if (formRes) {
      closeModal();
      console.log('formRes', formRes);
      message.success('Отправлено');
    } else {
      message.error('Ошибка проверки: заполните все');
      setSubLoading(false);
    }
  }

  function lightOkModal() {
    lightCloseModal();
    lightSetSubLoading(false);
  }

  function showLightModal() {
    lightOpenModal();
  }

  function showModal() {
    openModal();
  }

  function handleReset(values: Recordable) {
    console.log(values);
  }
</script>

<style lang="less">
  .basicForm {
    padding-top: 20px;
  }

  .n-dialog.basicModal {
    width: 640px;
  }

  .n-dialog.basicModalLight {
    width: 416px;
    padding-top: 26px;
  }
</style>
