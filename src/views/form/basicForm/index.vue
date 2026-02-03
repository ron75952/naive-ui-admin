<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="Базовая форма">
        Форма для сбора и проверки данных. Подходит для небольших наборов полей.
      </n-card>
    </div>
    <n-card :bordered="false" class="mt-4 proCard">
      <n-grid cols="1 s:1 m:3 l:3 xl:3 2xl:3" responsive="screen">
        <n-grid-item offset="0 s:0 m:1 l:1 xl:1 2xl:1">
          <n-form
            :label-width="90"
            :model="formValue"
            :rules="rules"
            label-placement="left"
            ref="formRef"
            class="py-8"
          >
            <n-form-item label="Имя" path="name">
              <n-input v-model:value="formValue.name" placeholder="Введите имя" />
            </n-form-item>
            <n-form-item label="Телефон" path="mobile">
              <n-input placeholder="Телефон" v-model:value="formValue.mobile" />
            </n-form-item>
            <n-form-item label="Дата" path="datetime">
              <n-date-picker type="datetime" v-model:value="formValue.datetime" />
            </n-form-item>
            <n-form-item label="Врач" path="doctor">
              <n-select
                placeholder="Выберите врача"
                :options="doctorList"
                v-model:value="formValue.doctor"
              />
            </n-form-item>
            <n-form-item label="Услуги" path="matter">
              <n-select
                placeholder="Выберите услуги"
                :options="matterList"
                v-model:value="formValue.matter"
                multiple
              />
            </n-form-item>
            <n-form-item label="Пол" path="sex">
              <n-radio-group v-model:value="formValue.sex" name="sex">
                <n-space>
                  <n-radio :value="1">М</n-radio>
                  <n-radio :value="2">Ж</n-radio>
                </n-space>
              </n-radio-group>
            </n-form-item>
            <n-form-item label="Комментарий" path="remark">
              <n-input
                v-model:value="formValue.remark"
                type="textarea"
                placeholder="Введите комментарий"
              />
            </n-form-item>
            <n-form-item label="Фото" path="img">
              <BasicUpload
                :action="`${uploadUrl}/v1.0/files`"
                :headers="uploadHeaders"
                :data="{ type: 0 }"
                name="files"
                :width="100"
                :height="100"
                @upload-change="uploadChange"
                v-model:value="uploadList"
                helpText="Файл до 20MB, максимум 10 файлов"
              />
            </n-form-item>
            <div style="margin-left: 80px">
              <n-space>
                <n-button type="primary" @click="formSubmit">Отправить</n-button>
                <n-button @click="resetForm">Сброс</n-button>
              </n-space>
            </div>
          </n-form>
        </n-grid-item>
      </n-grid>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref, unref, reactive } from 'vue';
  import { useMessage } from 'naive-ui';
  import { BasicUpload } from '@/components/Upload';
  import { useGlobSetting } from '@/hooks/setting';

  const globSetting = useGlobSetting();

  const matterList = [
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
  ];

  const doctorList = [
    {
      label: 'Доктор Ли',
      value: 1,
    },
    {
      label: 'Доктор Хуан',
      value: 2,
    },
    {
      label: 'Доктор Чжан',
      value: 3,
    },
  ];

  const rules = {
    name: {
      required: true,
      message: 'Введите имя',
      trigger: 'blur',
    },
    remark: {
      required: true,
      message: 'Введите комментарий',
      trigger: 'blur',
    },
    mobile: {
      required: true,
      message: 'Введите телефон',
      trigger: ['input'],
    },
    datetime: {
      required: true,
      type: 'number',
      message: 'Выберите дату',
      trigger: ['blur', 'change'],
    },
    doctor: {
      required: true,
      type: 'number',
      message: 'Выберите врача',
      trigger: 'change',
    },
  };

  const formRef: any = ref(null);
  const message = useMessage();
  const { uploadUrl } = globSetting;

  const defaultValueRef = () => ({
    name: '',
    mobile: '',
    remark: '',
    sex: 1,
    matter: null,
    doctor: null,
    datetime: [],
  });

  let formValue = reactive(defaultValueRef());
  const uploadList = ref([
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  ]);
  const uploadHeaders = reactive({
    platform: 'miniPrograms',
    timestamp: new Date().getTime(),
    token: 'Q6fFCuhc1vkKn5JNFWaCLf6gRAc5n0LQHd08dSnG4qo=',
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

  function resetForm() {
    formRef.value.restoreValidation();
    formValue = Object.assign(unref(formValue), defaultValueRef());
  }

  function uploadChange(list: string[]) {
    console.log(list);
  }
</script>
