import _ from 'lodash';

export const isDevelopService = (serviceType: string) =>
  ['template'].includes(serviceType);

// FUNCTIONS
export const sleep = (t: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, t);
  });

export const getAlternatedList = (data1: any[], data2: any[]): any[] => {
  const result: any[] = [];
  let turn1 = true;

  while (data1.length > 0 || data2.length > 0) {
    if (turn1 && data1.length > 0) {
      result.push(data1.shift()!);
    } else if (!turn1 && data2.length > 0) {
      result.push(data2.shift()!);
    }
    turn1 = !turn1;
  }
  return result;
};

export const getShuffledList = (list: any[]): any[] => {
  const shuffledList = _.clone(list);
  for (let i = shuffledList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
  }
  return shuffledList;
};

// FILE
export const getHumanizedFileSize = (val: any) => {
  const num = Number(val);
  if (isNaN(num)) return val;

  let size = 0;
  const units = ['B', 'kB', 'MB', 'GB', 'TB', 'PB'];
  for (let i = 0; i < units.length; i++) {
    size = num / 1024 ** i;
    if (size < 1024) {
      if (size % 1 > 0) return `${size.toFixed(2)} ${units[i]}`;
      return `${size} ${units[i]}`;
    }
  }

  return `${size.toFixed(2)} ${units[units.length - 1]}`;
};

export const getFileExtension = (filename?: string) => {
  const extention = filename?.slice(
    (Math.max(0, filename.lastIndexOf('.')) || Infinity) + 1
  );
  return extention?.toLowerCase() || '';
};

export const getFileFormat = (filename: string) => {
  const extension = filename.match(/\.\w+$/);

  if (extension) {
    switch (extension[0].toLowerCase()) {
      case '.jpg':
      case '.jpeg':
      case '.png':
      case '.gif':
        return 'image';
      case '.mp4':
      case '.avi':
      case '.mov':
        return 'video';
      case '.mp3':
      case '.wav':
      case '.flac':
        return 'audio';
      case '.pdf':
      case '.csv':
      case '.xlsx':
        return 'doc';
      case '.doc':
      case '.docx':
      case '.ppt':
      case '.pptx':
        return 'doc-addition';
      default:
        return 'unknown';
    }
  }
  return 'unknown';
};
export const getCitationFileFormat = (
  filename: string,
  isSplit: boolean = false
) => {
  const extension = filename.match(/\.\w+$/);
  if (extension) {
    switch (extension[0].toLowerCase()) {
      case '.jpg':
      case '.jpeg':
      case '.png':
      case '.gif':
        return true;
      case '.pdf':
        if (isSplit) {
          return true;
        }
        return false;

      default:
        return false;
    }
  }
  return false;
};
export const getExcelCitationFileFormat = (filename: string) => {
  const extension = filename.match(/\.\w+$/);
  if (extension) {
    switch (extension[0].toLowerCase()) {
      case '.csv':
      case '.xlsx':
      case '.pptx':
      case '.docx':
      case '.txt':
        return true;
      default:
        return false;
    }
  }
  return false;
};

// ROUTE
export const getRootPath = (path?: string) => {
  const pathArr = path?.split('/');
  return pathArr?.at(1) ?? '';
};
