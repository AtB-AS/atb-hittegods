import { Response } from "express";

export const compare = (a: any, b: any) => {
  if (a.lostid < b.lostid) {
    return 1;
  }
  if (a.lostid > b.lostid) {
    return -1;
  }
  return 0;
};

export const RemoveDuplicates = (array: any, key: any) => {
  return array.reduce((arr: any, item: any) => {
    const removed = arr.filter((i: any) => i[key] !== item[key]);
    return [...removed, item];
  }, []);
};

export const getMatches = (rows: any) => {
  const matches: any = {};
  rows.forEach((row: any) => {
    const lostid = row.lostid;
    if (matches[lostid] != undefined) {
      if (row.matchid != null) {
        matches[lostid][0] += 1;
        if (row.new === true) {
          matches[lostid][1] += 1;
        }
      }
    } else {
      matches[lostid] = [0, 0];
      if (row.matchid != null) {
        matches[lostid][0] += 1;
        if (row.new === true) {
          matches[lostid][1] += 1;
        }
      }
    }
  });
  return matches;
};

export const dbError = (e: Error, res: Response): void => {
  console.error(e.stack);
  res.status(500).json({
    status: "error",
    errorMessage: "Unknown database error",
  });
};
