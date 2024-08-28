import { toast, toast as sonnerToast } from "sonner";
import { ReactNode } from "react";
import {
  AlertIcon,
  ErrorIcon,
  InformationIcon,
  SuccessIcon,
  XIcon,
} from "@/common/ui/Icons";
import LoadingAnimation from "@/common/ui/LoadingAnimation";

export const infoToast = (message: string) => {
  sonnerToast.custom((t) => (
    <div className="flex flex-row bg-white p-2 gap-2 items-center rounded-md border border-primary-950">
      <InformationIcon size="default" className="text-primary-950" />
      <span className="text-primary-950 text-text flex-grow whitespace-nowrap overflow-hidden">
        {message}
      </span>
      <div className="text-primary-950" onClick={() => toast.dismiss(t)}>
        <XIcon size="default" />
      </div>
    </div>
  ));
};

export const successToast = (message: string) => {
  sonnerToast.custom((t) => (
    <div className="flex flex-row bg-white p-2 gap-2 items-center rounded-md border border-success">
      <SuccessIcon size="default" className="text-success" />
      <span className="text-primary-950 text-text flex-grow whitespace-nowrap overflow-hidden">
        {message}
      </span>
      <div className="text-primary-950" onClick={() => toast.dismiss(t)}>
        <XIcon size="default" />
      </div>
    </div>
  ));
};

export const alertToast = (message: string) => {
  sonnerToast.custom((t) => (
    <div className="flex flex-row bg-white p-2 gap-2 items-center rounded-md border border-warning">
      <AlertIcon size="default" className="text-warning" />
      <span className="text-primary-950 text-text flex-grow ">{message}</span>
      <div className="text-primary-950" onClick={() => toast.dismiss(t)}>
        <XIcon size="default" />
      </div>
    </div>
  ));
};

export const errorToast = (message: string) => {
  sonnerToast.custom((t) => (
    <div className="flex flex-row bg-white p-2 gap-2 items-center rounded-md border border-error">
      <ErrorIcon size="default" className=" text-error" />
      <span className="text-primary-950 text-text flex-grow ">{message}</span>
      <div className="text-primary-950" onClick={() => toast.dismiss(t)}>
        <XIcon size="default" />
      </div>
    </div>
  ));
};

const loadingToast = (message: string) => {
  const id = sonnerToast.custom((t) => (
    <div className="flex flex-row bg-white p-2 gap-2 items-center rounded-md border border-primary-950">
      <LoadingAnimation size="default" />
      <span className="text-primary-950 text-text flex-grow whitespace-nowrap overflow-hidden">
        {message}
      </span>
      <div className="text-primary-950" onClick={() => toast.dismiss(t)}>
        <XIcon size="default" />
      </div>
    </div>
  ));
  return id;
};

// Promise Toast
export const promiseToast = <T,>(
  promise: Promise<T>,
  messages: { pending: string; success: string; error: string },
): Promise<T> => {
  // Display the loading toast
  const toastId = loadingToast(messages.pending);

  // Handle promise resolution and rejection
  return promise
    .then((result) => {
      sonnerToast.custom(
        (t) => (
          <div className="flex flex-row bg-white p-2 gap-2 items-center rounded-md border border-success">
            <SuccessIcon size="default" className="text-success" />
            <span className="text-primary-950 text-text flex-grow whitespace-nowrap overflow-hidden">
              {messages.success}
            </span>
            <div className="text-primary-950" onClick={() => toast.dismiss(t)}>
              <XIcon size="default" />
            </div>
          </div>
        ),
        { id: toastId },
      );
      return result;
    })
    .catch((error) => {
      sonnerToast.custom(
        (t) => (
          <div className="flex flex-row bg-white p-2 gap-2 items-center rounded-md border border-error">
            <ErrorIcon size="default" className=" text-error" />
            <span className="text-primary-950 text-text flex-grow ">
              {messages.error}
            </span>
            <div className="text-primary-950" onClick={() => toast.dismiss(t)}>
              <XIcon size="default" />
            </div>
          </div>
        ),
        { id: toastId },
      );
      throw error;
    });
};
