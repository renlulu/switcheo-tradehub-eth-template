/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface CCMMockInterface extends ethers.utils.Interface {
  functions: {
    "addExtension(address,address,uint64)": FunctionFragment;
    "crossChain(uint64,bytes,bytes,bytes)": FunctionFragment;
    "registerAsset(address,address,bytes,bytes,uint64)": FunctionFragment;
    "removeExtension(address,address,uint64)": FunctionFragment;
    "unlock(address,bytes,bytes,address,address,uint256,uint64)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addExtension",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "crossChain",
    values: [BigNumberish, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "registerAsset",
    values: [string, string, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeExtension",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unlock",
    values: [
      string,
      BytesLike,
      BytesLike,
      string,
      string,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "addExtension",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "crossChain", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeExtension",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;

  events: {
    "CrossChainEvent(uint64,bytes,bytes,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CrossChainEvent"): EventFragment;
}

export type CrossChainEventEvent = TypedEvent<
  [BigNumber, string, string, string] & {
    toChainId: BigNumber;
    toContract: string;
    method: string;
    txData: string;
  }
>;

export class CCMMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CCMMockInterface;

  functions: {
    addExtension(
      _lockProxyAddr: string,
      _extension: string,
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    crossChain(
      _toChainId: BigNumberish,
      _toContract: BytesLike,
      _method: BytesLike,
      _txData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerAsset(
      _lockProxyAddr: string,
      _assetHash: string,
      _fromProxyHash: BytesLike,
      _toAssetHash: BytesLike,
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeExtension(
      _lockProxyAddr: string,
      _extension: string,
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unlock(
      _lockProxyAddr: string,
      _fromProxyHash: BytesLike,
      _fromAssetHash: BytesLike,
      _toAssetHash: string,
      _toAddress: string,
      _amount: BigNumberish,
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addExtension(
    _lockProxyAddr: string,
    _extension: string,
    _chainId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  crossChain(
    _toChainId: BigNumberish,
    _toContract: BytesLike,
    _method: BytesLike,
    _txData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerAsset(
    _lockProxyAddr: string,
    _assetHash: string,
    _fromProxyHash: BytesLike,
    _toAssetHash: BytesLike,
    _chainId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeExtension(
    _lockProxyAddr: string,
    _extension: string,
    _chainId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unlock(
    _lockProxyAddr: string,
    _fromProxyHash: BytesLike,
    _fromAssetHash: BytesLike,
    _toAssetHash: string,
    _toAddress: string,
    _amount: BigNumberish,
    _chainId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addExtension(
      _lockProxyAddr: string,
      _extension: string,
      _chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    crossChain(
      _toChainId: BigNumberish,
      _toContract: BytesLike,
      _method: BytesLike,
      _txData: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    registerAsset(
      _lockProxyAddr: string,
      _assetHash: string,
      _fromProxyHash: BytesLike,
      _toAssetHash: BytesLike,
      _chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    removeExtension(
      _lockProxyAddr: string,
      _extension: string,
      _chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unlock(
      _lockProxyAddr: string,
      _fromProxyHash: BytesLike,
      _fromAssetHash: BytesLike,
      _toAssetHash: string,
      _toAddress: string,
      _amount: BigNumberish,
      _chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CrossChainEvent(uint64,bytes,bytes,bytes)"(
      toChainId?: null,
      toContract?: null,
      method?: null,
      txData?: null
    ): TypedEventFilter<
      [BigNumber, string, string, string],
      {
        toChainId: BigNumber;
        toContract: string;
        method: string;
        txData: string;
      }
    >;

    CrossChainEvent(
      toChainId?: null,
      toContract?: null,
      method?: null,
      txData?: null
    ): TypedEventFilter<
      [BigNumber, string, string, string],
      {
        toChainId: BigNumber;
        toContract: string;
        method: string;
        txData: string;
      }
    >;
  };

  estimateGas: {
    addExtension(
      _lockProxyAddr: string,
      _extension: string,
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    crossChain(
      _toChainId: BigNumberish,
      _toContract: BytesLike,
      _method: BytesLike,
      _txData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerAsset(
      _lockProxyAddr: string,
      _assetHash: string,
      _fromProxyHash: BytesLike,
      _toAssetHash: BytesLike,
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeExtension(
      _lockProxyAddr: string,
      _extension: string,
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unlock(
      _lockProxyAddr: string,
      _fromProxyHash: BytesLike,
      _fromAssetHash: BytesLike,
      _toAssetHash: string,
      _toAddress: string,
      _amount: BigNumberish,
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addExtension(
      _lockProxyAddr: string,
      _extension: string,
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    crossChain(
      _toChainId: BigNumberish,
      _toContract: BytesLike,
      _method: BytesLike,
      _txData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerAsset(
      _lockProxyAddr: string,
      _assetHash: string,
      _fromProxyHash: BytesLike,
      _toAssetHash: BytesLike,
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeExtension(
      _lockProxyAddr: string,
      _extension: string,
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unlock(
      _lockProxyAddr: string,
      _fromProxyHash: BytesLike,
      _fromAssetHash: BytesLike,
      _toAssetHash: string,
      _toAddress: string,
      _amount: BigNumberish,
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
