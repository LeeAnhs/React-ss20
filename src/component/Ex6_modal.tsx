import React, { useRef, useEffect, useState } from 'react';
import '../style/Ex6_modal.css';

const Ex6_Modal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  return (
    <div className="modal-demo-container">
      <h2>Ứng dụng React với Modal và Focus Input</h2>
      <button className="modal-btn" onClick={() => setOpen(true)}>Mở Modal</button>
      {open && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Đăng nhập</h3>
            <input
              ref={inputRef}
              type="text"
              placeholder="Nhập tên người dùng"
              className="modal-input"
            />
            <button className="modal-close-btn" onClick={() => setOpen(false)}>Đóng</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ex6_Modal;
