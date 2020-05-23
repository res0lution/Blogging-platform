import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PRODUCTION
  ? "https://next-blog.com"
  : "https://localhost:8000.com";
export const APP_NAME = publicRuntimeConfig.APP_NAME