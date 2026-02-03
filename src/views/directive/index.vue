<template>
  <div class="card content-box">
    <n-card :bordered="false" title="Копирование">
      <n-space>
        <n-input placeholder="Введите текст" v-model:value="data" style="width: 350px" />
        <n-button v-copy="data" type="primary" @click="a">Копировать</n-button>
      </n-space>
    </n-card>
    <n-card :bordered="false" title="Debounce" class="mt-3">
      <n-button type="primary" v-debounce="b">Тест debounce</n-button>
    </n-card>
    <n-card :bordered="false" title="Throttle" class="mt-3">
      <n-button type="primary" v-throttle="c">Тест throttle</n-button>
    </n-card>

    <n-card :bordered="false" title="Drag" class="mt-3">
      Наведите на квадрат и перетащите
    </n-card>
    <div class="box" v-draggable> </div>
  </div>
</template>

<script setup lang="ts" name="copyDirect">
  import { ref } from 'vue';
  import { useMessage } from 'naive-ui';
  const data = ref<string>();
  const message = useMessage();
  const a = () => {
    message.success('Скопировано: ' + data.value);
  };
  const b = () => {
    message.success('Debounce');
    console.log(data.value);
  };
  const c = () => {
    message.success('Throttle');
    console.log(data.value);
  };
</script>

<style scoped lang="less">
  body {
    width: 100px;
    height: 100px;
    background-color: #ccc;
    position: relative;
  }
  .content-box {
    height: 100vh;
    .box {
      width: 100px;
      height: 100px;
      background-color: #2d8cf0;
      position: absolute;
      z-index: 10000000;
      border-radius: 10px;
      margin: 20px 5px;
    }
  }
</style>
