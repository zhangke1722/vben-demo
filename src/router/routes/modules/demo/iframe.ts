/*
 * @Author: Zack
 * @Date: 2022-02-16 11:55:33
 * @LastEditors: Zack
 * @LastEditTime: 2022-06-01 18:21:13
 * @Description: file content
 */
import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
const IFrame = () => import('/@/views/sys/iframe/FrameBlank.vue');

const iframe: AppRouteModule = {
  path: '/frame',
  name: 'Frame',
  component: LAYOUT,
  redirect: '/frame/doc',
  meta: {
    orderNo: 1000,
    icon: 'ion:tv-outline',
    title: '外部页面',
  },

  children: [
    {
      path: 'doc',
      name: 'Doc',
      component: IFrame,
      meta: {
        frameSrc: 'https://vvbin.cn/doc-next/',
        title: '项目文档(内嵌)',
      },
    },
    {
      path: 'antv',
      name: 'Antv',
      component: IFrame,
      meta: {
        frameSrc: 'https://2x.antdv.com/docs/vue/introduce-cn/',
        title: '什么文档内嵌',
      },
    },
    {
      path: 'https://vvbin.cn/doc-next/',
      name: 'DocExternal',
      component: IFrame,
      meta: {
        title: '项目文档外链',
      },
    },
  ],
};

export default iframe;
