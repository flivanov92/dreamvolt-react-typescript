import styled from 'styled-components';
import * as T from './image.type';

const locationMap = {
  bottom: '2200px',
  center: '1240px',
  null: '0',
};

export const BackgroundImage = styled.div<T.MyImage>`
  background-position-x: right;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
 
  background-image: url(${({ myPath }) => myPath});
  width: 50%;
  height: 480px;
  position: relative;
  bottom: 50px;
  left: 475px;
`;
export const PurpleBackground = styled.div<T.MyImage>`
  background-position-x: right;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ myPath }) => myPath});
  width: 40%;
  height: 500px;
  position: relative;
  left: 400px;
  bottom: 30px;
`;

export const PhoneImage = styled.div<T.MyImage>`
  background-image: url(${({ myPath }) => myPath});
  background-repeat: no-repeat;
  margin-left: 30px;
  position: absolute;
  width: 20%;
  height: 50%;
  left: 700px;
  bottom: 20px;
`;
export const EvPhoneImage = styled.div<T.MyImage>`
  background-image: url(${({ myPath }) => myPath});
  background-repeat: no-repeat;
  margin-left: 30px;
  position: absolute;
  width: 20%;
  height: 50%;
  left: 715px;
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
  left: 750px;
  z-index: 20;
`;
