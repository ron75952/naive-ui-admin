<template>
  <n-grid cols="2 s:2 m:2 l:3 xl:3 2xl:3" responsive="screen">
    <n-grid-item>
      <n-form :label-width="120" :model="formValue" :rules="rules" ref="formRef">
        <n-form-item label="Фото товара (L)">
          <n-space align="center">
            <span>Ширина:</span>
            <n-input
              v-model:value="formValue.bigWidth"
              style="width: 80px"
              placeholder="Ширина, px"
            />
            <span>Высота:</span>
            <n-input
              v-model:value="formValue.bigHeight"
              style="width: 80px"
              placeholder="Высота, px"
            />
          </n-space>
        </n-form-item>

        <n-form-item label="Фото товара (S)">
          <n-space align="center">
            <span>Ширина:</span>
            <n-input
              v-model:value="formValue.smallWidth"
              style="width: 80px"
              placeholder="Ширина, px"
            />
            <span>Высота:</span>
            <n-input
              v-model:value="formValue.smallHeight"
              style="width: 80px"
              placeholder="Высота, px"
            />
          </n-space>
        </n-form-item>

        <n-form-item label="Прозрачность водяного знака" path="watermarkClarity">
          <n-input-number
            v-model:value="formValue.watermarkClarity"
            :show-button="false"
            placeholder="Введите прозрачность"
          />
        </n-form-item>

        <n-form-item label="Водяной знак" path="watermarkClarity">
          <n-upload action="http://www.mocky.io/v2/5e4bafc63100007100d8b70f">
            <n-button>Загрузить</n-button>
          </n-upload>
        </n-form-item>

        <n-form-item label="Позиция вод. знака" path="watermarkPlace">
          <n-select
            placeholder="Выберите позицию"
            :options="watermarkPlaceList"
            v-model:value="formValue.watermarkPlace"
          />
        </n-form-item>

        <n-form-item label="Точность цены" path="pricePreciseNum">
          <n-select
            placeholder="Выберите точность"
            :options="pricePreciseNumList"
            v-model:value="formValue.pricePreciseNum"
          />
        </n-form-item>

        <n-form-item label="Округление" path="pricePrecise">
          <n-select
            placeholder="Выберите способ"
            :options="pricePreciseList"
            v-model:value="formValue.pricePrecise"
          />
        </n-form-item>

        <n-form-item label="Показывать рыночную цену" path="isMarketPrice">
          <n-switch size="large" v-model:value="formValue.isMarketPrice" />
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
  const watermarkPlaceList = [
    {
      label: 'Слева сверху',
      value: 1,
    },
    {
      label: 'Справа сверху',
      value: 2,
    },
    {
      label: 'По центру',
      value: 3,
    },
    {
      label: 'Справа снизу',
      value: 4,
    },
  ];

  const pricePreciseNumList = [
    {
      label: '2 знака',
      value: 1,
    },
    {
      label: '3 знака',
      value: 2,
    },
    {
      label: '4 знака',
      value: 3,
    },
  ];
  const pricePreciseList = [
    {
      label: 'Округл.',
      value: 1,
    },
    {
      label: 'Вверх',
      value: 2,
    },
    {
      label: 'Вниз',
      value: 3,
    },
  ];

  const formRef: any = ref(null);
  const message = useMessage();
  const dialog = useDialog();

  const formValue = ref({
    bigWidth: '',
    bigHeight: '',
    smallWidth: '',
    smallHeight: '',
    watermarkClarity: null,
    pricePrecise: 1,
    isMarketPrice: true,
    pricePreciseNum: null,
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
