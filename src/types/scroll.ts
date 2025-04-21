export interface IScroll {
  isAtTop: boolean;
  isAtBottom: boolean;
  userScrolled: boolean;
  isOverflowing: boolean;
  isAutoScrolling: boolean;
  currentHash?: string;
}
