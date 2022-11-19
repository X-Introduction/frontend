import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { IcLoginLogo } from '../../src/asset/icon';

const ReLogin = () => {
  const navigate = useNavigate();
  const goToCategory = () => {
    navigate('/category');
  };

  const passwordCondition = /^[0-9]{4}$/;

  const [passwordMessage, setPasswordMessage] = useState('');

  // 비밀번호 4개의 숫자 데이터 검사
  const checkPassword = (e) => {
    console.log('비밀번호 유효성 검사 :: ', passwordCondition.test(e.target.value));
    const message = '비밀번호 네 자리를 다시 입력해주세요.';
    passwordCondition.test(e.target.value) == false && setPasswordMessage(message);
  };

  return (
    <StWrapper>
      <IcLoginLogo width="205" />
      <StInput>
        <input
          className="password"
          type="password"
          placeholder="비밀번호 네 자리를 입력하세요."
          onBlur={checkPassword}
        />
        <StMessage>{passwordMessage}</StMessage>
      </StInput>
      <button onClick={goToCategory}>다음</button>
    </StWrapper>
  );
};

export default ReLogin;

const StWrapper = styled.div`
  font-family: 'S-CoreDream-3Light';
  width: 39rem;
  height: 84.4rem;
  background-color: #ffeff1;
  margin: auto;
  padding-top: 20.5rem;
  text-align: center;

  button {
    width: 14.3rem;
    height: 4.8rem;
    margin-top: 11.8rem;
    border: 0.2rem solid #000000;
    font-size: 2.2rem;
    font-weight: 500;
    border-radius: 10rem;
    background: #ffffff;
    cursor: pointer;
  }
`;

const StInput = styled.div`
  input {
    width: 32.1rem;
    height: 5.4rem;
    padding-left: 1.6rem;
    border-radius: 0.5rem;
    border-style: none;
  }
  input::placeholder {
    font-size: 1.4rem;
    font-weight: 500;
    color: #9e9696;
  }

  .password {
    margin-top: 5rem;
  }
`;

const StMessage = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: #a63030;
  margin-top: 1.1rem;
  display: flex;
  margin-left: 3.4rem;
`;
