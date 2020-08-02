import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Props } from './interface';

const prefixCls = 'awesome-avatar';

const Avatar: React.FC<Props> = ({
  size,
  shape,
  src,
  className,
  icon,
  alt,
  ...rest
}) => {
  const [isImgExist, setImgExist] = useState(true);

  const sizeClassName = classNames({
    [`${prefixCls}-large`]: size === 'large',
    [`${prefixCls}-small`]: size === 'small'
  })

  const avatarClassName = classNames(prefixCls, className, sizeClassName, {
    [`${prefixCls}-${shape}`]: shape,
    [`${prefixCls}-image`]: src && isImgExist,
    [`${prefixCls}-icon`]: icon,
  })

  const sizeStyle: React.CSSProperties =
    typeof size === 'number' ? {
      fontSize: icon ? size / 2 : 18,
      lineHeight: `${size}px`,
      height: size,
      width: size,
    } : {};

  useEffect(() => {
    setImgExist(true);
  }, [src]);

  const renderChildren = () => {
    let { children } = rest;
    if (src && isImgExist) {
      children = (
        <img src={src} alt={alt} />
      );
    } else if (icon) {
      children = icon;
    }
    return children || null;
  }


  return <span
    style={{ ...sizeStyle, ...rest?.style }}
    className={avatarClassName}
  >
    {renderChildren()}
  </span>;
};


Avatar.defaultProps = {
  size: 'default' as Props['size'],
  shape: 'circle' as Props['shape'],
}

export default Avatar;
