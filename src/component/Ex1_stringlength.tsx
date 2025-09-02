import React, { useState } from 'react';
import '../style/Ex1_stringlength.css';

const Ex1_StringLength: React.FC = () => {
  const [input, setInput] = useState('');
  const isLong = input.length > 5;
  return (
    <div className="slc-container">
      <h2>Kiểm tra độ dài chuỗi nhập vào</h2>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Nhập vào đây"
        className="slc-input"
      />
      {isLong && (
        <div className="slc-warning">Chuỗi nhập vào dài hơn 5 ký tự!</div>
      )}
    </div>
  );
};

export default Ex1_StringLength;
