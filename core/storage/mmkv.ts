// Temporary MMKV mock for development
// TODO: Fix MMKV import issues

export const storage = {
  set: (key: string, value: string | number | boolean) => {
    console.log(`MMKV SET: ${key} = ${value}`);
  },
  getString: (key: string) => {
    console.log(`MMKV GET: ${key}`);
    return null;
  },
  delete: (key: string) => {
    console.log(`MMKV DELETE: ${key}`);
  },
  clearAll: () => {
    console.log("MMKV CLEAR ALL");
  },
  contains: (key: string) => {
    console.log(`MMKV CONTAINS: ${key}`);
    return false;
  },
};

export const storageHelpers = {
  set: (key: string, value: any) => {
    storage.set(key, JSON.stringify(value));
  },
  get: (key: string) => {
    const value = storage.getString(key);
    return value ? JSON.parse(value) : null;
  },
  remove: (key: string) => {
    storage.delete(key);
  },
  clear: () => {
    storage.clearAll();
  },
  has: (key: string) => {
    return storage.contains(key);
  },
};
