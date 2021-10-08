import React, { useState } from 'react';

type WithHoverType = {
    textHover: boolean;
    textColor: string;
};
export function WithHoverHOC<P>(
  WrappedComponent: React.ComponentType<P & WithHoverType>
  ) {
  
  const ComponentWithHover = (props: P) => {
    const [textHover, setHover] = useState(false);
    const [textColor, setTextColor] = useState('#888');
      return <WrappedComponent {...props}
                textColor={textColor}
                textHover={textHover}
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => setTextColor('red')}
            />;
  };
  return ComponentWithHover;
}
