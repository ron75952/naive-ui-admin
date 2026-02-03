<template>
  <n-grid cols="2 s:2 m:2 l:3 xl:3 2xl:3" responsive="screen">
    <n-grid-item>
      <n-form :label-width="120" :model="formValue" :rules="rules" ref="formRef">
        <n-form-item label="Email отправителя" path="originator">
          <n-input v-model:value="formValue.originator" placeholder="Введите email отправителя" />
        </n-form-item>

        <n-form-item label="Адрес SMTP">
          <n-input placeholder="Введите адрес SMTP" />
        </n-form-item>

        <n-form-item label="Порт SMTP">
          <n-input placeholder="Введите порт SMTP" />
        </n-form-item>

        <n-form-item label="Логин SMTP">
          <n-input placeholder="Введите логин SMTP" />
        </n-form-item>

        <n-form-item label="Пароль SMTP">
          <n-input type="password" placeholder="Введите пароль SMTP" />
        </n-form-item>

        <n-form-item label="Тест письма">
          <n-button>Тест</n-button>
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
  import { reactive, ref, toRefs } from 'vue';
  import { useMessage } from 'naive-ui';

  const rules = {
    originator: {
      required: true,
      message: 'Введите email отправителя',
      trigger: 'blur',
    },
  };

  const formRef: any = ref(null);
  const message = useMessage();

  const formValue = ref({
    originator: '',
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
