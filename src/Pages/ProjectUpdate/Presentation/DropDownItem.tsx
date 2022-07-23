/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Menu } from '@headlessui/react';
import React from 'react';

export default function DropDownItem(
  {
    children,
    setCarrer,
  }:
{
children: JSX.Element,
setCarrer: React.Dispatch<React.SetStateAction<string>>
},
) {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }
  const setItem = () => {
    setCarrer(children.props.children);
  };
  return (
    <Menu.Item>
      {({ active }) => (
        <div
          onClick={setItem}
          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
        >
          {children}
        </div>
      )}
    </Menu.Item>
  );
}
