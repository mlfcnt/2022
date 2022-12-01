import fs from "fs";
import path from "path";

const readRationsFromLocalFile = () => {
  return fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");
};

export const formatLocalFileToRations = () => {
  const localFile = readRationsFromLocalFile();
  const allNumbers = localFile.split("\n");
  let allRations: number[][] = [];
  let rationCarriedByAnElve: number[] = [];
  for (const number of allNumbers) {
    if (number?.length) {
      rationCarriedByAnElve.push(Number(number));
    } else {
      allRations.push(rationCarriedByAnElve);
      rationCarriedByAnElve = [];
    }
  }
  return allRations;
};

export const getRations = () => formatLocalFileToRations();
