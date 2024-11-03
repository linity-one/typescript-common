import { FC, ReactNode } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XIcon } from "../ui/Icons";

interface ModalProps {
  isOpen: boolean;
  close: () => void;
  className?: string;
  children: ReactNode;
  title?: string;
}

const Modal: FC<ModalProps> = ({
  title,
  isOpen,
  close,
  className,
  children,
}) => {
  return (
    <Dialog open={isOpen} onClose={() => close()}>
      <DialogBackdrop className="fixed inset-0 bg-primary-950/60" />
      <div className="fixed flex inset-0 w-screen items-center justify-center p-8">
        <DialogPanel className="flex flex-col gap-2 min-w-60 bg-white w-fit p-xl rounded-xl">
          <div className="flex flex-row justify-between">
            {title && <DialogTitle as="h3">{title}</DialogTitle>}
            <div onClick={() => close()}>
              {" "}
              <XIcon className="hover:scale-125" size="large" />
            </div>
          </div>
          <div>{children}</div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modal;
