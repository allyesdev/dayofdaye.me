'use client';

import { atom, useAtom } from 'jotai';

interface Backdrop {
  backdropOpen: boolean;
  onBackdropClick: () => void;
}

export const backdropAtom = atom<Backdrop>({
  backdropOpen: false,
  onBackdropClick: () => {},
});

export const Backdrop = () => {
  const [{ backdropOpen, onBackdropClick }] = useAtom(backdropAtom);
  return (
    backdropOpen && (
      <div className='fixed inset-0 -z-1' onClick={onBackdropClick} />
    )
  );
};
