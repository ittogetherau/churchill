import { execSync } from "child_process";

export const getLastCommitDate = (relativeFilePath: string): string | null => {
  try {
    const output = execSync(`git log -1 --format=%aI -- "${relativeFilePath}"`, {
      cwd: process.cwd(),
    })
      .toString()
      .trim();

    return output || null;
  } catch {
    return null;
  }
};
