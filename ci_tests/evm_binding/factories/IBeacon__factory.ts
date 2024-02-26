/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IBeacon, IBeaconInterface } from "../IBeacon";

const _abi = [
  {
    type: "function",
    name: "implementation",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
] as const;

export class IBeacon__factory {
  static readonly abi = _abi;
  static createInterface(): IBeaconInterface {
    return new utils.Interface(_abi) as IBeaconInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBeacon {
    return new Contract(address, _abi, signerOrProvider) as IBeacon;
  }
}