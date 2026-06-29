const LOCAL_BACKEND_URL = "http://localhost:3000";

const getBackendBaseUrl = () => {
  const configuredUrl = import.meta.env.VITE_EMPLOYEE_BACKEND_URL;

  if (configuredUrl) {
    return configuredUrl;
  }

  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    return LOCAL_BACKEND_URL;
  }

  return window.location.origin;
};

export const buildEmployeeBackendUrl = (path = "/staff/login", next = "/staff") => {
  const url = new URL(path, getBackendBaseUrl());

  if (next) {
    url.searchParams.set("next", next);
  }

  return url.toString();
};
