<!--
 * @Author: Zack
 * @Date: 2022-02-16 11:55:32
 * @LastEditors: Zack
 * @LastEditTime: 2022-06-02 09:45:59
 * @Description: file content
-->
<template>
  <Tooltip :title="'错误日志'" placement="bottom" :mouseEnterDelay="0.5" @click="handleToErrorList">
    <Badge :count="getCount" :offset="[0, 10]" :overflowCount="99">
      <Icon icon="ion:bug-outline" />
    </Badge>
  </Tooltip>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { Tooltip, Badge } from 'ant-design-vue';
import Icon from '/@/components/Icon';

import { useErrorLogStore } from '/@/store/modules/errorLog';
import { PageEnum } from '/@/enums/pageEnum';

import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'ErrorAction',
  components: { Icon, Tooltip, Badge },

  setup() {
    const { push } = useRouter();
    const errorLogStore = useErrorLogStore();

    const getCount = computed(() => errorLogStore.getErrorLogListCount);

    function handleToErrorList() {
      push(PageEnum.ERROR_LOG_PAGE).then(() => {
        errorLogStore.setErrorLogListCount(0);
      });
    }

    return {
      getCount,
      handleToErrorList,
    };
  },
});
</script>
