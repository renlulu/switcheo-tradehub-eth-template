/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20Detailed, ERC20DetailedInterface } from "../ERC20Detailed";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516105ad3803806105ad8339818101604052606081101561003357600080fd5b810190808051604051939291908464010000000082111561005357600080fd5b8382019150602082018581111561006957600080fd5b825186600182028301116401000000008211171561008657600080fd5b8083526020830192505050908051906020019080838360005b838110156100ba57808201518184015260208101905061009f565b50505050905090810190601f1680156100e75780820380516001836020036101000a031916815260200191505b506040526020018051604051939291908464010000000082111561010a57600080fd5b8382019150602082018581111561012057600080fd5b825186600182028301116401000000008211171561013d57600080fd5b8083526020830192505050908051906020019080838360005b83811015610171578082015181840152602081019050610156565b50505050905090810190601f16801561019e5780820380516001836020036101000a031916815260200191505b506040526020018051906020019092919050505082600090805190602001906101c8929190610203565b5081600190805190602001906101df929190610203565b5080600260006101000a81548160ff021916908360ff1602179055505050506102a0565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061024457805160ff1916838001178555610272565b82800160010185558215610272579182015b82811115610271578251825591602001919060010190610256565b5b50905061027f9190610283565b5090565b5b8082111561029c576000816000905550600101610284565b5090565b6102fe806102af6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806306fdde0314610046578063313ce567146100c957806395d89b41146100ea575b600080fd5b61004e61016d565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561008e578082015181840152602081019050610073565b50505050905090810190601f1680156100bb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100d161020f565b604051808260ff16815260200191505060405180910390f35b6100f2610226565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610132578082015181840152602081019050610117565b50505050905090810190601f16801561015f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b606060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102055780601f106101da57610100808354040283529160200191610205565b820191906000526020600020905b8154815290600101906020018083116101e857829003601f168201915b5050505050905090565b6000600260009054906101000a900460ff16905090565b606060018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102be5780601f10610293576101008083540402835291602001916102be565b820191906000526020600020905b8154815290600101906020018083116102a157829003601f168201915b505050505090509056fea2646970667358221220cffdd84abad2815dff196bc2c58a80529375a3dc546cefd0332ebc49d545111964736f6c634300060c0033";

export class ERC20Detailed__factory extends ContractFactory {
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
    name: string,
    symbol: string,
    decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Detailed> {
    return super.deploy(
      name,
      symbol,
      decimals,
      overrides || {}
    ) as Promise<ERC20Detailed>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, decimals, overrides || {});
  }
  attach(address: string): ERC20Detailed {
    return super.attach(address) as ERC20Detailed;
  }
  connect(signer: Signer): ERC20Detailed__factory {
    return super.connect(signer) as ERC20Detailed__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20DetailedInterface {
    return new utils.Interface(_abi) as ERC20DetailedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Detailed {
    return new Contract(address, _abi, signerOrProvider) as ERC20Detailed;
  }
}