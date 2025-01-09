"use client";

// const RequestDataButton = () => {
//   const { getSigningStargateClient, address } = useChain(
//     "band-laozi-v3-devnet"
//   );

//   const handleOnClick = async () => {
//     const aminoSigningClient = await getSigningStargateClient();
//     const { requestData } = band.oracle.v1.MessageComposer.fromPartial;
//     const msg = requestData({
//       oracleScriptId: BigInt(1),
//       calldata: new Uint8Array([1, 2, 3]),
//       askCount: BigInt(1),
//       minCount: BigInt(1),
//       clientId: "client",
//       feeLimit: [coin("1", "uband")],
//       prepareGas: BigInt(1),
//       executeGas: BigInt(1),
//       sender: "sender",
//       tssEncoder: 0,
//     });

//     const fee = {
//       amount: [
//         {
//           denom: "uband",
//           amount: "5000",
//         },
//       ],
//       gas: "200000",
//     };

//     const result = aminoSigningClient.signAndBroadcast(
//       address as string,
//       [msg],
//       fee
//     );

//     console.log(result);
//   };

//   return <button onClick={handleOnClick}>Request Data</button>;
// };

const RequestDataExample = () => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Message</th>
            <th className="px-6 py-3">Test</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-4">
              <p className="font-mono p-1 bg-gray-200 rounded inline-block">
                MsgRequestData
              </p>
            </td>
            <td className="px-6 py-4">{/* <RequestDataButton /> */}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RequestDataExample;
