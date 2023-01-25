export const getExpires = (expiredDate: number) => {
  const expires = new Date();
  expires.setDate(expires.getDate() + expiredDate);

  return expires.toLocaleTimeString();
};

export const setCookie = (key: string, value: string, expiredDate: number = 365) => {
  const expires = getExpires(expiredDate);

  document.cookie = `${key}=${value};path=/;expires=${expires}`;
};

export const getCookieAll = () => {
  return document.cookie.split(" ").reduce((obj, data) => {
    const [key, value] = data.split("=");

    return { ...obj, [key]: value.replaceAll(";", "") };
  }, {}) as Record<string, string>;
};

export const getCookie = (key: string) => {
  const data = getCookieAll()[key];

  if (data === undefined) return null;

  return data;
};

export const removeCookie = (key: string) => {
  document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};
