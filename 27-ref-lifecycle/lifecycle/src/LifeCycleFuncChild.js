import React, { useEffect } from 'react';

export default function LifeCycleFuncChild({ number }) {
  useEffect(() => {
    console.log('컴포넌트 마운트 !!');
  }, []);

  useEffect(() => {
    console.log('컴포넌트 마운트 or 업데이트!!');
  });

  return (
    <div>
      <div>현재 Number 값은 {number}</div>
    </div>
  );
}
