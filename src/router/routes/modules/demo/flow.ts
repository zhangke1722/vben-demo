/*
 * @Author: Zack
 * @Date: 2022-02-16 11:55:33
 * @LastEditors: Zack
 * @LastEditTime: 2022-06-01 18:21:27
 * @Description: file content
 */
import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const charts: AppRouteModule = {
  path: '/flow',
  name: 'FlowDemo',
  component: LAYOUT,
  redirect: '/flow/flowChart',
  meta: {
    orderNo: 5000,
    icon: 'tabler:chart-dots',
    title: '图形编辑器',
  },
  children: [
    {
      path: 'flowChart',
      name: 'flowChartDemo',
      component: () => import('/@/views/demo/comp/flow-chart/index.vue'),
      meta: {
        title: '流程图',
      },
    },
  ],
};

export default charts;
