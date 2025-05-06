import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import React, { useState } from 'react'

function Airdrop() {
    const [amount, setAmount] = useState(null);
    const wallet = useWallet();
    const {connection} = useConnection();
    // alert(wallet.publicKey.toString());

    async function sendAirdropToUser() {
        console.log("Amount requested: ", amount*1000000000);
        await connection.requestAirdrop(wallet.publicKey, amount);
    }

  return (
    <div>
        <input type="text" placeholder="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
        <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
  )
}

export default Airdrop