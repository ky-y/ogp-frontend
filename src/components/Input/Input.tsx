import React, { ComponentProps, FC } from "react";

import c from "scripts/c";

import scss from "./Input.module.scss";

export const Input: FC<ComponentProps<"input">> = ({ className, ...props }) => {

    return (
        <input
            className={ c(scss.input, className) }
            { ...props }
        />
    );
};