import React, { useEffect, useState } from 'react';

export default function LifeCycleFuncChild({ number }) {
  const [input, setInput] = useState('');
  useEffect(() => {
    console.log('컴포넌트 마운트 !!');
  }, []);

  useEffect(() => {
    console.log('컴포넌트 마운트 or 업데이트!!');
  });

  useEffect(() => {
    console.log(
      '컴포넌트 마운트 or input 상태가 변경됨에 따라 컴포넌트 업데이트'
    );
  }, [input]);

  return (
    <div>
      <div>현재 Number 값은 {number}</div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
