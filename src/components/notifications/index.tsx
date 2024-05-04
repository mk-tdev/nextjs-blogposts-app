import ReactDom from "react-dom";

const Notifications = (props: {
  title: string;
  message: string;
  status: "success" | "error" | "pending" | "info" | "";
  setReqStatus: () => void;
}) => {
  const { title, message, status, setReqStatus } = props;

  return ReactDom.createPortal(
    <div
      onClick={setReqStatus}
      className="absolute bottom-4 right-4 z-50 space-y-2 rounded-md shadow-lg w-10/12"
    >
      {status === "success" && (
        <div className="p-3 bg-green-500 text-white">
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
      )}

      {status === "error" && (
        <div className="p-3 bg-red-500 text-white">
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
      )}

      {status === "pending" && (
        <div className="p-3 bg-blue-500 text-white">
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
      )}

      {status === "info" && (
        <div className="p-3 bg-gray-600 text-white">
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
      )}
    </div>,
    document.getElementById("notifications-root")!
  );
};

export default Notifications;
