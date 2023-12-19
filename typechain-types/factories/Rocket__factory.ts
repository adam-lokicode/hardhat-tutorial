/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Rocket, RocketInterface } from "../Rocket";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "launch",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "status",
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000bab38038062000bab83398181016040528101906200003791906200022a565b8060009081620000489190620004c6565b506040518060400160405280600881526020017f69676e6974696f6e000000000000000000000000000000000000000000000000815250600190816200008f9190620004c6565b5050620005ad565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200010082620000b5565b810181811067ffffffffffffffff82111715620001225762000121620000c6565b5b80604052505050565b60006200013762000097565b9050620001458282620000f5565b919050565b600067ffffffffffffffff821115620001685762000167620000c6565b5b6200017382620000b5565b9050602081019050919050565b60005b83811015620001a057808201518184015260208101905062000183565b60008484015250505050565b6000620001c3620001bd846200014a565b6200012b565b905082815260208101848484011115620001e257620001e1620000b0565b5b620001ef84828562000180565b509392505050565b600082601f8301126200020f576200020e620000ab565b5b815162000221848260208601620001ac565b91505092915050565b600060208284031215620002435762000242620000a1565b5b600082015167ffffffffffffffff811115620002645762000263620000a6565b5b6200027284828501620001f7565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002ce57607f821691505b602082108103620002e457620002e362000286565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200034e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200030f565b6200035a86836200030f565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003a7620003a16200039b8462000372565b6200037c565b62000372565b9050919050565b6000819050919050565b620003c38362000386565b620003db620003d282620003ae565b8484546200031c565b825550505050565b600090565b620003f2620003e3565b620003ff818484620003b8565b505050565b5b8181101562000427576200041b600082620003e8565b60018101905062000405565b5050565b601f82111562000476576200044081620002ea565b6200044b84620002ff565b810160208510156200045b578190505b620004736200046a85620002ff565b83018262000404565b50505b505050565b600082821c905092915050565b60006200049b600019846008026200047b565b1980831691505092915050565b6000620004b6838362000488565b9150826002028217905092915050565b620004d1826200027b565b67ffffffffffffffff811115620004ed57620004ec620000c6565b5b620004f98254620002b5565b620005068282856200042b565b600060209050601f8311600181146200053e576000841562000529578287015190505b620005358582620004a8565b865550620005a5565b601f1984166200054e86620002ea565b60005b82811015620005785784890151825560018201915060208501945060208101905062000551565b8683101562000598578489015162000594601f89168262000488565b8355505b6001600288020188555050505b505050505050565b6105ee80620005bd6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806301339c211461004657806306fdde0314610050578063200d2ed21461006e575b600080fd5b61004e61008c565b005b6100586100d3565b604051610065919061027f565b60405180910390f35b610076610161565b604051610083919061027f565b60405180910390f35b6040518060400160405280600881526020017f6c6966742d6f6666000000000000000000000000000000000000000000000000815250600190816100d091906104e6565b50565b600080546100e0906102ff565b80601f016020809104026020016040519081016040528092919081815260200182805461010c906102ff565b80156101595780601f1061012e57610100808354040283529160200191610159565b820191906000526020600020905b81548152906001019060200180831161013c57829003601f168201915b505050505081565b6001805461016e906102ff565b80601f016020809104026020016040519081016040528092919081815260200182805461019a906102ff565b80156101e75780601f106101bc576101008083540402835291602001916101e7565b820191906000526020600020905b8154815290600101906020018083116101ca57829003601f168201915b505050505081565b600081519050919050565b600082825260208201905092915050565b60005b8381101561022957808201518184015260208101905061020e565b60008484015250505050565b6000601f19601f8301169050919050565b6000610251826101ef565b61025b81856101fa565b935061026b81856020860161020b565b61027481610235565b840191505092915050565b600060208201905081810360008301526102998184610246565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061031757607f821691505b60208210810361032a576103296102d0565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026103927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610355565b61039c8683610355565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006103e36103de6103d9846103b4565b6103be565b6103b4565b9050919050565b6000819050919050565b6103fd836103c8565b610411610409826103ea565b848454610362565b825550505050565b600090565b610426610419565b6104318184846103f4565b505050565b5b818110156104555761044a60008261041e565b600181019050610437565b5050565b601f82111561049a5761046b81610330565b61047484610345565b81016020851015610483578190505b61049761048f85610345565b830182610436565b50505b505050565b600082821c905092915050565b60006104bd6000198460080261049f565b1980831691505092915050565b60006104d683836104ac565b9150826002028217905092915050565b6104ef826101ef565b67ffffffffffffffff811115610508576105076102a1565b5b61051282546102ff565b61051d828285610459565b600060209050601f831160018114610550576000841561053e578287015190505b61054885826104ca565b8655506105b0565b601f19841661055e86610330565b60005b8281101561058657848901518255600182019150602085019450602081019050610561565b868310156105a3578489015161059f601f8916826104ac565b8355505b6001600288020188555050505b50505050505056fea26469706673582212208451bc7433cf849767f6f33d2f98800b01deb2cac9eb6145f4e2d93b8e42f04564736f6c63430008130033";

type RocketConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RocketConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Rocket__factory extends ContractFactory {
  constructor(...args: RocketConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _name: string,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_name, overrides || {});
  }
  override deploy(
    _name: string,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_name, overrides || {}) as Promise<
      Rocket & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Rocket__factory {
    return super.connect(runner) as Rocket__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RocketInterface {
    return new Interface(_abi) as RocketInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Rocket {
    return new Contract(address, _abi, runner) as unknown as Rocket;
  }
}
