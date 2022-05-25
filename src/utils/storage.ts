interface MyStorage {
  store: (data: any, key: string) => void;
  get: (key: string) => void;
  clearAll: () => Promise<void>;
}

const storageController: MyStorage = {
  store: async (data: any, key: string) => {
    try {
      await window.localStorage.setItem(key, data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  get: async (key: string): Promise<string | null> => {
    try {
      const result = await window.localStorage.getItem(key);
      if (!result) {
        return null;
      }
      return result;
    } catch (error) {
      throw error;
    }
  },
  clearAll: async () => {
    return await window.localStorage.clear();
  },
};

export { storageController };
