import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="first-content">
          <span>First</span>
        </div>
        <div className="second-content">
          <p>Crown and bridge Specialized restoration of missing teeth with crowns, bridges, and complete dentures for full functionality.</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 18rem;
    padding: 1rem;
    background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkJS2EugrlJNbQO5Wi2kh4c7xgU74sC_KwgA&s');
    filter: brightness(0.8);
    background-size: cover;
    transition: all 0.4s;
    border-radius: 15px;
    // box-shadow: 0px 0px 10px 5px  rgba(0, 0, 0, 0.705);
    font-size: 30px;
    font-weight: 900;
    }
    
  .card:hover {
    border-radius: 15px;
    cursor: pointer;
    // box-shadow: 0px 0px 10px 5px  rgba(0, 0, 0, 0.705);
    background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkJS2EugrlJNbQO5Wi2kh4c7xgU74sC_KwgA&s');
    background-size: cover;
    // filter: brightness(0.6);
  }

  .first-content {
    height: 100%;
    width: 100%;
    transition: all 0.4s;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    border-radius: 15px;
  }

  .card:hover .first-content {
    height: 0px;
    opacity: 0;
  }

  .second-content {
    height: 0%;
    width: 100%;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    transition: all 0.4s;
    font-size: 0px;
    text-align: center;
    transform: rotate(0deg) scale(-1);
    color: #fff;
    font-weight: 500;
  }

  .card:hover .second-content {
    opacity: 1;
    height: 100%;
    font-size: .8rem;
    transform: rotate(0deg);
  }`;

export default Card;
