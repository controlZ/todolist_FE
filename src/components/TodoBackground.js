import React from 'react';
import styled from 'styled-components';
import bear1 from '../images/bear1.png';
import bear2 from '../images/bear2.png';
import bear3 from '../images/bear3.png';
import bear4 from '../images/bear4.png';
import bear5 from '../images/bear5.png';
import bear6 from '../images/bear6.png';

const BackGround1 = styled.div`
  position: absolute;
  top: 90px; left: 100px;
`;

const BackGround2 = styled.div`
  position: absolute;
  top: 350px; left: 420px;
`;

const BackGround3 = styled.div`
  position: absolute;
  top: 650px; left: 200px;
`;

const BackGround4 = styled.div`
  position: absolute;
  top: 100px; right: 200px;
`;

const BackGround5 = styled.div`
  position: absolute;
  top: 385px; right: 350px;
`;

const BackGround6 = styled.div`
  position: absolute;
  top: 650px; right: 80px;
`;

function TodoBackGround() {
    return(
        <>
        <BackGround1><img src={bear1} /></BackGround1>
        <BackGround2><img src={bear2} /></BackGround2>
            <BackGround3><img src={bear3} /></BackGround3>
            <BackGround4><img src={bear4} /></BackGround4>
            <BackGround5><img src={bear5} /></BackGround5>
            <BackGround6><img src={bear6} /></BackGround6>
        </>
    );
}

export default TodoBackGround;