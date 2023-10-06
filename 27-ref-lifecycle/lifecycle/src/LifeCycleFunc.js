import React, { useState } from 'react';
import LifeCycleFuncChild from './LifeCycleFuncChild';

export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0); //1
  const changeNumber = () => {
    //2
    setNumber(number + 1);
  };
  return (
    <div>
      {/* 3 */}
      <button onClick={changeNumber}>Plus</button>
      {/* 4 */}
      <LifeCycleFuncChild number={number} />
    </div>
  );
}
