"use client";
import { ModalProvider } from "@/components/Context/modal.context";
import GuessCard from "@/components/GuessCard";
import Hero from "@/components/Hero";

export default function App() {
  return (
    <div className="flex items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <ModalProvider>
        <main className="flex flex-row w-full h-full items-center max-w-[80%] m-auto">
          <Hero />
          <GuessCard />
        </main>
      </ModalProvider>
    </div>
  );
}
