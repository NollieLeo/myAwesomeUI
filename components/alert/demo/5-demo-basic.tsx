import React from 'react';
import { Alert } from 'awesome-ui';

export default () => (
  <div>
    <Alert
      kind="info"
      message="提示"
      showClosedIcon
      description="这是一条信息带有描述的信息"
    />
  </div>
)