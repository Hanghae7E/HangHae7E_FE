import React from 'react';

import { createPortal } from 'react-dom';

interface IportalProps {
  children: React.ReactNode;
}
function Portal(props: IportalProps) {
  const modalRoot = document.getElementById('portal') as HTMLElement;
  return createPortal(props.children, modalRoot);
}

export default Portal;
