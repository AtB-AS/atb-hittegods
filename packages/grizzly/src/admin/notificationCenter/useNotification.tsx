import * as React from "react";
import { NotificationContext } from "./NotificationProvider";

function useNotification() {
  return React.useContext(NotificationContext);
}

export default useNotification;
