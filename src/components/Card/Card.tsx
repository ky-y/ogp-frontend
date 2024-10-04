import React, { ComponentProps, FC } from "react";

import c from "scripts/c";

import scss from "./Card.module.scss";

export const Card: FC<ComponentProps<"div">> = ({ className, ...props }) => {

    return (
        <div
            className={ c(scss.card, className) }
            { ...props }
        />
    );
};