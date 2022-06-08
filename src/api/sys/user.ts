/*
 * @Author: Zack
 * @Date: 2022-06-02 11:49:07
 * @LastEditors: Zack
 * @LastEditTime: 2022-06-08 17:53:12
 * @Description: file content
 */
import { defHttp } from '/@/utils/http/axios';
import { encryptByMd5 } from '/@/utils/cipher';
import { LoginParams, LoginResultModel, GetUserInfoModel } from './model/userModel';
import { ContentTypeEnum } from '/@/enums/httpEnum';
import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/auth/token/login',
  Logout = '/logout',
  GetUserInfo = '/getUserInfo',
  GetPermCode = '/getPermCode',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,

      headers: {
        'Content-Type': ContentTypeEnum.FORM_URLENCODED,
      },
      params: {
        code: params.code,
        randomStr: params.randomStr,
      },
      data: {
        username: params.username,
        password: encryptByMd5(params.password).toUpperCase(),
      },
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}
