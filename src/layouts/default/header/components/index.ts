/*
 * @Author: Zack
 * @Date: 2022-06-02 11:05:05
 * @LastEditors: Zack
 * @LastEditTime: 2022-06-02 17:21:58
 * @Description: file content
 */
import { createAsyncComponent } from '/@/utils/factory/createAsyncComponent';
import FullScreen from './FullScreen.vue';

export const UserDropDown = createAsyncComponent(() => import('./user-dropdown/index.vue'), {
  loading: true,
});

export const LayoutBreadcrumb = createAsyncComponent(() => import('./Breadcrumb.vue'));

export const Notify = createAsyncComponent(() => import('./notify/index.vue'));

export { FullScreen };
