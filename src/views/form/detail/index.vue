<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="Детали формы">
        Форма также может показывать данные только для чтения.
      </n-card>
    </div>
    <n-card
      :bordered="false"
      title="Основное"
      class="mt-4 proCard"
      size="small"
      :segmented="{ content: true }"
    >
      <n-descriptions label-placement="left" class="py-2">
        <n-descriptions-item>
          <template #label>Получатель</template>
          Аджун
        </n-descriptions-item>
        <n-descriptions-item label="Счет получателя">NaiveUiAdmin@qq.com</n-descriptions-item>
        <n-descriptions-item label="Тип оплаты">Alipay</n-descriptions-item>
        <n-descriptions-item label="Счет списания">NaiveUiAdmin@163.com</n-descriptions-item>
        <n-descriptions-item label="Сумма">￥1980.00</n-descriptions-item>
        <n-descriptions-item label="Статус">
          <n-tag type="success"> Зачислено</n-tag>
        </n-descriptions-item>
      </n-descriptions>
    </n-card>
    <n-card
      :bordered="false"
      title="Дополнительно"
      class="mt-4 proCard"
      size="small"
      :segmented="{ content: true }"
    >
      <n-descriptions label-placement="left" class="py-2">
        <n-descriptions-item>
          <template #label>Город</template>
          Шэньчжэнь
        </n-descriptions-item>
        <n-descriptions-item label="Пол">М</n-descriptions-item>
        <n-descriptions-item label="Email">NaiveUiAdmin@qq.com</n-descriptions-item>
        <n-descriptions-item label="Адрес">Китай, Шэньчжэнь, Наньшань</n-descriptions-item>
        <n-descriptions-item label="ДР">1991-06-04</n-descriptions-item>
        <n-descriptions-item label="Проверка">
          <n-tag type="success"> Подтверждено</n-tag>
        </n-descriptions-item>
      </n-descriptions>
    </n-card>
    <n-card
      :bordered="false"
      title="Таблица"
      class="mt-4 proCard"
      size="small"
      :segmented="{ content: true }"
    >
      <n-table :bordered="false" :single-line="false">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Пол</th>
            <th>Город</th>
            <th>ДР</th>
            <th width="150">Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ah jung</td>
            <td>М</td>
            <td>Шэньчжэнь</td>
            <td>1993-11-09</td>
            <td>
              <n-space>
                <n-button size="small" type="error">Удалить</n-button>
                <n-button size="small" type="info">Просмотр</n-button>
              </n-space>
            </td>
          </tr>
          <tr>
            <td>Симэнь Фэйсюэ</td>
            <td>М</td>
            <td>Гуанчжоу</td>
            <td>1991-09-11</td>
            <td>
              <n-space>
                <n-button size="small" type="error">Удалить</n-button>
                <n-button size="small" type="info">Просмотр</n-button>
              </n-space>
            </td>
          </tr>
          <tr>
            <td>Титан</td>
            <td>М</td>
            <td>Пекин</td>
            <td>1990-11-03</td>
            <td>
              <n-space>
                <n-button size="small" type="error">Удалить</n-button>
                <n-button size="small" type="info">Просмотр</n-button>
              </n-space>
            </td>
          </tr>
          <tr>
            <td>Охотник</td>
            <td>Ж</td>
            <td>Шанхай</td>
            <td>1992-03-11</td>
            <td>
              <n-space>
                <n-button size="small" type="error">Удалить</n-button>
                <n-button size="small" type="info">Просмотр</n-button>
              </n-space>
            </td>
          </tr>
        </tbody>
      </n-table>
    </n-card>
  </div>
</template>

<script setup></script>

<style lang="less" scoped></style>
