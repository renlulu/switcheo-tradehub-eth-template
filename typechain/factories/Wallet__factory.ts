/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Wallet, WalletInterface } from "../Wallet";

const _abi = [
  {
    inputs: [],
    name: "creator",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_swthAddress",
        type: "bytes",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isInitialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_assetId",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "sendERC20ToCreator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "sendETHToCreator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swthAddress",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "tokenFallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610cbe806100206000396000f3fe60806040526004361061007f5760003560e01c80638da5cb5b1161004e5780638da5cb5b1461018f578063c0ee0b8a146101d0578063d1f5789414610280578063f445b6f31461032657610086565b806302d05d3f1461008b5780631570f3f8146100cc578063392e53cd146101075780637c2c671b1461013457610086565b3661008657005b600080fd5b34801561009757600080fd5b506100a06103b6565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100d857600080fd5b50610105600480360360208110156100ef57600080fd5b81019080803590602001909291905050506103dc565b005b34801561011357600080fd5b5061011c6105a0565b60405180821515815260200191505060405180910390f35b34801561014057600080fd5b5061018d6004803603604081101561015757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506105b1565b005b34801561019b57600080fd5b506101a461073d565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101dc57600080fd5b5061027e600480360360608110156101f357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561023a57600080fd5b82018360208201111561024c57600080fd5b8035906020019184600183028401116401000000008311171561026e57600080fd5b9091929391929390505050610763565b005b34801561028c57600080fd5b50610324600480360360408110156102a357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156102e057600080fd5b8201836020820111156102f257600080fd5b8035906020019184600183028401116401000000008311171561031457600080fd5b9091929391929390505050610769565b005b34801561033257600080fd5b5061033b6108a3565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561037b578082015181840152602081019050610360565b50505050905090810190601f1680156103a85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461049f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f53656e646572206d7573742062652063726561746f720000000000000000000081525060200191505060405180910390fd5b60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168260405180600001905060006040518083038185875af1925050503d8060008114610520576040519150601f19603f3d011682016040523d82523d6000602084013e610525565b606091505b505090508061059c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f5472616e73666572206661696c6564000000000000000000000000000000000081525060200191505060405180910390fd5b5050565b60008054906101000a900460ff1681565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610674576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f53656e646572206d7573742062652063726561746f720000000000000000000081525060200191505060405180910390fd5b60008290506107388163a9059cbb60e01b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1685604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610941565b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b50505050565b6000151560008054906101000a900460ff161515146107f0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f436f6e747261637420616c726561647920696e697469616c697a65640000000081525060200191505060405180910390fd5b60016000806101000a81548160ff02191690831515021790555033600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081816002919061089d929190610bc1565b50505050565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109395780601f1061090e57610100808354040283529160200191610939565b820191906000526020600020905b81548152906001019060200180831161091c57829003601f168201915b505050505081565b61094a82610b76565b6109bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e74726163740081525060200191505060405180910390fd5b600060608373ffffffffffffffffffffffffffffffffffffffff16836040518082805190602001908083835b60208310610a0b57805182526020820191506020810190506020830392506109e8565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610a6d576040519150601f19603f3d011682016040523d82523d6000602084013e610a72565b606091505b509150915081610aea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656481525060200191505060405180910390fd5b600081511115610b7057808060200190516020811015610b0957600080fd5b8101908080519060200190929190505050610b6f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180610c5f602a913960400191505060405180910390fd5b5b50505050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f91506000801b8214158015610bb85750808214155b92505050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c0257803560ff1916838001178555610c30565b82800160010185558215610c30579182015b82811115610c2f578235825591602001919060010190610c14565b5b509050610c3d9190610c41565b5090565b5b80821115610c5a576000816000905550600101610c42565b509056fe5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220c8322951c41930b7d8f1a23490232914f63fb47a3b23e0e8f9a9e803f0f426b364736f6c634300060c0033";

export class Wallet__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Wallet> {
    return super.deploy(overrides || {}) as Promise<Wallet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Wallet {
    return super.attach(address) as Wallet;
  }
  connect(signer: Signer): Wallet__factory {
    return super.connect(signer) as Wallet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WalletInterface {
    return new utils.Interface(_abi) as WalletInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Wallet {
    return new Contract(address, _abi, signerOrProvider) as Wallet;
  }
}