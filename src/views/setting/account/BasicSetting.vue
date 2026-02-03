<template>
  <n-grid cols="2 s:2 m:2 l:3 xl:3 2xl:3" responsive="screen">
    <n-grid-item>
      <n-form :label-width="80" :model="formValue" :rules="rules" ref="formRef">
        <n-form-item label="Ник" path="name">
          <n-input v-model:value="formValue.name" placeholder="Введите ник" />
        </n-form-item>

        <n-form-item label="Email" path="email">
          <n-input placeholder="Введите email" v-model:value="formValue.email" />
        </n-form-item>

        <n-form-item label="Телефон" path="mobile">
          <n-input placeholder="Введите телефон" v-model:value="formValue.mobile" />
        </n-form-item>

        <n-form-item label="Адрес" path="address">
          <n-input v-model:value="formValue.address" type="textarea" placeholder="Введите адрес" />
        </n-form-item>

        <div>
          <n-space>
            <n-button type="primary" @click="formSubmit">Сохранить</n-button>
          </n-space>
        </div>
      </n-form>
    </n-grid-item>
  </n-grid>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { useMessage } from 'naive-ui';

  const rules = {
    name: {
      required: true,
      message: 'Введите ник',
      trigger: 'blur',
    },
    email: {
      required: true,
      message: 'Введите email',
      trigger: 'blur',
    },
    mobile: {
      required: true,
      message: 'Введите телефон',
      trigger: 'input',
    },
  };
  const formRef: any = ref(null);
  const message = useMessage();

  const formValue = reactive({
    name: '',
    mobile: '',
    email: '',
    address: '',
  });

  function formSubmit() {
    formRef.value.validate((errors) => {
      if (!errors) {
        message.success('Проверка OK');
      } else {
        message.error('Ошибка проверки: заполните все');
      }
    });
  }
</script>
