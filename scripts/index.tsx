import path from 'path';

export const getFullPath = (fileName: string) =>
  path.resolve(__dirname, fileName).toString();
