import React, { useState, useMemo } from 'react';

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  //[before]
  // const calc = () => {
  //   console.log('열심히 계산 중...');
  //   for (let i = 0; i < 100000; i++) {}
  //   return count ** 2;
  // };

  //[after]
  const calc = useMemo(() => {
    for (let i = 0; i < 100000; i++) {}
    return count ** 2;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setCount(() => count + 1)}>Plus</button>
      <p>count :{count} </p>
      {/* [before] */}
      {/* <p>calc :{calc()} </p> */}
      {/* [after] */}
      <p>calc :{calc} </p>
    </div>
  );
}
