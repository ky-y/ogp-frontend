import React, { FC } from "react";

import Card, { Title } from "components/Card";
import Input from "components/Input";

import scss from "./Form.module.scss";

export const Form: FC = () => {

    return (
        <section>
            <div className="inner-sm">

                <Card className={ scss.card }>
                    <Title className={ scss.title }>
                        Login / Sign Up
                    </Title>

                    <Input
                        type="email"

                    />
                </Card>
            </div>
        </section>
    );
};