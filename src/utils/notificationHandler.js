import { notification, message } from "antd";
export const notificationHandler = (type, description) => {
  type.toLowerCase() !== "success" &&
  type.toLowerCase() !== "error" &&
  type.toLowerCase() !== "info" &&
  type.toLowerCase() !== "warning"
    ? message.info(description)
    : notification[type.toLowerCase()]({
        message: type,
        description: description,
        placement: "topRight",
      });
};
