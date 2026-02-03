<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="Рабочая">
        <n-grid cols="2 s:1 m:1 l:2 xl:2 2xl:2" responsive="screen">
          <n-gi>
            <div class="flex items-center">
              <div>
                <n-avatar circle :size="64" :src="schoolboy" />
              </div>
              <div>
                <p class="px-4 text-xl">Доброе утро, Ah jung! Удачного дня.</p>
                <p class="px-4 text-gray-400">Сегодня дождь, 15–25°C. Возьмите зонт.</p>
              </div>
            </div>
          </n-gi>
          <n-gi>
            <div class="flex justify-end w-full">
              <div class="flex flex-col justify-center flex-1 text-right">
                <span class="text-secondary">Проекты</span>
                <span class="text-2xl">16</span>
              </div>
              <div class="flex flex-col justify-center flex-1 text-right">
                <span class="text-secondary">Задачи</span>
                <span class="text-2xl">3/15</span>
              </div>
              <div class="flex flex-col justify-center flex-1 text-right">
                <span class="text-secondary">Сообщения</span>
                <span class="text-2xl">35</span>
              </div>
            </div>
          </n-gi>
        </n-grid>
      </n-card>
    </div>
    <n-grid class="mt-4" cols="2 s:1 m:1 l:2 xl:2 2xl:2" responsive="screen" :x-gap="12" :y-gap="9">
      <n-gi>
        <n-card
          :segmented="{ content: true }"
          content-style="padding: 0;"
          :bordered="false"
          size="small"
          title="Проекты"
        >
          <div class="flex flex-wrap project-card">
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30">
                    <GithubOutlined />
                  </n-icon>
                </span>
                <span class="ml-4 text-lg">Github</span>
              </div>
              <div class="flex h-10 mt-2 text-gray-400">
                Платформа для open-source и приватных проектов.
              </div>
              <div class="flex h-10 mt-2 text-gray-400"> OpenSource, 2021-07-04 </div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30" color="#42b983">
                    <LogoVue />
                  </n-icon>
                </span>
                <span class="ml-4 text-lg">Vue</span>
              </div>
              <div class="flex h-10 mt-2 text-gray-400"> Прогрессивный JS‑фреймворк </div>
              <div class="flex h-10 mt-2 text-gray-400"> Учиться надо, 2021-07-04 </div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30" color="#e44c27">
                    <Html5Outlined />
                  </n-icon>
                </span>
                <span class="ml-4 text-lg">Html5</span>
              </div>
              <div class="flex h-10 mt-2 text-gray-400"> HTML5 — новый стандарт интернета. </div>
              <div class="flex h-10 mt-2 text-gray-400"> Код — это искусство, 2021-04-01 </div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30" color="#dd0031">
                    <LogoAngular />
                  </n-icon>
                </span>
                <span class="ml-4 text-lg">Angular</span>
              </div>
              <div class="flex h-10 mt-2 text-gray-400"> Современная web‑платформа. </div>
              <div class="flex h-10 mt-2 text-gray-400"> Фанат, 2021-07-04 </div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30" color="#61dafb">
                    <LogoReact />
                  </n-icon>
                </span>
                <span class="ml-4 text-lg">React</span>
              </div>
              <div class="flex h-10 mt-2 text-gray-400"> JS библиотека для UI. </div>
              <div class="flex h-10 mt-2 text-gray-400"> Tech, 2021-07-04 </div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30">
                    <LogoJavascript />
                  </n-icon>
                </span>
                <span class="ml-4 text-lg">Js</span>
              </div>
              <div class="flex h-10 mt-2 text-gray-400"> Путь создается делом. </div>
              <div class="flex h-10 mt-2 text-gray-400"> Архитекторы, 2021-07-04 </div>
            </n-card>
          </div>
        </n-card>

        <n-card
          :segmented="{ content: true }"
          content-style="padding-top: 0;padding-bottom: 0;"
          :bordered="false"
          size="small"
          title="Активность"
          class="mt-4"
        >
          <template #header-extra><a href="javascript:;">Ещё</a></template>
          <n-list>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="Ah Jung немного допилил рабочую — теперь ок!">
                <template #description
                  ><p class="text-xs text-gray-500">2021-07-04 22:37:16</p></template
                >
              </n-thing>
            </n-list-item>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="Ah Jung создал проект naive-ui-admin в open-source группе?">
                <template #description
                  ><p class="text-xs text-gray-500">2021-07-04 09:37:16</p></template
                >
              </n-thing>
            </n-list-item>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="@IT Feng Qingyang отправил bug для naive-ui-admin — посмотрите.">
                <template #description
                  ><p class="text-xs text-gray-500">2021-07-04 22:37:16</p></template
                >
              </n-thing>
            </n-list-item>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="Команда, не отвлекаемся, не отвлекаемся!">
                <template #description
                  ><p class="text-xs text-gray-500">2021-07-04 09:37:16</p></template
                >
              </n-thing>
            </n-list-item>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="Не отвлекаться — иначе как «ленивый»?">
                <template #description
                  ><p class="text-xs text-gray-500">2021-07-04 20:37:16</p></template
                >
              </n-thing>
            </n-list-item>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="Переключение страниц кешируется, но выглядит как перерендер.">
                <template #description>
                  <p class="text-gray-400">
                    <n-input type="text" placeholder="Не верите? Введите текст" />
                  </p>
                </template>
              </n-thing>
            </n-list-item>
          </n-list>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card
          :segmented="{ content: true }"
          content-style="padding: 0;"
          :bordered="false"
          size="small"
          title="Быстрые действия"
        >
          <div class="flex flex-wrap project-card">
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#68c755">
                    <DashboardOutlined />
                  </n-icon>
                </span>
                <span class="text-center text-lx">Панель</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#fab251">
                    <ProfileOutlined />
                  </n-icon>
                </span>
                <span class="text-center text-lx">Список</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#1890ff">
                    <FileProtectOutlined />
                  </n-icon>
                </span>
                <span class="text-center text-lx">Формы</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#f06b96">
                    <ApartmentOutlined />
                  </n-icon>
                </span>
                <span class="text-center text-lx">Права</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#7238d1">
                    <SettingOutlined />
                  </n-icon>
                </span>
                <span class="text-center text-lx">Система</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="">
                    <DashboardOutlined />
                  </n-icon>
                </span>
                <span class="text-center text-lx">Панель</span>
              </div>
            </n-card>
          </div>
        </n-card>
        <n-card :segmented="{ content: true }" :bordered="false" size="small" class="mt-4">
          <img src="~@/assets/images/Business.svg" class="w-full" />
        </n-card>
      </n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts">
  export default { name: 'DashboardWorkplace' };
</script>

<script lang="ts" setup>
  import schoolboy from '@/assets/images/schoolboy.png';
  import {
    GithubOutlined,
    DashboardOutlined,
    ProfileOutlined,
    FileProtectOutlined,
    SettingOutlined,
    ApartmentOutlined,
    Html5Outlined,
  } from '@vicons/antd';
  import { LogoVue, LogoAngular, LogoReact, LogoJavascript } from '@vicons/ionicons5';
</script>

<style lang="less" scoped>
  .project-card {
    margin-right: -6px;

    &-item {
      margin: -1px;
      width: 33.333333%;
    }
  }
</style>
