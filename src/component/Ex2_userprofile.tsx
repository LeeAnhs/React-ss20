import React, { useState } from 'react';
import '../style/Ex2_userprofile.css';

const Ex2_UserProfile: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="up-container">
      <h2>Thông tin người dùng</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nhập tên"
          value={name}
          onChange={e => { setName(e.target.value); setSubmitted(false); }}
          className="up-input"
        />
        <input
          type="email"
          placeholder="Nhập email"
          value={email}
          onChange={e => { setEmail(e.target.value); setSubmitted(false); }}
          className="up-input"
        />
        <button type="submit" className="up-btn">Gửi</button>
      </form>
      {submitted && (
        <div className="up-result">
          <div>Tên: {name}</div>
          <div>Email: {email}</div>
        </div>
      )}
    </div>
  );
};

export default Ex2_UserProfile;
