<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="Базовые данные">
        Базовые данные, иногда только для чтения.
      </n-card>
    </div>
    <n-card :bordered="false" class="mt-4 proCard" size="small" :segmented="{ content: true }">
      <n-descriptions label-placement="left" class="py-2">
        <n-descriptions-item>
          <template #label>Получатель</template>
          Аджун
        </n-descriptions-item>
        <n-descriptions-item label="Счет получателя">NaiveUiAdmin@qq.com</n-descriptions-item>
        <n-descriptions-item label="Тип оплаты">Alipay</n-descriptions-item>
        <n-descriptions-item label="Счет плательщика">NaiveUiAdmin@163.com</n-descriptions-item>
        <n-descriptions-item label="Сумма">￥1980.00</n-descriptions-item>
        <n-descriptions-item label="Статус">
          <n-tag type="success"> Зачислено</n-tag>
        </n-descriptions-item>
      </n-descriptions>
    </n-card>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped></style>
