"use client";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Connected } from "./Connected";
import { NotConnected } from "./NotConnected";
import { usePet } from "@/context/PetContext";

export function Body() {
  const { connected } = useWallet();
  const { demoMode } = usePet();

  if (connected || demoMode) return <Connected />;

  return <NotConnected />;
}
