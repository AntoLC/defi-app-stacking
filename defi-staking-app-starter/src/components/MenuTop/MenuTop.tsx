//https://web3js.readthedocs.io/en/v1.5.2/
import React, { useEffect, useState, useContext } from 'react';
import dappImg from './dapp.jpg';
import './MenuTop.scss';
import { ProviderContext } from '../App';


const MenuTop = () => {
	const [accountNumber, setAccountNumber] = useState<string>("");
	const {provider, setProvider} = useContext(ProviderContext);

	useEffect(() => {
		if(provider.isConnected){
			provider.getAccountNumber().then((account:string) => setAccountNumber(account));
		}
	}, [provider]);

	return (
		<div className="MenuTop_123fsf">
			<img className="dappImg" src={dappImg} alt="Horrible Logo"/>
			<h1>DAPP Yield Staking (Decentralized Banking)</h1>
			<div className="account"><span>ACCOUNT NUMBER:</span>{accountNumber}</div>
		</div>
	);
}

export default MenuTop;