<template>
  <basicModal @register="modalRegister" ref="modalRef" @on-ok="okModal">
    <div class="pt-8">
      <BasicForm @register="registerForm" />
    </div>
  </basicModal>
</template>

<script lang="ts" setup>
  import { nextTick } from 'vue';
  import { FormSchema, useForm } from '@/components/Form';
  import { basicModal, useModal } from '@/components/Modal';

  const schemas: FormSchema[] = [
    {
      field: 'name',
      component: 'NInput',
      label: 'Роль',
      componentProps: {
        placeholder: 'Введите роль',
      },
      rules: [{ required: true, message: 'Введите роль', trigger: ['blur'] }],
    },
    {
      field: 'explain',
      component: 'NInput',
      label: 'Описание роли',
      componentProps: {
        type: 'textarea',
        placeholder: 'Введите описание',
      },
    },
    {
      field: 'isDefault',
      component: 'NSwitch',
      label: 'Роль по умолчанию',
      componentProps: {},
    },
  ];

  const [registerForm, { submit, setFieldsValue }] = useForm({
    gridProps: { cols: 1 },
    collapsedRows: 3,
    labelWidth: 80,
    layout: 'horizontal',
    submitButtonText: 'Сохранить',
    showActionButtonGroup: false,
    schemas,
  });

  const [modalRegister, { openModal, closeModal, setSubLoading }] = useModal({
    title: 'Редактировать роль',
    subBtuText: 'Сохранить',
  });

  function showModal(record: any) {
    openModal();
    nextTick(() => {
      record && setFieldsValue({ ...record });
    });
  }

  async function okModal() {
    const formRes = await submit();
    if (formRes) {
      closeModal();
      console.log('formRes', formRes);
    } else {
      setSubLoading(false);
    }
  }

  defineExpose({
    showModal,
  });
</script>
