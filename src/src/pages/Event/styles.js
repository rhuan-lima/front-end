import styled from 'styled-components';

export const Container = styled.main`
   background: #FCFCFF;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  section {
    flex: 1;
    background: #6a48d9;
    padding: 20px;

    @media screen and (max-width: 768px) {
      padding-bottom: 64px;
    }
  }

  ul {
    list-style: none;
    width: 100%;
    display: grid;
    grid-template-columns: 48% 48%;
    gap: 4%;
    margin: 20px 0;

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
      height: 100%;
      transition: all 0.3s;
      display: flex;
      flex-direction: column;
      padding: 20px;

      p {
        margin-top: 6px;
      }
    }
  }

`;
