"use client";
import HomePage from "@/components/Home/home";
import Board from "@/components/board/board";
import Feedback from "@/components/feedback/feedback";
import FeedbackTwo from "@/components/feedback/feedback2";
import What from "@/components/what/what";
import WhatSecond from "@/components/what/what2";
import WhatThird from "@/components/what/what3";

export default function Home() {
  return (
    <main>
      <div>
        <a id="/">
          <HomePage />
        </a>
      </div>
      <div>
        <a id="about">
          <What />
        </a>
      </div>
      <div>
        <a id="service">
          <WhatSecond />
        </a>
      </div>
      <WhatThird />
      <div>
        <a id="contact"></a>
        <Feedback />
      </div>
      <FeedbackTwo />
      <Board />
    </main>
  );
}
