<template>
  <n-grid cols="2 s:2 m:2 l:3 xl:3 2xl:3" responsive="screen">
    <n-grid-item>
      <n-form :label-width="80" :model="formValue" :rules="rules" ref="formRef">
        <n-form-item label="Название сайта" path="name">
          <n-input v-model:value="formValue.name" placeholder="Введите название сайта" />
        </n-form-item>

        <n-form-item label="ICP код" path="icpCode">
          <n-input placeholder="Введите ICP код" v-model:value="formValue.icpCode" />
        </n-form-item>

        <n-form-item label="Телефон" path="mobile">
          <n-input placeholder="Введите телефон" v-model:value="formValue.mobile" />
        </n-form-item>

        <n-form-item label="Адрес" path="address">
          <n-input v-model:value="formValue.address" type="textarea" placeholder="Введите адрес" />
        </n-form-item>

        <n-form-item label="Капча входа" path="loginCode">
          <n-radio-group v-model:value="formValue.loginCode" name="loginCode">
            <n-space>
              <n-radio :value="1">Вкл</n-radio>
              <n-radio :value="0">Выкл</n-radio>
            </n-space>
          </n-radio-group>
        </n-form-item>

        <n-form-item label="Доступ к сайту" path="systemOpen">
          <n-switch
            size="large"
            v-model:value="formValue.systemOpen"
            @update:value="systemOpenChange"
          />
        </n-form-item>

        <n-form-item label="Текст при закрытии" path="closeText">
          <n-input
            v-model:value="formValue.closeText"
            type="textarea"
            placeholder="Введите текст"
          />
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
  import { useDialog, useMessage } from 'naive-ui';

  const rules = {
    name: {
      required: true,
      message: 'Введите название сайта',
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
  const dialog = useDialog();

  const formValue = ref({
    name: '',
    mobile: '',
    icpCode: '',
    address: '',
    loginCode: 0,
    closeText:
      'Сайт на обслуживании. Временно недоступен.',
    systemOpen: true,
  });

  function systemOpenChange(value) {
    if (!value) {
      dialog.warning({
        title: 'Внимание',
        content: 'Закрыть доступ? Изменение вступит сразу.',
        positiveText: 'Ок',
        negativeText: 'Отмена',
        onPositiveClick: () => {
          message.success('Готово');
        },
        onNegativeClick: () => {
          formValue.value.systemOpen = true;
        },
      });
    }
  }

  function formSubmit() {
    formRef.value.validate((errors) => {
      if (!errors) {
        message.success('Проверка OK');
      } else {
        message.error('Ошибка проверки: заполните все');
      }
    });
  }

  function resetForm() {
    formRef.value.restoreValidation();
  }
</script>
