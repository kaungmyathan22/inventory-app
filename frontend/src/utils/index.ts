import { toast } from "react-toastify";
type MessageType = "success" | "error";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getResponseMessage(data: any, type: MessageType = "error") {
  const defaultErrorMessage: string = "Something went wrong";
  const defaultSuccessMessage: string = "Success";
  const message =
    type === "error"
      ? data?.response?.data?.message || defaultErrorMessage
      : data?.message || defaultSuccessMessage;
  console.log({ message });
  if (type === "error") {
    toast.error(message, {
      toastId: message,
    });
  } else {
    toast.success(message, { toastId: message });
  }
}
