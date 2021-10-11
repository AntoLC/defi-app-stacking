//https://web3js.readthedocs.io/en/v1.5.2/
import React, { useEffect, useState, createContext, SetStateAction } from "react";
import { Provider } from "../scripts/Provider";
import "./App.scss";
import MenuTop from "./MenuTop/MenuTop";
import Particles from "react-particles-js";
import TableToken from "./TableToken/TableToken";
import InteractionToken from "./InteractionToken/InteractionToken";

export const ProviderContext = createContext({
  provider: {} as Provider,
  setProvider: {} as React.Dispatch<React.SetStateAction<Provider>>,
});

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [provider, setProvider] = useState<Provider>(new Provider());
  const value = { provider, setProvider };

  useEffect(() => {
    setIsConnected(false);
    provider.loadContracts().then(() => setIsConnected(true));
  }, [provider]);

  return (
    <div className="App_123fsf">
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      {isConnected ? (
        <ProviderContext.Provider value={value}>
          <MenuTop />
          <TableToken />
          <InteractionToken />
        </ProviderContext.Provider>
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
