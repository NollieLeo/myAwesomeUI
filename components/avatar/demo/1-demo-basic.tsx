import React, { Fragment } from 'react';
import { Avatar } from 'awesome-ui';
import { UserOutlined } from '@ant-design/icons';

export default () => (
  <Fragment>
    <Avatar icon={<UserOutlined />} size="small" />
    &nbsp;
    <Avatar icon={<UserOutlined />} />
    &nbsp;
    <Avatar icon={<UserOutlined />} size="large" />
    &nbsp;
    <Avatar icon={<UserOutlined />} size={50} />
    <br /><br />
    <Avatar icon={<UserOutlined />} size="small" shape='square' />
    &nbsp;
    <Avatar icon={<UserOutlined />} shape='square' />
    &nbsp;
    <Avatar icon={<UserOutlined />} size="large" shape='square' />
    &nbsp;
    <Avatar icon={<UserOutlined />} size={50} shape='square' />
    <br />
  </Fragment>
);
