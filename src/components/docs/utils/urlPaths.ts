import { DOCS_PAGE_NAME_PATH_INDEX } from "../constants";

export function getPageNameFromPath(path: string): string {
  return path.split("/")[DOCS_PAGE_NAME_PATH_INDEX];
}
