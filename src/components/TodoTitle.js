import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  position: absolute;
  top: 0.5px; left: 920px;
  
  h1 {
    font-size: 40px;
    color: #fad51e;
  }
`;

function TodoTitle(){
    return(
        <Title>
            <h1>Todo</h1>
        </Title>
    );
}

export default TodoTitle;
