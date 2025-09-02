import React, { useEffect } from 'react';
import '../style/Ex3_welcome.css';

const Ex3_Welcome: React.FC = () => {
  useEffect(() => {
    console.log('Component Ex3_Welcome được render lần đầu!');
  }, []);

  return (
    <div className="welcome-container">
      <h2>Chào mừng bạn đến với ứng dụng của chúng tôi!</h2>
    </div>
  );
};

export default Ex3_Welcome;
