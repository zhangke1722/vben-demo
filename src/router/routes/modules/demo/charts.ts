/*
 * @Author: Zack
 * @Date: 2022-02-16 11:55:33
 * @LastEditors: Zack
 * @LastEditTime: 2022-06-02 10:04:37
 * @Description: file content
 */
import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';

const charts: AppRouteModule = {
  path: '/charts',
  name: 'Charts',
  component: LAYOUT,
  redirect: '/charts/echarts/map',
  meta: {
    orderNo: 500,
    icon: 'ion:bar-chart-outline',
    title: '图表',
  },
  children: [
    {
      path: 'baiduMap',
      name: 'BaiduMap',
      meta: {
        title: '百度地图',
      },
      component: () => import('/@/views/demo/charts/map/Baidu.vue'),
    },
    {
      path: 'aMap',
      name: 'AMap',
      meta: {
        title: '高德地图',
      },
      component: () => import('/@/views/demo/charts/map/Gaode.vue'),
    },
    {
      path: 'googleMap',
      name: 'GoogleMap',
      meta: {
        title: '谷歌地图',
      },
      component: () => import('/@/views/demo/charts/map/Google.vue'),
    },

    {
      path: 'echarts',
      name: 'Echarts',
      component: getParentLayout('Echarts'),
      meta: {
        title: 'Echarts',
      },
      redirect: '/charts/echarts/map',
      children: [
        {
          path: 'map',
          name: 'Map',
          component: () => import('/@/views/demo/charts/Map.vue'),
          meta: {
            title: '地图',
          },
        },
        {
          path: 'line',
          name: 'Line',
          component: () => import('/@/views/demo/charts/Line.vue'),
          meta: {
            title: '折线图',
          },
        },
        {
          path: 'pie',
          name: 'Pie',
          component: () => import('/@/views/demo/charts/Pie.vue'),
          meta: {
            title: '饼图',
          },
        },
      ],
    },
  ],
};

export default charts;
