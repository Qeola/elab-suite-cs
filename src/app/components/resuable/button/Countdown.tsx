import React from "react";
import moment from "moment";
import { useState } from "react";
import { Button } from "flowbite-react";

const Countdown = () => {
  const [showButton, setShowButton] = useState(false);
  const [remainingTime, setRemainingTime] = useState(
    moment.duration(2, "minutes"),
  );

  React.useEffect(() => {
    const timer = setTimeout(
      () => {
        setShowButton(true);
      },
      2 * 60 * 1000,
    );

    const targetTime = moment().add(2, "minutes");

    const countdownInterval = setInterval(() => {
      const currentTime = moment();
      const timeDiff = moment.duration(targetTime.diff(currentTime));

      setRemainingTime(timeDiff);

      if (timeDiff.asSeconds() <= 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [showButton]);
  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };
  return (
    <div>
      <Button
        color="primary"
        className="rounded-md w-full py-4 font-bold"
        size="large"
      >
        {formatTime(remainingTime.minutes())}:
        {formatTime(remainingTime.seconds())}{" "}
      </Button>
    </div>
  );
};

export default Countdown;
