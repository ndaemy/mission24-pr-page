import type { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: ReactNode;
  selector: string;
};

const Portal: FC<PortalProps> = ({ children, selector }) => {
  const element = typeof window !== "undefined" && document.querySelector(selector);
  return element && children ? createPortal(children, element) : null;
};

export default Portal;
