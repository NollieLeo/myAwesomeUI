import React, { FC, useState } from 'react';

import {
  CloseOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

import Animate from 'rc-animate';
import classNames from 'classnames';
import { AlertProps } from './interface';

import './style';

const prefixCls = 'awesome-alert';

const Alert: FC<AlertProps> = ({
  showIcon,
  showClosedIcon,
  closable,
  kind,
  message,
  description,
  style,
  ...props
}) => {
  const [closing, setClosing] = useState(false);
  const [closed, setClosed] = useState(false);
  const ref = React.useRef<HTMLElement>();

  // kind类型
  const iconMapOutlined = {
    positive: CheckCircleOutlined,
    info: InfoCircleOutlined,
    negative: CloseCircleOutlined,
    warning: ExclamationCircleOutlined,
  };

  const alertClassnames = classNames(prefixCls, `${prefixCls} ${prefixCls}-${kind}`);

  const alertCloseIconClassnames = classNames(`${prefixCls}-close`, {
    [`${prefixCls}-close-disabled`]: !closable,
  });

  const handleClosed = (e: React.MouseEvent<HTMLSpanElement>) => {
    setClosing(true);
    props.onClose?.(e);
  };

  const animationEnd = () => {
    setClosing(false);
    setClosed(true);
    props.afterClose?.();
  };

  return !closed ? (
    <Animate
      showProp="data-show"
      onEnd={animationEnd}
      transitionName={`${prefixCls}-slide-up`}
      component=""
    >
      <div className={alertClassnames} style={style} data-show={!closing} ref={ref}>
        <div className={`${prefixCls}-header`}>
          <span className={`${prefixCls}-message`}>
            {showIcon &&
              kind && React.createElement(iconMapOutlined[kind], {
                className: `${prefixCls}-icon-${kind}`,
              })}
            <span>{message}</span>
          </span>

          {showClosedIcon && (
            <span
              onClick={(e) => closable && handleClosed(e)!}
              className={alertCloseIconClassnames}
            >
              <CloseOutlined />
            </span>
          )}
        </div>
        <span className={`${prefixCls}-description`}>{description}</span>
      </div>
    </Animate>
  ) : null;
};

Alert.defaultProps = {
  showClosedIcon: false as AlertProps['showClosedIcon'],
  closable: true as AlertProps['closable'],
  showIcon: false as AlertProps['showIcon'],
  kind: 'info' as AlertProps['kind'],
}



export default Alert;
