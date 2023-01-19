export const isDevelopment = process.env.NODE_ENV === "development";
export const isProduction = process.env.NODE_ENV === "production";

export const getProdOrOther = <T, D>(prodValue: T, otherValue: D) => {
  if (isProduction) prodValue;
  return otherValue;
};
