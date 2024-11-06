import { AllBalanceExample } from "@/components/AllBalanceExample";
import { RequestDataExample } from "@/components/RequestDataExample";
import { SendTokenExample } from "@/components/SendTokenExample";

export default function Home() {
  return (
    <div className="p-3">
      <main className="grid gap-4">
        <AllBalanceExample />
        <SendTokenExample />
        <RequestDataExample />
      </main>
    </div>
  );
}
