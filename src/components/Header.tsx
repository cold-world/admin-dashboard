import React from 'react';
import { FiMenu } from 'react-icons/fi';

type Props = {};

export const Header = (props: Props) => {
  return (
    <header>
      <div>
        <FiMenu />
      </div>
      <div>stuff</div>
    </header>
  );
};
