<template>
  <h2 class="mb-3 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left">
    登录
  </h2>
  <Form class="p-4 enter-x" :model="formData" :rules="getFormRules" ref="formRef" @keypress.enter="handleLogin">
    <FormItem name="username" class="enter-x">
      <Input size="large" v-model:value="formData.username" placeholder="账号" class="fix-auto-fill" />
    </FormItem>
    <FormItem name="password" class="enter-x">
      <InputPassword size="large" visibilityToggle :autoComplete="true" v-model:value="formData.password"
        placeholder="密码" />
    </FormItem>
    <FormItem name="code" class="enter-x">
      <ARow>
        <ACol :span="18">
          <Input size="large" :maxlength="imgCode.len" v-model:value="formData.code" class="form-code"
            placeholder="验证码" />
        </ACol>
        <ACol :span="6">
          <img height="100%" :preview="false" :src="imgCode.src" alt="验证码" @click="getImgCode" />
        </ACol>
      </ARow>
    </FormItem>

    <ARow class="enter-x">
      <ACol :span="12">
      </ACol>
      <ACol :span="12">
        <FormItem :style="{ 'text-align': 'right' }">
          <!-- No logic, you need to deal with it yourself -->
          <!-- <Button type="link" size="small">
            注册
          </Button> -->
        </FormItem>
      </ACol>
    </ARow>

    <FormItem class="enter-x">
      <Button type="primary" size="large" block @click="handleLogin" :loading="loading">
        登录
      </Button>
    </FormItem>


  </Form>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { Form, Input, Row, Col, Button } from 'ant-design-vue';
import { useMessage } from '/@/hooks/web/useMessage';
import { useUserStore } from '/@/store/modules/user';
import { useFormRules, useFormValid } from './useLogin';
import { useDesign } from '/@/hooks/web/useDesign';
//import { onKeyStroke } from '@vueuse/core';
import type { FormInstance } from 'ant-design-vue';
const ACol = Col;
const ARow = Row;
const FormItem = Form.Item;
const InputPassword = Input.Password;
const { notification, createErrorModal } = useMessage();
const { prefixCls } = useDesign('login');
const userStore = useUserStore();

const { getFormRules } = useFormRules();

const formRef = ref<FormInstance>();
const loading = ref(false);


const formData = reactive({
  username: 'zhangke1722@163.com',
  password: '123456abc',
  code: '',
  randomStr: ''
});
const imgCode = reactive({
  src: '',
  len: 4
});
const { validForm } = useFormValid(formRef);

function register() {
  console.log(111)
}
function randomString(receive: { length: number; type: string }) {
  const { type, length } = receive;
  const chars = type === 'number' ? '0123456789' : '0ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789';
  const maxPos = chars.length;
  let string = '';
  for (let i = 0; i < length; i++) {
    string += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return string;
}
function getImgCode() {
  formData.randomStr = randomString({ length: 17, type: 'number' });
  imgCode.src = `/api/captcha?randomStr=${formData.randomStr}`;
  formData.code = '';
}


async function handleLogin() {
  const data = await validForm();
  if (!data) return;
  try {
    loading.value = true;
    console.log(data)
    const userInfo = await userStore.login({
      password: data.password,
      username: data.username,
      code: data.code,
      randomStr: formData.randomStr,
      mode: 'none', //不要默认的错误提示
    });
    if (userInfo) {
      notification.success({
        message: '登录成功',
        description: `欢迎回来: ${userInfo.realName}`,
        duration: 3,
      });
    }
  } catch (error) {
    createErrorModal({
      title: '错误提示',
      content: (error as unknown as Error).message || '网络异常，请检查您的网络连接是否正常!',
      getContainer: () => document.body.querySelector(`.${prefixCls}`) || document.body,
    });
  } finally {
    loading.value = false;
  }
}
getImgCode()
</script>
<style lang="less">
.form-code {
  min-width: auto !important;
}
</style>
