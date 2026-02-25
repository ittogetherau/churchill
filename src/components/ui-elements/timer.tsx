"use client";
import { useCallback, useEffect, useState } from "react";
interface CountDownTime {
  days: string | number;
  hours: string | number;
  minutes: string | number;
  seconds: string | number;
}

const Timer = () => {
  const [countDownTime, setCountDownTime] = useState<CountDownTime>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = useCallback((countDownTime: number) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownTime - currentTime;

    let days: string | number = Math.floor(
      timeDifference / (24 * 60 * 60 * 1000),
    );
    days = days >= 10 ? days : `0${days}`;

    let hours: string | number = Math.floor(
      (timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60),
    );
    hours = hours >= 10 ? hours : `0${hours}`;

    let minutes: string | number = Math.floor(
      (timeDifference % (60 * 60 * 1000)) / (1000 * 60),
    );
    minutes = minutes >= 10 ? minutes : `0${minutes}`;

    let seconds: string | number = Math.floor(
      (timeDifference % (60 * 1000)) / 1000,
    );
    seconds = seconds >= 10 ? seconds : `0${seconds}`;

    if (timeDifference < 0) {
      setCountDownTime({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
    } else {
      setCountDownTime({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  }, []);

  const startCountDown = useCallback(() => {
    const countDownDate = new Date("July 22, 2024 00:00:00").getTime();
    const intervalId = setInterval(() => {
      getTimeDifference(countDownDate);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [getTimeDifference]);
  useEffect(() => {
    return startCountDown();
  }, [startCountDown]);
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 sm:gap-12">
      <div className="flex justify-center gap-3 sm:gap-8">
        <div className="relative flex flex-col gap-4">
          <div className="border-primary-orange flex h-12 w-12 items-center justify-between rounded-lg border-2 bg-white sm:h-32 sm:w-32 lg:h-24 lg:w-24">
            <div className="bg-primary-orange relative !-left-[6px] h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"></div>
            <span className="font-semiboldtext-matte-purple text-3xl sm:text-4xl lg:text-5xl">
              {countDownTime?.days}
            </span>
            <div className="bg-primary-orange relative -right-[6px] h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"></div>
          </div>
          <span className="text-matte-purple text-center text-xs capitalize sm:text-2xl">
            {countDownTime?.days == 1 ? "Day" : "Days"}
          </span>
        </div>
        <div className="relative flex flex-col gap-4">
          <div className="border-primary-orange flex h-12 w-12 items-center justify-between rounded-lg border-2 bg-white sm:h-32 sm:w-32 lg:h-24 lg:w-24">
            <div className="bg-primary-orange relative !-left-[6px] h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"></div>
            <span className="font-semiboldtext-matte-purple text-3xl sm:text-4xl lg:text-5xl">
              {countDownTime?.hours}
            </span>
            <div className="bg-primary-orange relative -right-[6px] h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"></div>
          </div>
          <span className="text-matte-purple text-center text-xs font-medium sm:text-2xl">
            {countDownTime?.hours == 1 ? "Hour" : "Hours"}
          </span>
        </div>
        <div className="relative flex flex-col gap-4">
          <div className="border-primary-orange flex h-12 w-12 items-center justify-between rounded-lg border-2 bg-white sm:h-32 sm:w-32 lg:h-24 lg:w-24">
            <div className="bg-primary-orange relative !-left-[6px] h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"></div>
            <span className="font-semiboldtext-matte-purple text-3xl sm:text-4xl lg:text-5xl">
              {countDownTime?.minutes}
            </span>
            <div className="bg-primary-orange relative -right-[6px] h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"></div>
          </div>
          <span className="text-matte-purple text-center text-xs capitalize sm:text-2xl">
            {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
          </span>
        </div>
        <div className="relative flex flex-col gap-4">
          <div className="border-primary-orange flex h-12 w-12 items-center justify-between rounded-lg border-2 bg-white sm:h-32 sm:w-32 lg:h-24 lg:w-24">
            <div className="bg-primary-orange relative !-left-[6px] h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"></div>
            <span className="font-semiboldtext-matte-purple text-3xl sm:text-4xl lg:text-5xl">
              {countDownTime?.seconds}
            </span>
            <div className="bg-primary-orange relative -right-[6px] h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"></div>
          </div>
          <span className="text-matte-purple text-center text-xs capitalize sm:text-2xl">
            {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
