import style from "./notification.module.css";

export default function Notification({ message }) {
  return (
    <div className={style.block}>
      <p>{message}</p>
    </div>
  );
}
