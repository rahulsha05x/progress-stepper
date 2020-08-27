import React, { useRef, FC, useEffect } from 'react';
type ComponentProps = {
  score: number;
  children: any;
};
const DonutText: FC<ComponentProps> = ({ score, children = 0 }) => {
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
      <div className="super">Developing</div>
      <div ref={innerTextRef} className="sub">
        {children}
      </div>
    </>
  );
};

export default DonutText;
