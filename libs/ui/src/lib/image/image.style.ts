import styled from 'styled-components';
import * as T from './image.type';

const locationMap = {
  bottom: '2400px',
  center: '1600px',
  null: '0',
};

export const BackgroundImage = styled.div<T.MyImage>`
  background-position-x: right;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  /* grid-gap: 10px; */
  background-image: url(${({ myPath }) => myPath});
  width: 50%;
  height: 800px;
  position: relative;
  bottom: 250px;
  left: 500px;
`;
export const PurpleBackground = styled.div<T.MyImage>`
  background-position-x: right;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ myPath }) => myPath});
  width: 22%;
  height: 400px;
  position: relative;
  left: 800px;
  bottom: 30px;
`;

export const PhoneImage = styled.div<T.MyImage>`
  background-image: url(${({ myPath }) => myPath});
  background-repeat: no-repeat;
  margin-left: 30px;
  position: absolute;
  width: 11%;
  height: 42%;
  left: 930px;
  bottom: 200px;
`;
export const EvPhoneImage = styled.div<T.MyImage>`
  background-image: url(${({ myPath }) => myPath});
  background-repeat: no-repeat;
  margin-left: 30px;
  position: absolute;
  width: 11%;
  height: 42%;
  left: 930px;
  top: ${({ location }) => locationMap[location]};
  z-index: 20;
`;

export const Button = styled.div<T.MyImage>`
  width: ${({ myPath }) => (myPath === 'btn-apple.png' ? 151 : 169)}px;
  height: 50px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/image/${({ myPath }) => myPath}');
  display: inline-block;
  margin-left: 50px;
`;
export const EvButton = styled.div<T.MyImage>`
  width: 151px;
  height: 50px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/image/${({ myPath }) => myPath}');
  position: absolute;
  left: 965px;
  z-index: 20;
`;
