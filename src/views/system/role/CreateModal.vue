<template>
  <basicModal @register="modalRegister" ref="modalRef" @on-ok="okModal">
    <div class="pt-8">
      <BasicForm @register="registerForm" />
    </div>
  </basicModal>
</template>

<script lang="ts" setup>
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

  const [registerForm, { submit }] = useForm({
    gridProps: { cols: 1 },
    collapsedRows: 3,
    labelWidth: 80,
    layout: 'horizontal',
    submitButtonText: 'Сохранить',
    showActionButtonGroup: false,
    schemas,
  });

  const [modalRegister, { openModal, closeModal, setSubLoading }] = useModal({
    title: 'Новая роль',
    subBtuText: 'Сохранить',
  });

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
    openModal,
  });
</script>
