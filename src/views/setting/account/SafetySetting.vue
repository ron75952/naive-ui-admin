<template>
  <n-grid cols="1" responsive="screen" class="-mt-4">
    <n-grid-item>
      <n-list>
        <n-list-item>
          <template #suffix>
            <n-button type="primary" text>Изменить</n-button>
          </template>
          <n-thing title="Пароль">
            <template #description
              ><span class="text-gray-400"
                >Привяжите телефон и email для безопасности</span
              ></template
            >
          </n-thing>
        </n-list-item>
        <n-list-item>
          <template #suffix>
            <n-button type="primary" text>Изменить</n-button>
          </template>
          <n-thing title="Телефон">
            <template #description
              ><span class="text-gray-400">Привязан: +86189****4877</span></template
            >
          </n-thing>
        </n-list-item>
        <n-list-item>
          <template #suffix>
            <n-button type="primary" text>Настроить</n-button>
          </template>
          <n-thing title="Контрольный вопрос">
            <template #description
              ><span class="text-gray-400"
                >Не задано, улучшает защиту аккаунта</span
              ></template
            >
          </n-thing>
        </n-list-item>
        <n-list-item>
          <template #suffix>
            <n-button type="primary" text>Изменить</n-button>
          </template>
          <n-thing title="Домен">
            <template #description
              ><span class="text-gray-400">Привязан: https://www.naiveui.com</span></template
            >
          </n-thing>
        </n-list-item>
      </n-list>
    </n-grid-item>
  </n-grid>
</template>

<script lang="ts" setup></script>
