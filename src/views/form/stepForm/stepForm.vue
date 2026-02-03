<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="Пошаговая форма">
        Разбейте длинную форму на шаги, чтобы вести пользователя.
      </n-card>
    </div>
    <n-card :bordered="false" class="mt-4 proCard">
      <n-space vertical class="steps" justify="center">
        <n-steps :current="currentTab" :status="currentStatus">
          <n-step title="Данные перевода" description="Проверьте ввод" />
          <n-step title="Подтверждение" description="Проверьте данные" />
          <n-step title="Готово" description="Перевод выполнен" />
        </n-steps>
        <step1 v-if="currentTab === 1" @next-step="nextStep" />
        <step2 v-if="currentTab === 2" @next-step="nextStep" @prev-step="prevStep" />
        <step3 v-if="currentTab === 3" @prev-step="prevStep" @finish="finish" />
      </n-space>
    </n-card>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import step1 from './Step1.vue';
  import step2 from './Step2.vue';
  import step3 from './Step3.vue';

  const currentTab = ref(1);
  const currentStatus = ref('process');

  function nextStep() {
    if (currentTab.value < 3) {
      currentTab.value += 1;
    }
  }

  function prevStep() {
    if (currentTab.value > 1) {
      currentTab.value -= 1;
    }
  }

  function finish() {
    currentTab.value = 1;
  }
</script>

<style lang="less" scoped>
  .steps {
    max-width: 750px;
    margin: 16px auto;
  }
</style>
