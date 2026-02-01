'use client'

import { useEffect, useState } from "react";
import Surprise from "../util/confetti";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const messages = [
    "You just made my whole day💖",
    "Best answer ever😭❤️",
    // "Wena… kgale ke bona gor wanpatla😌💖",
    "I knew you’d say yes😌💖",
    "My heart is doing backflips💘",
    "This is my favourite moment🥰",
    // "We’re officially a vibe💞",
    "Okay wow… I’m smiling HARD😁",
    "You chose correctly😌❤️",
    // "Love unlocked🔓💖",
    "This calls for celebration🎉💘",
    "I’m not crying, you are😭❤️",
    "That was the only right answer😉💖",
    "My happiness just leveled up💕",
    "You’re kinda amazing, you know that?🥺",
    // "Valentine secured 💖🔥",
  ];

  const [message, setMessage] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  }, []);

  return (
    <div>
      <div className="homepage-link">
        <Link href="/">← Go Back</Link>
      </div>

      <section className="success">
        <Surprise />

        <Image
          src="/celebrate.gif"
          alt="two animals holding hearts and smiling gif"
          width={570}
          height={300}
          className="yay-img"
          priority
        />

        <p id="yay">{message}</p>
      </section>
    </div>
  );
}
