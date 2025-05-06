import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import "./App.css";
import {
  WalletConnectButton,
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
// import { useMemo } from 'react'
import { clusterApiUrl } from "@solana/web3.js";
import { useMemo } from "react";
import Airdrop from "./components/Airdrop";

// export const Wallet = ({children}) => {
//   const network = WalletAdapterNetwork.Devnet;

//   const endpoint = useMemo(() => clusterApiUrl(network), [network]);

//   const wallets = useMemo(()=>[], [network])
// }

function App() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]}>
        <WalletModalProvider>
          <WalletMultiButton />
          <WalletDisconnectButton />
          <Airdrop />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
