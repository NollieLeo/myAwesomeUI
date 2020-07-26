import React from 'react';
import { Alert } from 'awesome-ui';

export default () => (
  <div>
    <Alert kind="info" message="这是一条信息，可删除" showIcon />
    <br />
    <Alert kind="info" type="outline" message="这是一条信息，不可删除" showIcon closable={false} />
  </div>
)