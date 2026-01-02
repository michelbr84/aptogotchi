"use client";

import React, { useState } from "react";
import { useTypingEffect } from "@/utils/useTypingEffect";

import { ShufflePetImage } from "@/app/home/Pet/ShufflePetImage";
import { DEFAULT_PET, PetParts } from "@/app/home/Pet";
import { usePet } from "@/context/PetContext";

export function NotConnected() {
  const [petParts, setPetParts] = useState<PetParts>(DEFAULT_PET.parts);
  const { setPet, setDemoMode } = usePet();

  const text = useTypingEffect(
    `Welcome to Aptogotchi! Connect your wallet to mint an on-chain pet, or try the demo to explore the game first!`
  );

  const handleTryDemo = () => {
    // Create a demo pet with the currently displayed parts
    setPet({
      name: "Demo Pet",
      birthday: Date.now(),
      energy_points: 8,
      parts: petParts,
    });
    setDemoMode(true);
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      <ShufflePetImage petParts={petParts} setPetParts={setPetParts} />
      <div className="nes-container is-dark with-title text-sm sm:text-base">
        <p className="title">Welcome</p>
        <p>{text}</p>
      </div>
      <button
        type="button"
        className="nes-btn is-primary"
        onClick={handleTryDemo}
      >
        🎮 Try Demo (No Wallet Required)
      </button>
    </div>
  );
}
