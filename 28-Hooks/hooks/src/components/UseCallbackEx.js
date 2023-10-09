//useCallback
// - 매번 함수를 생성하지 않고, 함수를 기억해두었다가 필요할 때마다 함수를 재사용
import React, { useState } from 'react';

export default function UseCallbackEx() {
  const [text, setText] = useState('');
  //[before]
  // text 상태가 업데이트 되면 - 컴포넌트 리렌더링 = 코드를 다시 읽음
  // = onChangeText 함수도 다시 생성 (js func는 object type이라 주소값이 변경)
  // => 불필요한 작업!
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h1>UseCallbackEx</h1>
      <input type="text" onChange={onChangeText} />
      <div>작성한 값:{text || '없음'}</div>
    </div>
  );
}
