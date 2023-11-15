export function filterObject<T>(obj: any, validKeys: (keyof T)[]): T {
  const result: any = {};
  validKeys.forEach((key) => {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  });
  return result as T;
}
