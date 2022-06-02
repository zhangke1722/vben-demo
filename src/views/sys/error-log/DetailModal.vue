<!--
 * @Author: Zack
 * @Date: 2022-02-16 11:55:33
 * @LastEditors: Zack
 * @LastEditTime: 2022-06-02 10:13:01
 * @Description: file content
-->
<template>
  <BasicModal :width="800" title="详情" v-bind="$attrs">
    <Description :data="info" @register="register" />
  </BasicModal>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue';
import type { ErrorLogInfo } from '/#/store';
import { BasicModal } from '/@/components/Modal/index';
import { Description, useDescription } from '/@/components/Description/index';
import { getDescSchema } from './data';

defineProps({
  info: {
    type: Object as PropType<ErrorLogInfo>,
    default: null,
  },
});

const [register] = useDescription({
  column: 2,
  schema: getDescSchema()!,
});
</script>
