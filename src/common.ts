/* eslint-disable @typescript-eslint/no-explicit-any */

export type FileObjectType = {
  id: number;
  name: string;
  path: string;
  pythonExe: string;
};

export type ClickableUploadIconType = {
  width: string; // "100px"
  height: string; // "100px"
  setFiles: any;
};

export type ClickableFileRowType = {
  key: string;
  width: string; // "100px"
  height: string; // "100px"
  file: FileObjectType;
  setFiles: any;
};

export type RunButtonType = {
  file: FileObjectType;
};

export type RemoveButtonType = {
  file: FileObjectType;
  setFiles: any;
};

export const parseKeyFromFilePath = (path: string) => {
  const key = path.slice(0, path.length - 3);

  return key;
};

export const sortStore = (store: any) => {
  const keys = Object.keys(store);
  let data = keys.map((key: string) => [key, store[key].id]);

  data = data.sort((a: any, b: any) => {
    return b[1] - a[1];
  });

  const sortedStore = {};

  for (let j = 0; j < data.length; j += 1) {
    const key: any = data[j][0];
    (sortedStore as any)[key] = store[key];
  }

  return sortedStore;
};
