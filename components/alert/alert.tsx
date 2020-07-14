import React, { FC } from 'react';
import t from 'prop-types';

import { AlertProps } from './interface';

import './style';

const prefixCls = 'awesome-alert';

const Alert: FC<AlertProps> = ({ children, kind = 'info', type = 'default', ...rest }) => {
  function getClassName() {
    if (type === 'default') {
      return `${prefixCls} ${prefixCls}-${kind}`;
    }
    return `${prefixCls} ${prefixCls}-${kind}-outline`;
  }

  return (
    <div
      className={getClassName()}
      {...rest}
    >
      {children}
    </div>
  )
};

Alert.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
  type: t.oneOf(['default', 'outline']),
}

export default Alert;
