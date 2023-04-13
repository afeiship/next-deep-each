interface NxStatic {
  deepEach: (
    target: any,
    callback: (key: string, value: any, target: any) => void,
    context?: any
  ) => void;
}
