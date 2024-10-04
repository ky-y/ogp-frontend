import React, { ComponentProps, FC } from "react";

import c from "scripts/c";

import scss from "./Title.module.scss";

export const Title: FC<ComponentProps<"div">> = ({ className, ...props }) => {

    return (
        <div
            className={ c(scss.title, className) }
            { ...props }
        />
    );
};