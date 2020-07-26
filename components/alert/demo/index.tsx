import React from 'react';

import BasicDemo from './1-demo-basic'; // 引入组件 
import BasicDemoCode from '!raw-loader!./1-demo-basic.tsx';

import BasicDemo2 from './2-demo-basic'; // 引入组件 
import BasicDemoCode2 from '!raw-loader!./2-demo-basic.tsx';

import BasicDemo3 from './3-demo-basic'; // 引入组件 
import BasicDemoCode3 from '!raw-loader!./3-demo-basic.tsx';

import BasicDemo4 from './4-demo-basic'; // 引入组件 
import BasicDemoCode4 from '!raw-loader!./4-demo-basic.tsx';

import BasicDemo5 from './5-demo-basic'; // 引入组件 
import BasicDemoCode5 from '!raw-loader!./5-demo-basic.tsx';

import DemosBox from '../../../doc-comps/demos-box';
import '../style'; // 引入组件样式


const demosObj = [
  {
    title: '基本用法',
    desc: '最基本的使用方法',
    code: BasicDemoCode,
    node: <BasicDemo />
  },
  {
    title: '四种类型',
    desc: '最基本的4种初始类型',
    code: BasicDemoCode2,
    node: <BasicDemo2 />
  },
  {
    title: '外观类型',
    desc: '2种外观类型',
    code: BasicDemoCode3,
    node: <BasicDemo3 />
  },
  {
    title:'关闭按钮',
    desc:'可通过showIcon来控制关闭按钮的显示与隐藏\n 通过closable控制按钮是否启用',
    code: BasicDemoCode4,
    node: <BasicDemo4 />
  },
  {
    title:'描述',
    desc:'通过description引入提示内容',
    code: BasicDemoCode5,
    node: <BasicDemo5 />
  },
]
const AlertDemos = () => (<DemosBox nodes={demosObj} columns={2} />);


export default AlertDemos;