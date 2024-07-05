import styled from 'styled-components';

export const ServicesComponentContainer = styled.div`
  padding: 100px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${({ background }) => background || '#fff'};
 
@media (max-width: 768px) {
  padding: 50px 20px;
}
`;

export const ServicesComponentContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 50px;
  max-width: 1120px;  
   
@media (max-width: 990px) {
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
}
`;

export const ServicesComponentLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2{
    color: #000000;
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
  }

  p{
    color: #111111;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    max-width: 550px;
  }

  button{
    background: #229B7D;
    border-radius: 36px;
    color: #FFFFFF;
    font-size: 17px;
    font-weight: 600;
    width: 150px;
    padding: 10px 20px;
    margin-top: 20px;
  }
    
@media (max-width: 990px) {
  justify-content: center;
  align-items: center;
  
  h2{
    text-align: center;
  }

  p{
    text-align: center;
  }
}

@media (max-width: 768px) {
  justify-content: center;
  align-items: center;
  
  h2{
    font-size: 32px;
    text-align: center;
  }

  p{
    font-size: 14px;
    line-height: 26px;
    text-align: center;
  }
}
`;


export const ServicesComponentRight = styled.div`
max-width: 500px;
img{
    opacity: 1;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    border-radius: 30px;
    display: inline-block;
    box-shadow: 3px 3px 9px rgba(0, 0, 0, .65);
    width: 500px;
    height: 400px;
}

@media (max-width: 768px) {
  max-width: 300px;
  img{
    width: 100%;
    min-width: 300px;
    height: 100%;
    max-height: 300px;
  }
}
`;