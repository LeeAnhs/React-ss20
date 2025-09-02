import React, { useReducer } from 'react';
import '../style/Ex7_counter.css';

function reducer(state: number, action: { type: 'inc' | 'dec' }) {
  switch (action.type) {
    case 'inc':
      return state + 1;
    case 'dec':
      return state - 1;
    default:
      return state;
  }
}

const Ex7_Counter: React.FC = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="counter-container">
      <div className="counter-value">Số đếm: {count}</div>
      <div className="counter-btns">
        <button className="counter-btn" onClick={() => dispatch({ type: 'inc' })}>Tăng</button>
        <button className="counter-btn" onClick={() => dispatch({ type: 'dec' })}>Giảm</button>
      </div>
    </div>
  );
};

export default Ex7_Counter;
