import React from 'react';
import useToggle from '../hooks/useToggle';

export default function Faq() {
  const [isFaqOpen, setIsFaqOpen] = useToggle();

  return (
    <div>
      <h1>custom hook (useToggle) EX</h1>
      <div onClick={setIsFaqOpen} style={{ cursor: 'pointer' }}>
        탕!!!
      </div>
      {isFaqOpen && <div>휙 피했지롱.</div>}
    </div>
  );
}
