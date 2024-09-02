import classNames from "classnames/bind";
import styles from "./WidgetChat.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/redux/store/";
import { showModal } from "~/redux/features/modal.slice";

const cx = classNames.bind(styles);

const WidgetChat = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const handleShowModal = () => {
    if (isLoggedIn) {
      return;
    }
    dispatch(showModal());
  };

  return (
    <div onClick={handleShowModal} className={cx("widget-chat")}>
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
