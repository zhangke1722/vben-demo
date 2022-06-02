<!--
 * @Author: Zack
 * @Date: 2022-02-16 11:55:32
 * @LastEditors: Zack
 * @LastEditTime: 2022-06-02 11:29:56
 * @Description: file content
-->
<template>
  <ConfigProvider :locale="zhCN">
    <AppProvider>
      <RouterView />
    </AppProvider>
  </ConfigProvider>
</template>

<script lang="ts" setup>
import { ConfigProvider } from 'ant-design-vue';
import { AppProvider } from '/@/components/Application';
import { useTitle } from '/@/hooks/web/useTitle';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import 'dayjs/locale/zh-cn';
// support Multi-language

// Listening to page changes and dynamically changing site titles
useTitle();
</script>
