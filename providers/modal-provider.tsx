'use client';
import SearchModal from '@/components/Search-Modal';
import { useEffect, useState } from 'react';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SearchModal />
    </>
  );
};

export default ModalProvider;
