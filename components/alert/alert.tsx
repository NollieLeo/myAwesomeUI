import React, { FC, useState } from 'react';
import t from 'prop-types';

import { CloseOutlined } from '@ant-design/icons';
import Animate from 'rc-animate';
import classNames from 'classnames';
import { AlertProps } from './interface';

import './style';

const prefixCls = 'awesome-alert';

const Alert: FC<AlertProps> = ({
  kind = 'info',
  type = 'default',
  showIcon = false,
  message,
  description,
  style,
  closable = true,
  ...props
}) => {
  const [closing, setClosing] = useState(false);
  const [closed, setClosed] = useState(false);
  const ref = React.useRef<HTMLElement>();

  const alertClassnames = classNames(
    prefixCls,
    type === 'default' ? `${prefixCls} ${prefixCls}-${kind}` : `${prefixCls} ${prefixCls}-${kind}-outline`,
  );

  const alertCloseIconClassnames = classNames(
    `${prefixCls}-close`,
    {
      [`${prefixCls}-close-disabled`]: !closable,
    },
  )

  const handleClosed = (e: React.MouseEvent<HTMLSpanElement>) => {
    setClosing(true);
    props.onClose?.(e);
  }

  const animationEnd = () => {
    setClosing(false);
    setClosed(true);
    props.afterClose?.();
  };

  return (
    !closed ? <Animate
      showProp="data-show"
      onEnd={animationEnd}
      transitionName={`${prefixCls}-slide-up`}
      component=""
    >
      <div
        className={alertClassnames}
        style={style}
        data-show={!closing}
        ref={ref}
      >
        <div className={`${prefixCls}-header`}>
          <span className={`${prefixCls}-message`}>
            {message}
          </span>

          {
            showIcon &&
            <span
              onClick={(e) => closable && handleClosed(e)}
              className={alertCloseIconClassnames}>
              <CloseOutlined />
            </span>
          }
        </div>
        <span className={`${prefixCls}-description`}>
          {description}
        </span>
      </div>
    </Animate> : ''
  )
};

Alert.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
  type: t.oneOf(['default', 'outline']),
  message: t.node,
}

export default Alert;
