let globalWindow: Window | undefined;

export const setWindow = (win: Window) => {
  globalWindow = win;
};

export const getWindow = (): Window => {
  return globalWindow || window;
};

export const getDocument = (): Document => {
  return globalWindow && globalWindow.document || document;
};
