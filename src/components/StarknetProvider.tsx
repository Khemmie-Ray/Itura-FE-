"use client";
import React from "react";
import { Chain, sepolia, mainnet } from "@starknet-react/chains";
import {
  StarknetConfig,
  voyager,
  jsonRpcProvider,
  argent,
  braavos,
  useInjectedConnectors,
} from "@starknet-react/core";
import { toSessionPolicies } from "@cartridge/controller";
import { ControllerConnector } from "@cartridge/connector";
import { constants } from "starknet";

const policies = {
  contracts: {
    "0x038333fabb72e3349038439cddcb1687d58458f30dfaef3e1d71ae7401445d26": {
      methods: [
        {
          name: "Mint NFT",
          entrypoint: "mint",
          description: "Mint an NFT",
        },
      ],
    },
  },
};

const sessions = toSessionPolicies(policies);

const connector = new ControllerConnector({
  policies: sessions,
  chains: [
    {
      rpcUrl: "https://api.cartridge.gg/x/starknet/sepolia",
    },
  ],
  defaultChainId: constants.StarknetChainId.SN_SEPOLIA,
});

// Configure RPC provider
const provider = jsonRpcProvider({
  rpc: (chain: Chain) => {
    switch (chain) {
      case mainnet:
        return { nodeUrl: "https://api.cartridge.gg/x/starknet/mainnet" };
      case sepolia:
      default:
        return {
          nodeUrl:
            "https://starknet-sepolia.g.alchemy.com/starknet/version/rpc/v0_8/FtlFKmlVF7DMCHmzZHQDu",
        };
    }
  },
});

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
      provider={provider}
      connectors={[connector, ...connectors]}
      explorer={voyager}
    >
      {children}
    </StarknetConfig>
  );
}