"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      console.log("NEXT_PUBLIC_API_URL:", process.env.NEXT_PUBLIC_API_URL);
      try {
        const response = await fetch(
          `${
            process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"
          }/api/hello`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    };

    fetchMessage();
  }, []);

  if (!message) return <div>Loading...</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-6">Next.js with Docker</h1>
      <p className="text-xl text-center max-w-2xl">{message}</p>
    </main>
  );
}
