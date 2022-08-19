import { Typography } from 'antd';
import React, { FC } from 'react';
import Container from '../Container';

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <Container
      style={{
        marginTop: "3rem",
        textAlign: "center",
      }}
    >
      <Typography.Text>
        © Yusril A. P. {year} All rights reserved
      </Typography.Text>
    </Container>
  );
};

export default Footer;
