"use client";
import React from "react";
import { Chain, sepolia, mainnet } from "@starknet-react/chains";
import {
  StarknetConfig,
  voyager,
  publicProvider,
  argent,
  braavos,
  useInjectedConnectors,
} from "@starknet-react/core";
import { constants } from "starknet";


export function StarknetProvider({ children }: { children: React.ReactNode }) {
  // Configure browser wallets

  const { connectors } = useInjectedConnectors({
    recommended: [argent(), braavos()],

    includeRecommended: "onlyIfNoConnectors",

    order: "random",
  });

  return (
    <StarknetConfig
      autoConnect
      chains={[sepolia]}
      provider={publicProvider()}
      connectors={connectors}
      explorer={voyager}
    >
      {children}
    </StarknetConfig>
  );
}