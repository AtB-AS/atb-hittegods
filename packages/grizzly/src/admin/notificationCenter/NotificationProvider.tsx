import * as React from "react";
import { createPortal } from "react-dom";

import Notification from "./Notification";

type Message = {
  type: "info" | "success" | "error";
  description: string;
};

type NotificationContext = {
  notify: (payload: Message) => void;
};

export const NotificationContext = React.createContext<NotificationContext>({
  notify: () => {},
});

function useCreateDomElement() {
  const [domElement, setDomElement] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    const element = document.createElement("div");
    document.body.appendChild(element);
    setDomElement(element);

    return () => {
      document.body.removeChild(element);
    };
  }, []);

  return domElement;
}

type NotificationMessage = {
  id: string;
  description: string;
  type: "info" | "success" | "error";
  onClose: () => void;
};

function useNotifications() {
  const [notifications, setNotifications] = React.useState<
    NotificationMessage[]
  >([]);

  const notify = React.useCallback((notificationPayload) => {
    const id = "something";

    function removeNotification() {
      setNotifications((notifications) =>
        notifications.filter((n) => n.id !== id)
      );
    }

    setNotifications((notifications) => [
      ...notifications,
      { id, onClose: removeNotification, ...notificationPayload },
    ]);
  }, []);

  return { notify, notifications };
}

const NotificationProvider: React.FC = ({ children }) => {
  const notificationRoot = useCreateDomElement();

  const { notify, notifications } = useNotifications();

  return (
    <>
      <NotificationContext.Provider value={{ notify }}>
        {children}
      </NotificationContext.Provider>
      {notificationRoot &&
        createPortal(
          <div>
            {notifications.map((notification) => (
              <Notification key={notification.id} {...notification} />
            ))}
          </div>,
          notificationRoot
        )}
    </>
  );
};

export default NotificationProvider;
