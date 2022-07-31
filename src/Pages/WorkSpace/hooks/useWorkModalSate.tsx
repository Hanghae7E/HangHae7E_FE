/* eslint-disable camelcase */
import { useCallback, useState } from 'react';

export interface ModalStateProps {
  defaultOpen?: boolean;
}

export interface ModalState {
  readonly isOpen: boolean;
  data?: string;
  open: ({ data }: {
    data:string}) => () => void;
  close: () => void;
  toggle: () => void;
}

export default function useWorkModalSate(props?: ModalStateProps): ModalState {
  const [isOpenState, setOpen] = useState(props?.defaultOpen || false);
  const [propsData, setPropsText] = useState<string>('');

  return {
    isOpen: isOpenState,
    data: propsData,
    open: useCallback(({ data }) => () => {
      setOpen(true);
      setPropsText(data);
    }, []),
    close: useCallback(() => {
      setOpen(false);
    }, []),
    toggle: useCallback(() => {
      setOpen((e) => !e);
    }, []),
  };
}
