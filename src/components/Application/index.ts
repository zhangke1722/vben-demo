/*
 * @Author: Zack
 * @Date: 2022-02-16 11:55:32
 * @LastEditors: Zack
 * @LastEditTime: 2022-06-02 10:35:45
 * @Description: file content
 */
import { withInstall } from '/@/utils';

import appLogo from './src/AppLogo.vue';
import appProvider from './src/AppProvider.vue';
import appSearch from './src/search/AppSearch.vue';
import appDarkModeToggle from './src/AppDarkModeToggle.vue';

export { useAppProviderContext } from './src/useAppContext';

export const AppLogo = withInstall(appLogo);
export const AppProvider = withInstall(appProvider);
export const AppSearch = withInstall(appSearch);
export const AppDarkModeToggle = withInstall(appDarkModeToggle);
