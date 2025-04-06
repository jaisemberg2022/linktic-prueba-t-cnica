import { JSX } from "react";
import { StatesFetchTypes } from "../../utils/types";

export interface EmptyStateProps {
    title?:string,
    subtitle?:string,
    type?:StatesFetchTypes,
    url?:string,
    extraComponent?: JSX.Element
}



