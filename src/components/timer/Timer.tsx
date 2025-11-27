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
      timeDifference / (24 * 60 * 60 * 1000)
    );
    days = days >= 10 ? days : `0${days}`;

    let hours: string | number = Math.floor(
      (timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
    );
    hours = hours >= 10 ? hours : `0${hours}`;

    let minutes: string | number = Math.floor(
      (timeDifference % (60 * 60 * 1000)) / (1000 * 60)
    );
    minutes = minutes >= 10 ? minutes : `0${minutes}`;

    let seconds: string | number = Math.floor(
      (timeDifference % (60 * 1000)) / 1000
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
    setInterval(() => {
      getTimeDifference(countDownDate);
    }, 1000);
  }, []);
  useEffect(() => {
    startCountDown();
  }, [startCountDown]);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-12">
      <div className="flex justify-center gap-3 sm:gap-8">
        <div className="flex flex-col gap-5 relative">
          <div className="h-12 w-12 sm:w-32 sm:h-32 lg:w-24 lg:h-24 flex justify-between items-center bg-white border-2 border-primary-orange rounded-lg">
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-primary-orange"></div>
            <span className="lg:text-5xl sm:text-4xl text-3xl font-semiboldtext-matte-purple">
              {countDownTime?.days}
            </span>
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-primary-orange"></div>
          </div>
          <span className="text-matte-purple text-xs sm:text-2xl text-center capitalize">
            {countDownTime?.days == 1 ? "Day" : "Days"}
          </span>
        </div>
        <div className="flex flex-col gap-5 relative">
          <div className="h-12 w-12 sm:w-32 sm:h-32 lg:w-24 lg:h-24 flex justify-between items-center bg-white border-2 border-primary-orange rounded-lg">
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-primary-orange"></div>
            <span className="lg:text-5xl sm:text-4xl text-3xl font-semiboldtext-matte-purple">
              {countDownTime?.hours}
            </span>
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-primary-orange"></div>
          </div>
          <span className="text-matte-purple text-xs sm:text-2xl text-center font-medium">
            {countDownTime?.hours == 1 ? "Hour" : "Hours"}
          </span>
        </div>
        <div className="flex flex-col gap-5 relative">
          <div className="h-12 w-12 sm:w-32 sm:h-32 lg:w-24 lg:h-24 flex justify-between items-center bg-white border-2 border-primary-orange rounded-lg">
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-primary-orange"></div>
            <span className="lg:text-5xl sm:text-4xl text-3xl font-semiboldtext-matte-purple">
              {countDownTime?.minutes}
            </span>
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-primary-orange"></div>
          </div>
          <span className="text-matte-purple text-xs sm:text-2xl text-center capitalize">
            {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
          </span>
        </div>
        <div className="flex flex-col gap-5 relative">
          <div className="h-12 w-12 sm:w-32 sm:h-32 lg:w-24 lg:h-24 flex justify-between items-center bg-white border-2 border-primary-orange rounded-lg">
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-primary-orange"></div>
            <span className="lg:text-5xl sm:text-4xl text-3xl font-semiboldtext-matte-purple">
              {countDownTime?.seconds}
            </span>
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-primary-orange"></div>
          </div>
          <span className="text-matte-purple text-xs sm:text-2xl text-center capitalize">
            {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
