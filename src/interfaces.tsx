interface NavigateMethod {
  (source: string): boolean;
}

export interface Navigation {
  navigate: NavigateMethod;
}