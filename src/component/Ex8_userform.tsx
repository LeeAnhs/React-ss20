import React, { useReducer } from 'react';
import '../style/Ex8_userform.css';

interface State {
  name: string;
  email: string;
}

type Action =
  | { type: 'setName'; value: string }
  | { type: 'setEmail'; value: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.value };
    case 'setEmail':
      return { ...state, email: action.value };
    default:
      return state;
  }
}

const Ex8_UserForm: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { name: '', email: '' });

  return (
    <div className="userform-container">
      <h2>User Information Form</h2>
      <div className="userform-fields">
        <label>
          Tên:
          <input
            type="text"
            value={state.name}
            onChange={e => dispatch({ type: 'setName', value: e.target.value })}
            className="userform-input"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={state.email}
            onChange={e => dispatch({ type: 'setEmail', value: e.target.value })}
            className="userform-input"
          />
        </label>
      </div>
      <div className="userform-info">
        <strong>Thông tin người dùng:</strong>
        <div>Tên: {state.name ? state.name : '(Chưa nhập)'}</div>
        <div>Email: {state.email ? state.email : '(Chưa nhập)'}</div>
      </div>
    </div>
  );
};

export default Ex8_UserForm;
