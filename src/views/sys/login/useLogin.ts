import type { Rule } from 'ant-design-vue/es/form';

import { unref, Ref } from 'vue';

export function useFormValid<T extends Object = any>(formRef: Ref<any>) {
  async function validForm() {
    const form = unref(formRef);
    if (!form) return;
    const data = await form.validate();
    return data as T;
  }

  return { validForm };
}

export function useFormRules() {
  const getFormRules: Record<string, Rule[]> = {
    username: [{ required: true, message: '请输入账号', trigger: 'change' }],
    password: [{ required: true, message: '请输入密码', trigger: 'change' }],
    code: [{ required: true, message: '请输入验证码', trigger: 'change' }],
  };
  return { getFormRules };
}
