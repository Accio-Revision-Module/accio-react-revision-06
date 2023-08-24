/* @vite-ignore */
import { lazy } from "react";

export default function lazyLoad(path, namedComponent) {
  return lazy(() => {
    if (!namedComponent) {
      return import(path);
    } else {
      return import(/* @vite-ignore */ path).then((module) => {
        return {
          default: module[namedComponent],
        };
      });
    }
  });
}
