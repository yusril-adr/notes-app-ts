import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode,
  style?: {
    [key: string]: number | string,
  },
};

const Container: FC<Props> = ({ children, style }) => (
  <div style={{
    padding: '1rem',
    margin: 'auto',
    ...style,
  }}>
    {children}
  </div>
);

export default Container;
