import { useCallback, useState } from 'react';

export interface ModalStateProps {
  defaultOpen?: boolean;
}

export interface ModalState {
  readonly isOpen: boolean;
  text: string;
  userId: number;
  open: ({ text, userId }: {text: string, userId:number}) => () => void;
  close: () => void;
  toggle: () => void;
}

export default function useModalState(props?: ModalStateProps): ModalState {
  const [isOpenState, setOpen] = useState(props?.defaultOpen || false);
  const [propsText, setPropsText] = useState<string>('');
  const [propsTextId, setPropsTextId] = useState<number>(0);
  return {
    isOpen: isOpenState,
    text: propsText,
    userId: propsTextId,
    open: useCallback(({ text, userId }) => () => {
      setOpen(true);
      setPropsText(text);
      setPropsTextId(userId);
    }, []),
    close: useCallback(() => {
      setOpen(false);
    }, []),
    toggle: useCallback(() => {
      setOpen((e) => !e);
    }, []),
  };
}
