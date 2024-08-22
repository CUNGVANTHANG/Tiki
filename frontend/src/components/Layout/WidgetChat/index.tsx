import classNames from "classnames/bind";
import styles from "./WidgetChat.module.scss";

const cx = classNames.bind(styles);

const WidgetChat = () => {
  return (
    <div className={cx("widget-chat")}>
      <div className={cx("assistant")}>
        <img src="../images/assistant.png" alt="chat-gpt-icon" />
        <div>Trợ lý</div>
      </div>

      <div className={cx("divider")}></div>

      <div>
        <div className={cx("chat-platform")}>
          <img src="../images/chat.png" alt="chat-customer" />
          <div>Tin mới</div>
        </div>
      </div>
    </div>
  );
};

export default WidgetChat;
