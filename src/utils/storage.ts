interface MyStorage {
  store: (data: any, key: string) => void;
  get: (key: string) => void;
  clearAll: () => Promise<void>;
}

const storageController: MyStorage = {
  store: async (data: any, key: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, data);
    }
  },
  get: (key: string) => {
    if (typeof window !== "undefined") {
      const result = localStorage.getItem(key);
      if (result) {
        return JSON.stringify(result);
      }
      return null;
    }
  },
  clearAll: async () => {
    return await window.localStorage.clear();
  },
};

export { storageController };
