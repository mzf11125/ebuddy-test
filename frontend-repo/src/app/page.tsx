// language: tsx
"use client";

import { LoginForm } from "@/components/organisms/LoginForm";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <h1 className="text-3xl mb-4">Welcome to the Application</h1>
      <LoginForm />
    </div>
  );
}