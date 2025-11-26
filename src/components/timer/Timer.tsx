"use client";
import { useCallback, useEffect, useState } from "react";
const Timer = () => {
  const [countDownTime, setCountDownTIme] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownTime - currentTime;
    let days =
      Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
        ? Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))
        : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;
    const hours =
      Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
        : `0${Math.floor(
            (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`;
    const minutes =
      Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))
        : `0${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
        ? Math.floor((timeDiffrence % (60 * 1000)) / 1000)
        : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;
    if (timeDiffrence < 0) {
      setCountDownTIme({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });

      clearInterval();
    } else {
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };

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
