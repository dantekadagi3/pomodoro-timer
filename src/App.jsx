// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import background from './assets/images/waterfall.jpeg';
import Button from './components/Button';
import Sound from './assets/Calming .mp3';

function App() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  function playSound(){
    //Creating a javascript audio controller
    new Audio(Sound).play()

  }

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      playSound()
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center flex-col"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${background})`
      }}
    >
      <div className="h-90 w-90 border-8 border-white flex items-center justify-center rounded-full">
        <h1 className="text-white text-9xl font-bold">{formatTime()}</h1>
      </div>
      <div className="mt-4">
        <h2 className="text-3xl font-bold text-white">Time to Focus</h2>
      </div>
      <div className="flex gap-x-8 mt-4">
        <Button text="Start" func={() => setIsRunning(true)} />
        <Button text="Stop" func={() => setIsRunning(false)} />
        <Button text="Reset" func={() => { setTimeLeft(25 * 60); setIsRunning(false); }} />
      </div>
    </section>
  );
}

export default App;
