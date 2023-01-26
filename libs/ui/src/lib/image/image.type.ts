
export interface MyImage {
  type?:
    | 'button'
    | 'background'
    | 'phone'
    | 'purplebackground'
    | 'evbutton'
    | 'evphoneimage';
  myPath?: string;
  location: 'bottom' | 'center' | 'null';
  bottom?: '2100px';
  dataTestid?: string;
}
