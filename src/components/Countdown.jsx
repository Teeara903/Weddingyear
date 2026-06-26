import { useState, useEffect } from "react";

function Countdown() {
  const weddingDate = new Date("February 14, 2027 10:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(weddingDate - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(weddingDate - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold text-pink-600 mb-8">
        Countdown to Our Big Day 💍
      </h2>

      <div className="flex justify-center gap-6 text-center">
        <div>
          <h3 className="text-5xl font-bold">{days}</h3>
          <p>Days</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold">{hours}</h3>
          <p>Hours</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold">{minutes}</h3>
          <p>Minutes</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold">{seconds}</h3>
          <p>Seconds</p>
        </div>
      </div>
    </section>
  );
}

export default Countdown;
