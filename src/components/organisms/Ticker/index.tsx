import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './_ticker.scss';
const Ticker = (props: {
  items: any;
  activeIndex: number;
  entered?: any;
  exited?: any;
}) => {
  const { items, activeIndex, entered, exited } = props;
  const duration = { enter: 2000, exit: 500 };
  const STAGGER = 1000;
  const listItem = () => {
    return items.map((item: any, index: number) => (
      <CSSTransition
        appear
        timeout={{
          enter: duration.enter + index * STAGGER,
          exit: duration.exit,
        }}
        key={item.id}
        classNames="todo"
      >
        {(state: any) => {
          console.log('State', state, ':', index);
          return <>{item.task}</>;
        }}
      </CSSTransition>
    ));
  };
  return (
    <div>
      <TransitionGroup appear className="list">
        <CSSTransition
          onEntered={entered}
          onExited={exited}
          timeout={{
            enter: duration.enter,
            exit: duration.exit,
          }}
          key={items[activeIndex].id}
          classNames="todo"
        >
          {(state: any) => {
            console.log('State', state, ':', 1);
            return <div>{items[activeIndex].task}</div>;
          }}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
Ticker.propTypes = {};
Ticker.defaultProps = {};

export default Ticker;
