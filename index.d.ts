interface NxStatic {
  deepEach: (
    target: any,
    callback: (key: string, value: any, target: any, isary: boolean, paths: string[]) => void,
    context?: any
  ) => void;
}
