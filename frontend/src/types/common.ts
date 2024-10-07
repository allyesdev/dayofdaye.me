export interface IErrorMessage {
  message: string;
}

export interface IMenu {
  title: string;
  icon?: any;
  path: string;
  handleClick?: () => void;
}
