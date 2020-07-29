import React from 'react';
import { Alert } from 'awesome-ui';

export default () => (
  <div>
    <Alert kind="info" message="这是一条信息，可删除" showClosedIcon />
    <br />
    <Alert kind="info" message="这是一条信息，不可删除" showClosedIcon closable={false} />
  </div>
);
