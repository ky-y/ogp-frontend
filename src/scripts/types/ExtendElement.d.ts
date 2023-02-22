import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

type ExtendElement<ElType> = FC<DetailedHTMLProps<HTMLAttributes<ElType>, ElType>>;
export default ExtendElement;