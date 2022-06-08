import { storageController } from "@src/utils/storage";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const ACCESS_TOKEN = "TASKME_TOKEN";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;


class BaseRequest {
  protected api: AxiosInstance;
  protected auth: AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: API_URL,
    });
    this.auth = axios.create({
      baseURL: API_URL,
    });
    this.attachInterceptors();
  }

  private attachInterceptors() {
    this.api.interceptors.request.use(async (req: AxiosRequestConfig) => {
      try {
        const token: any = await storageController.get(ACCESS_TOKEN);

        if (token) {
          req.headers.Authorization = `Bearer ${token}`;
        }
      } catch (error) {
        //Do nothing
      }
      return req;
    });
    this.auth.interceptors.request.use(async (req: AxiosRequestConfig) => {
      return req;
    });
  }
}
export default BaseRequest;
