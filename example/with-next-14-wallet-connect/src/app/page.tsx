import GetReferenceDataExample from "src/components/GetReferenceDataExample";
import RequestDataExample from "src/components/RequestDataExample";
import SendTokenExample from "src/components/SendTokenExample";
import Wallet from "src/components/WalletConnectButton";

export default function Home() {
  return (
    <main className="container mx-auto max-w-md py-4">
      <div className="grid gap-4">
        <Wallet />
        <div className="grid gap-4">
          <SendTokenExample />
          <RequestDataExample />
          <GetReferenceDataExample />
        </div>
      </div>
    </main>
  );
}
