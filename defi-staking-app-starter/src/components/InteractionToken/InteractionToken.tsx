//https://web3js.readthedocs.io/en/v1.5.2/
import React, { useEffect, useState, useContext } from 'react';
import './InteractionToken.scss';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { ProviderContext } from '../App';
import { Provider } from '../../scripts/Provider';


const InteractionToken = () => {
	const {provider, setProvider} = useContext(ProviderContext);
	const [tetherBalance, setTetherBalance] = useState<string>("");
	const [tetherSymbol, setTetherSymbol] = useState<string>("");
	const [deposit, setDeposit] = useState<string>("0");

	useEffect(() => {
		if(provider.isConnected){
			provider.getTether().then((_tether:{ balance: string, symbol: string } | null) => {
				if(_tether){
					setTetherBalance(_tether.balance);
					setTetherSymbol(_tether.symbol);	
				}
			});
		}
	}, [provider]);

	const handleClickDeposit = () => {
		provider.stakeTokens(deposit).then(() => setProvider(new Provider()));
	};

	return (
		<div className="InteractionToken_123fsf">
			<div className="container">
				<div className="top"><span>Stake Tokens</span><span>Balance: {tetherBalance}</span></div>
				<div className="middle">
					<InputGroup className="mb-3">
						<FormControl
							placeholder="0"
							aria-label="0"
							aria-describedby="basic-addon2"
							onChange={(_this)=> setDeposit(_this.target.value)}
						/>
						<InputGroup.Text id="basic-addon2">{tetherSymbol}</InputGroup.Text>
					</InputGroup>
				</div>
				<div className="d-grid gap-2 middle-b">
					<Button variant="primary" size="lg" onClick={() => handleClickDeposit()}>
						DEPOSIT
					</Button>
					<Button variant="secondary" size="lg">
						Withdraw
					</Button>
				</div>
				<div className="bottom">
					<div>Airdrop</div>
					<div>0:20</div>
				</div>
			</div>
		</div>
	);
}

export default InteractionToken;