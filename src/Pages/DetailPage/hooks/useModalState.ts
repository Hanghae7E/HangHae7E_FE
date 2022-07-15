import { useCallback, useState } from 'react';

export interface ModalStateProps {
  defaultOpen?: boolean;
}

export interface ModalState {
  readonly isOpen: boolean;
  text: string;
  open: ({ text }: {text: string}) => () => void;
  close: () => void;
  toggle: () => void;
}

export default function useModalState(props?: ModalStateProps): ModalState {
  const [isOpenState, setOpen] = useState(props?.defaultOpen || false);
  const [propsText, setPropsText] = useState<string>('');

  return {
    isOpen: isOpenState,
    text: propsText,
    open: useCallback(({ text }) => () => {
      setOpen(true);
      setPropsText(text);
    }, []),
    close: useCallback(() => {
      setOpen(false);
    }, []),
    toggle: useCallback(() => {
      setOpen((e) => !e);
    }, []),
  };
}
