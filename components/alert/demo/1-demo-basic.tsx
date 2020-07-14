import React from 'react';
import Alert from 'awesome-ui/lib/alert';
import 'awesome-ui/lib/alert/style';

export default () => (
  <div>
    <Alert kind="warning">
      这是一条警告信息
    </Alert>
    <br />
    <Alert kind="warning" type="outline">
      这是一条警告信息
    </Alert>
    <br />
    <Alert kind="negative">
      这是一条错误信息
    </Alert>
    <br/>
    <Alert kind="negative" type="outline">
      这是一条错误信息
    </Alert>
  </div>
)

