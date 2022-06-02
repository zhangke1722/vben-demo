import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';

const comp: AppRouteModule = {
  path: '/comp',
  name: 'Comp',
  component: LAYOUT,
  redirect: '/comp/basic',
  meta: {
    orderNo: 30,
    icon: 'ion:layers-outline',
    title: '组件',
  },

  children: [
    {
      path: 'basic',
      name: 'BasicDemo',
      component: () => import('/@/views/demo/comp/button/index.vue'),
      meta: {
        title: '基础组件',
      },
    },

    {
      path: 'form',
      name: 'FormDemo',
      redirect: '/comp/form/basic',
      component: getParentLayout('FormDemo'),
      meta: {
        // icon: 'mdi:form-select',
        title: 'Form',
      },
      children: [
        {
          path: 'basic',
          name: 'FormBasicDemo',
          component: () => import('/@/views/demo/form/index.vue'),
          meta: {
            title: '基础表单',
          },
        },
        {
          path: 'useForm',
          name: 'UseFormDemo',
          component: () => import('/@/views/demo/form/UseForm.vue'),
          meta: {
            title: 'useForm',
          },
        },
        {
          path: 'refForm',
          name: 'RefFormDemo',
          component: () => import('/@/views/demo/form/RefForm.vue'),
          meta: {
            title: 'refForm',
          },
        },
        {
          path: 'advancedForm',
          name: 'AdvancedFormDemo',
          component: () => import('/@/views/demo/form/AdvancedForm.vue'),
          meta: {
            title: '可收缩表单',
          },
        },
        {
          path: 'ruleForm',
          name: 'RuleFormDemo',
          component: () => import('/@/views/demo/form/RuleForm.vue'),
          meta: {
            title: '表单验证',
          },
        },
        {
          path: 'dynamicForm',
          name: 'DynamicFormDemo',
          component: () => import('/@/views/demo/form/DynamicForm.vue'),
          meta: {
            title: '动态表单',
          },
        },
        {
          path: 'customerForm',
          name: 'CustomerFormDemo',
          component: () => import('/@/views/demo/form/CustomerForm.vue'),
          meta: {
            title: '自定义组件',
          },
        },
        {
          path: 'appendForm',
          name: 'appendFormDemo',
          component: () => import('/@/views/demo/form/AppendForm.vue'),
          meta: {
            title: '表单增删实例',
          },
        },
        {
          path: 'tabsForm',
          name: 'tabsFormDemo',
          component: () => import('/@/views/demo/form/TabsForm.vue'),
          meta: {
            title: '标签页_多级field',
          },
        },
      ],
    },
    {
      path: 'table',
      name: 'TableDemo',
      redirect: '/comp/table/basic',
      component: getParentLayout('TableDemo'),
      meta: {
        // icon: 'carbon:table-split',
        title: 'table',
      },

      children: [
        {
          path: 'basic',
          name: 'TableBasicDemo',
          component: () => import('/@/views/demo/table/Basic.vue'),
          meta: {
            title: '基础表格',
          },
        },
        {
          path: 'treeTable',
          name: 'TreeTableDemo',
          component: () => import('/@/views/demo/table/TreeTable.vue'),
          meta: {
            title: '树形表格',
          },
        },
        {
          path: 'fetchTable',
          name: 'FetchTableDemo',
          component: () => import('/@/views/demo/table/FetchTable.vue'),
          meta: {
            title: '远程加载实例',
          },
        },
        {
          path: 'fixedColumn',
          name: 'FixedColumnDemo',
          component: () => import('/@/views/demo/table/FixedColumn.vue'),
          meta: {
            title: '固定列',
          },
        },
        {
          path: 'customerCell',
          name: 'CustomerCellDemo',
          component: () => import('/@/views/demo/table/CustomerCell.vue'),
          meta: {
            title: '自定义列',
          },
        },
        {
          path: 'formTable',
          name: 'FormTableDemo',
          component: () => import('/@/views/demo/table/FormTable.vue'),
          meta: {
            title: '开启搜索区域',
          },
        },
        {
          path: 'useTable',
          name: 'UseTableDemo',
          component: () => import('/@/views/demo/table/UseTable.vue'),
          meta: {
            title: 'useTable',
          },
        },
        {
          path: 'refTable',
          name: 'RefTableDemo',
          component: () => import('/@/views/demo/table/RefTable.vue'),
          meta: {
            title: 'refTable',
          },
        },
        {
          path: 'multipleHeader',
          name: 'MultipleHeaderDemo',
          component: () => import('/@/views/demo/table/MultipleHeader.vue'),
          meta: {
            title: '多级表头',
          },
        },
        {
          path: 'mergeHeader',
          name: 'MergeHeaderDemo',
          component: () => import('/@/views/demo/table/MergeHeader.vue'),
          meta: {
            title: '合并单元格',
          },
        },
        {
          path: 'expandTable',
          name: 'ExpandTableDemo',
          component: () => import('/@/views/demo/table/ExpandTable.vue'),
          meta: {
            title: '可展开表格',
          },
        },
        {
          path: 'fixedHeight',
          name: 'FixedHeightDemo',
          component: () => import('/@/views/demo/table/FixedHeight.vue'),
          meta: {
            title: '定高/头部自定义',
          },
        },
        {
          path: 'footerTable',
          name: 'FooterTableDemo',
          component: () => import('/@/views/demo/table/FooterTable.vue'),
          meta: {
            title: '表尾行合计',
          },
        },
        {
          path: 'editCellTable',
          name: 'EditCellTableDemo',
          component: () => import('/@/views/demo/table/EditCellTable.vue'),
          meta: {
            title: '可编辑单元格',
          },
        },
        {
          path: 'editRowTable',
          name: 'EditRowTableDemo',
          component: () => import('/@/views/demo/table/EditRowTable.vue'),
          meta: {
            title: '可编辑行',
          },
        },
        {
          path: 'authColumn',
          name: 'AuthColumnDemo',
          component: () => import('/@/views/demo/table/AuthColumn.vue'),
          meta: {
            title: '权限列',
          },
        },
        {
          path: 'resizeParentHeightTable',
          name: 'ResizeParentHeightTable',
          component: () => import('/@/views/demo/table/ResizeParentHeightTable.vue'),
          meta: {
            title: '继承父元素高度',
          },
        },
      ],
    },
    {
      path: 'transition',
      name: 'transitionDemo',
      component: () => import('/@/views/demo/comp/transition/index.vue'),
      meta: {
        title: '动画组件',
      },
    },

    {
      path: 'timestamp',
      name: 'TimeDemo',
      component: () => import('/@/views/demo/comp/time/index.vue'),
      meta: {
        title: '相对时间',
      },
    },
    {
      path: 'countTo',
      name: 'CountTo',
      component: () => import('/@/views/demo/comp/count-to/index.vue'),
      meta: {
        title: '数字动画',
      },
    },
    {
      path: 'tree',
      name: 'TreeDemo',
      redirect: '/comp/tree/basic',
      component: getParentLayout('TreeDemo'),
      meta: {
        // icon: 'clarity:tree-view-line',
        title: 'tree',
      },
      children: [
        {
          path: 'basic',
          name: 'BasicTreeDemo',
          component: () => import('/@/views/demo/tree/index.vue'),
          meta: {
            title: '基础树',
          },
        },
        {
          path: 'editTree',
          name: 'EditTreeDemo',
          component: () => import('/@/views/demo/tree/EditTree.vue'),
          meta: {
            title: '可搜索/工具栏',
          },
        },
        {
          path: 'actionTree',
          name: 'ActionTreeDemo',
          component: () => import('/@/views/demo/tree/ActionTree.vue'),
          meta: {
            title: '函数操作示例',
          },
        },
      ],
    },
    {
      path: 'editor',
      name: 'EditorDemo',
      redirect: '/comp/editor/markdown',
      component: getParentLayout('EditorDemo'),
      meta: {
        // icon: 'carbon:table-split',
        title: '编辑器',
      },
      children: [
        {
          path: 'json',
          component: () => import('/@/views/demo/editor/json/index.vue'),
          name: 'JsonEditorDemo',
          meta: {
            title: 'json编辑器',
          },
        },
        {
          path: 'markdown',
          component: getParentLayout('MarkdownDemo'),
          name: 'MarkdownDemo',
          meta: {
            title: 'markdown',
          },
          redirect: '/comp/editor/markdown/index',
          children: [
            {
              path: 'index',
              name: 'MarkDownBasicDemo',
              component: () => import('/@/views/demo/editor/markdown/index.vue'),
              meta: {
                title: '基础使用',
              },
            },
            {
              path: 'editor',
              name: 'MarkDownFormDemo',
              component: () => import('/@/views/demo/editor/markdown/Editor.vue'),
              meta: {
                title: '嵌入form',
              },
            },
          ],
        },

        {
          path: 'tinymce',
          component: getParentLayout('TinymceDemo'),
          name: 'TinymceDemo',
          meta: {
            title: '富文本',
          },
          redirect: '/comp/editor/tinymce/index',
          children: [
            {
              path: 'index',
              name: 'TinymceBasicDemo',
              component: () => import('/@/views/demo/editor/tinymce/index.vue'),
              meta: {
                title: '基础使用',
              },
            },
            {
              path: 'editor',
              name: 'TinymceFormDemo',
              component: () => import('/@/views/demo/editor/tinymce/Editor.vue'),
              meta: {
                title: '嵌入form',
              },
            },
          ],
        },
      ],
    },
    {
      path: 'scroll',
      name: 'ScrollDemo',
      redirect: '/comp/scroll/basic',
      component: getParentLayout('ScrollDemo'),
      meta: {
        title: '滚动组件',
      },
      children: [
        {
          path: 'basic',
          name: 'BasicScrollDemo',
          component: () => import('/@/views/demo/comp/scroll/index.vue'),
          meta: {
            title: '基础滚动',
          },
        },
        {
          path: 'action',
          name: 'ActionScrollDemo',
          component: () => import('/@/views/demo/comp/scroll/Action.vue'),
          meta: {
            title: '滚动函数',
          },
        },
        {
          path: 'virtualScroll',
          name: 'VirtualScrollDemo',
          component: () => import('/@/views/demo/comp/scroll/VirtualScroll.vue'),
          meta: {
            title: '虚拟滚动',
          },
        },
      ],
    },

    {
      path: 'modal',
      name: 'ModalDemo',
      component: () => import('/@/views/demo/comp/modal/index.vue'),
      meta: {
        title: '弹窗扩展',
      },
    },
    {
      path: 'drawer',
      name: 'DrawerDemo',
      component: () => import('/@/views/demo/comp/drawer/index.vue'),
      meta: {
        title: '抽屉扩展',
      },
    },
    {
      path: 'desc',
      name: 'DescDemo',
      component: () => import('/@/views/demo/comp/desc/index.vue'),
      meta: {
        title: '详情组件',
      },
    },

    {
      path: 'lazy',
      name: 'LazyDemo',
      component: getParentLayout('LazyDemo'),
      redirect: '/comp/lazy/basic',
      meta: {
        title: '懒加载组件',
      },
      children: [
        {
          path: 'basic',
          name: 'BasicLazyDemo',
          component: () => import('/@/views/demo/comp/lazy/index.vue'),
          meta: {
            title: '基础实例',
          },
        },
        {
          path: 'transition',
          name: 'BasicTransitionDemo',
          component: () => import('/@/views/demo/comp/lazy/Transition.vue'),
          meta: {
            title: '动画效果',
          },
        },
      ],
    },
    {
      path: 'strength-meter',
      name: 'StrengthMeterDemo',
      component: () => import('/@/views/demo/comp/strength-meter/index.vue'),
      meta: {
        title: '密码强度组件',
      },
    },
    {
      path: 'upload',
      name: 'UploadDemo',
      component: () => import('/@/views/demo/comp/upload/index.vue'),
      meta: {
        title: '上传组件',
      },
    },
    {
      path: 'loading',
      name: 'LoadingDemo',
      component: () => import('/@/views/demo/comp/loading/index.vue'),
      meta: {
        title: 'Loading',
      },
    },
    {
      path: 'cardList',
      name: 'CardListDemo',
      component: () => import('/@/views/demo/comp/card-list/index.vue'),
      meta: {
        title: '卡片列表',
      },
    },
  ],
};

export default comp;
