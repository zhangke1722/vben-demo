<!--
 * @Author: Zack
 * @Date: 2022-02-16 11:55:33
 * @LastEditors: Zack
 * @LastEditTime: 2022-06-02 10:22:16
 * @Description: file content
-->
<template>
  <h2 class="mb-3 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left">
    {{ getFormTitle }}
  </h2>
</template>
<script lang="ts" setup>
import { computed, unref } from 'vue';
import { LoginStateEnum, useLoginState } from './useLogin';

const { getLoginState } = useLoginState();

const getFormTitle = computed(() => {
  const titleObj = {
    [LoginStateEnum.RESET_PASSWORD]: '重置密码',
    [LoginStateEnum.LOGIN]: '登录',
    [LoginStateEnum.REGISTER]: '注册',
    [LoginStateEnum.MOBILE]: '手机登录',
    [LoginStateEnum.QR_CODE]: '二维码登录',
  };
  return titleObj[unref(getLoginState)];
});
</script>
