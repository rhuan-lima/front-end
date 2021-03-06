import styled, {keyframes} from 'styled-components';

const slide = keyframes`
   0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
`;
const slideOut = keyframes`
   0% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Container = styled.main`
  background: #FCFCFF;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  section {
    flex: 1;
    background: #6a48d9;
    padding: 20px;
  }

  ul {
    list-style: none;
    width: 100%;
    display: grid;
    grid-template-columns: 48% 48%;
    gap: 4%;
    margin-top: 20px;

    @media screen and (max-width: 768px) {
      grid-template-columns: 100%;
    }

    @media screen and (min-width: 1800px) {
      grid-template-columns: 30% 30% 30%;
      gap: 5%;
    }

    li {
      background: rgba( 255, 255, 255, 0.45 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
      backdrop-filter: blur( 7.0px );
      -webkit-backdrop-filter: blur( 7.0px );
      border-radius: 10px;
      border: 1px solid rgba( 255, 255, 255, 0.18 );
      height: 100px;
      animation: ${slideOut} 0.3s;
      transition: all 0.3s;
      cursor: pointer;

      display: flex;
      
      &:hover {
        background: #00000033;
        animation: ${slide} 0.3s both;
      }

      a {
        padding: 20px;
        flex: 1;
        text-decoration: none;
        color: #FCFCFF;
      }

      p {
        margin-top: 6px;
      }
    }
  }
`;
