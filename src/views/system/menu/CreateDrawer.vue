<template>
  <n-drawer v-model:show="state.isDrawer" :width="width" :placement="state.placement">
    <n-drawer-content :title="title" closable>
      <n-form
        :model="formParams"
        :rules="rules"
        ref="formRef"
        label-placement="left"
        :label-width="100"
      >
        <n-form-item label="Тип" path="type">
          <span>{{ formParams.type === 1 ? 'Меню сайдбара' : '' }}</span>
        </n-form-item>
        <n-form-item label="Заголовок" path="label">
          <n-input placeholder="Введите заголовок" v-model:value="formParams.label" />
        </n-form-item>
        <n-form-item label="Подзаголовок" path="subtitle">
          <n-input placeholder="Введите подзаголовок" v-model:value="formParams.subtitle" />
        </n-form-item>
        <n-form-item label="Путь" path="path">
          <n-input placeholder="Введите путь" v-model:value="formParams.path" />
        </n-form-item>
        <n-form-item label="Открытие" path="openType">
          <n-radio-group v-model:value="formParams.openType" name="openType">
            <n-space>
              <n-radio :value="1">Текущее окно</n-radio>
              <n-radio :value="2">Новое окно</n-radio>
            </n-space>
          </n-radio-group>
        </n-form-item>
        <n-form-item label="Права меню" path="auth">
          <n-input placeholder="Введите права, через запятую" v-model:value="formParams.auth" />
        </n-form-item>
        <n-form-item label="Скрыть в сайдбаре" path="hidden">
          <n-switch v-model:value="formParams.hidden" />
        </n-form-item>
      </n-form>

      <template #footer>
        <n-space>
          <n-button type="primary" :loading="state.subLoading" @click="formSubmit">Отправить</n-button>
          <n-button @click="handleReset">Сброс</n-button>
        </n-space>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts" setup>
  import { reactive, ref, toRefs } from 'vue';
  import { useMessage } from 'naive-ui';

  const rules = {
    label: {
      required: true,
      message: 'Введите заголовок',
      trigger: 'blur',
    },
    path: {
      required: true,
      message: 'Введите путь',
      trigger: 'blur',
    },
  };

  defineProps({
    title: {
      type: String,
      default: 'Добавить верхнее меню',
    },
    width: {
      type: Number,
      default: 450,
    },
  });

  const message = useMessage();
  const formRef: any = ref(null);
  const defaultValueRef = () => ({
    label: '',
    type: 1,
    subtitle: '',
    openType: 1,
    auth: '',
    path: '',
    hidden: false,
  });
  const formParams = ref(defaultValueRef());
  const state = reactive({
    isDrawer: false,
    subLoading: false,
    placement: 'right' as const,
  });

  function openDrawer() {
    state.isDrawer = true;
  }

  function closeDrawer() {
    state.isDrawer = false;
  }

  function formSubmit() {
    formRef.value.validate((errors) => {
      if (!errors) {
        message.success('Добавлено');
        handleReset();
        closeDrawer();
      } else {
        message.error('Заполните все поля');
      }
    });
  }

  function handleReset() {
    formRef.value.restoreValidation();
    formParams.value = Object.assign(formParams.value, defaultValueRef());
  }
</script>
