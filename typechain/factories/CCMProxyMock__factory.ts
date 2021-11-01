/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CCMProxyMock, CCMProxyMockInterface } from "../CCMProxyMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_ccmAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getEthCrossChainManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516101513803806101518339818101604052602081101561003357600080fd5b8101908080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060be806100936000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806387939a7f14602d575b600080fd5b6033605f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690509056fea264697066735822122079f0050f079178c1cee31cd645b49d83f237ea7878bffd29e8f91f3f1879bc9c64736f6c634300060c0033";

export class CCMProxyMock__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _ccmAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CCMProxyMock> {
    return super.deploy(_ccmAddress, overrides || {}) as Promise<CCMProxyMock>;
  }
  getDeployTransaction(
    _ccmAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_ccmAddress, overrides || {});
  }
  attach(address: string): CCMProxyMock {
    return super.attach(address) as CCMProxyMock;
  }
  connect(signer: Signer): CCMProxyMock__factory {
    return super.connect(signer) as CCMProxyMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CCMProxyMockInterface {
    return new utils.Interface(_abi) as CCMProxyMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CCMProxyMock {
    return new Contract(address, _abi, signerOrProvider) as CCMProxyMock;
  }
}