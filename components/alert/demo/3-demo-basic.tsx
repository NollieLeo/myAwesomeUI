import React from 'react';
import { Alert } from 'awesome-ui';

export default () => (
  <div>
    <Alert kind="warning" message="这是一条信息" />
    <br />
    <Alert kind="warning" type="outline" message="这是一条信息" />
  </div>
)