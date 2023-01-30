import dayjs, { Dayjs } from "dayjs";

export const SECOND = 1000;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const MONTH = DAY * 30;
export const YEAR = DAY * 365;

export const diffTime = (lastTime: Dayjs) => {
  const time = dayjs().diff(lastTime);

  if (time / YEAR >= 1) {
    return `${Math.floor(time / YEAR)}년 전`;
  } else if (time / MONTH >= 1) {
    return `${Math.floor(time / MONTH)}달 전`;
  } else if (time / DAY >= 1) {
    return `${Math.floor(time / DAY)}일 전`;
  } else if (time / HOUR >= 1) {
    return `${Math.floor(time / HOUR)}시간 전`;
  } else if (time / MINUTE >= 1) {
    return `${Math.floor(time / MINUTE)}분 전`;
  }

  return `${Math.floor(time / SECOND)}초 전`;
};
