import React, { useState, useEffect } from 'react';
import '../style/Ex4_pagetitle.css';

const Ex4_PageTitle: React.FC = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (name) {
      document.title = `${name}`;
    } else {
      document.title = 'My Vite + React App';
    }
  }, [name]);

  return (
    <div className="pt-container">
      <h2>Chào mừng bạn đến với trang của chúng tôi!</h2>
      <input
        type="text"
        placeholder="Nhập tên của bạn"
        value={name}
        onChange={e => setName(e.target.value)}
        className="pt-input"
      />
      <div className="pt-note">
        Tiêu đề trang sẽ thay đổi dựa trên nhập liệu vào trường tên.
      </div>
    </div>
  );
};

export default Ex4_PageTitle;
