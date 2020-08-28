import React, { useRef, FC, useEffect } from 'react';
type ComponentProps = {
  score: number;
  children?: any;
  superText?: any;
  subText?: any;
};
const DonutText: FC<ComponentProps> = ({
  score,
  superText,
  children = 0,
  subText = 0,
}) => {
  const innerTextRef: any = useRef(0);
  const speed = 450;
  const updateCount = () => {
    const target = score;
    const count = innerTextRef.current.innerText;
    let myScore = +count;
    const inc = target / speed;
    if (myScore < target) {
      const total = myScore + inc;
      innerTextRef.current.innerText = `${Math.ceil(total)}`;
      setTimeout(updateCount, 40);
    } else {
      innerTextRef.current.innerText = `${target}`;
    }
  };
  useEffect(() => {
    updateCount();
  });
  return (
    <>
      {superText && <div className="super">{superText}</div>}
      {subText && (
        <div ref={innerTextRef} className="sub">
          {subText}
        </div>
      )}
    </>
  );
};

export default DonutText;
