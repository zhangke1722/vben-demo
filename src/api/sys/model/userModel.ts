/*
 * @Author: Zack
 * @Date: 2022-06-02 11:49:07
 * @LastEditors: Zack
 * @LastEditTime: 2022-06-08 17:39:18
 * @Description: file content
 */
/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
  code: string;
  randomStr: string;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  userId: string | number;
  token: string;
  role: RoleInfo;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  roles: RoleInfo[];
  // 用户id
  userId: string | number;
  // 用户名
  username: string;
  // 真实名字
  realName: string;
  // 头像
  avatar: string;
  // 介绍
  desc?: string;
}
