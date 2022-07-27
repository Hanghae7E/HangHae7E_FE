/* eslint-disable camelcase */
import { useCallback, useState } from 'react';

export interface ModalStateProps {
  defaultOpen?: boolean;
}

export interface ModalState {
  readonly isOpen: boolean;
  text: string;
  userId: number;
  userImg:string;
  open: ({ text, userId, userImg }: {
    text: string, userId:number, userImg:string}) => () => void;
  close: () => void;
  toggle: () => void;
}

export default function useModalState(props?: ModalStateProps): ModalState {
  const [isOpenState, setOpen] = useState(props?.defaultOpen || false);
  const [propsText, setPropsText] = useState<string>('');
  const [propsImg, setPropsImg] = useState<string>('');
  const [propsTextId, setPropsTextId] = useState<number>(0);
  return {
    isOpen: isOpenState,
    text: propsText,
    userId: propsTextId,
    userImg: propsImg,
    open: useCallback(({ text, userId, userImg }) => () => {
      setOpen(true);
      setPropsText(text);
      setPropsImg(userImg);
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
