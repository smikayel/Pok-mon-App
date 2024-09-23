"use client";
import { ModalProvider } from "@/components/Context/modal.context";
import GuessCard from "@/components/GuessCard";
import Hero from "@/components/Hero";
import { trpc } from "@/server/client";

export default function App() {
  const { data, error, isLoading } = trpc.hello.hello.useQuery();

  if (isLoading) {
    return <>show loading</>;
  }

  console.log(data, error, "<            <");

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
