import { AllBalance } from "@/components/AllBalance";
import { SendTokensButton } from "@/components/SendTokens";

export default function Home() {
  return (
    <div className="p-3">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <AllBalance />
        <div className="h-1 w-full bg-gray-200" />
        <SendTokensButton />
        <div className="h-1 w-full bg-gray-200" />
      </main>
    </div>
  );
}
