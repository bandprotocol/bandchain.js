import { AllBalanceExample } from "@/components/AllBalanceExample";
import { CreateTunnelExample } from "@/components/CreateTunnelExample";
import { RequestDataExample } from "@/components/RequestDataExample";
import { SendTokenExample } from "@/components/SendTokenExample";

export default function Home() {
  return (
    <div className="p-3">
      <main className="grid gap-4">
        <AllBalanceExample />
        <SendTokenExample />
        <RequestDataExample />
        <CreateTunnelExample />
      </main>
    </div>
  );
}
