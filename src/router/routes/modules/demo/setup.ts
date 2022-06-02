/*
 * @Author: Zack
 * @Date: 2022-02-16 11:55:33
 * @LastEditors: Zack
 * @LastEditTime: 2022-06-01 18:19:25
 * @Description: file content
 */
import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const setup: AppRouteModule = {
  path: '/setup',
  name: 'SetupDemo',
  component: LAYOUT,
  redirect: '/setup/index',
  meta: {
    orderNo: 90000,
    hideChildrenInMenu: true,
    icon: 'whh:paintroll',
    title: '引导页',
  },
  children: [
    {
      path: 'index',
      name: 'SetupDemoPage',
      component: () => import('/@/views/demo/setup/index.vue'),
      meta: {
        title: '引导页',
        icon: 'whh:paintroll',
        hideMenu: true,
      },
    },
  ],
};

export default setup;
