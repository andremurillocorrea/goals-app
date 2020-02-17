import React, { useState } from 'react';

import { TouchableWithoutFeedback } from 'react-native';

export default function DoubleTapTouchable(props) {
  const [lastTap, setLastTap] = useState(0);

  function handleTap() {
    const now = Date.now();
  
    if (now - lastTap < props.delay) {
      props.onDoubleTap();
    } else {
      setLastTap(now);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handleTap} onLongPress={props.onLongPress}>
      {props.children}
    </TouchableWithoutFeedback>);
}