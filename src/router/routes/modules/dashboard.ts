/*
 * @Author: Zack
 * @Date: 2022-02-16 11:55:33
 * @LastEditors: Zack
 * @LastEditTime: 2022-06-01 18:07:31
 * @Description: file content
 */
import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard/analysis',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: 'Dashboard',
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('/@/views/dashboard/analysis/index.vue'),
      meta: {
        // affix: true,
        title: '分析页',
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('/@/views/dashboard/workbench/index.vue'),
      meta: {
        title: '工作台',
      },
    },
  ],
};

export default dashboard;
