import {notification } from 'antd';

/**
 * 通用弹框
 * @param {*} type 
 * @param {*} message 
 * @param {*} description 
 */
const openNotificationWithIcon = (type,message,description) => {
  notification[type]({
    message: message,
    description:description
  });
};

export default openNotificationWithIcon;