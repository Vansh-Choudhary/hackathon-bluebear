/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  SocialMediaApp,
  SocialMediaAppInterface,
} from "../SocialMediaApp";

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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "commentId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "relatedPostId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "comment",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "commentDate",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "commentedUser",
        type: "address",
      },
    ],
    name: "UploadComment",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "postImage",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "caption",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "tags",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "date",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "UploadPost",
    type: "event",
  },
  {
    inputs: [],
    name: "getComments",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "commentId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "relatedPostId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "comment",
            type: "string",
          },
          {
            internalType: "string",
            name: "commentDate",
            type: "string",
          },
          {
            internalType: "address",
            name: "commentedUser",
            type: "address",
          },
        ],
        internalType: "struct SocialMediaApp.Comment[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getPost",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "postId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "postImage",
            type: "string",
          },
          {
            internalType: "string",
            name: "caption",
            type: "string",
          },
          {
            internalType: "string",
            name: "tags",
            type: "string",
          },
          {
            internalType: "string",
            name: "date",
            type: "string",
          },
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
        ],
        internalType: "struct SocialMediaApp.Post",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPosts",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "postId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "postImage",
            type: "string",
          },
          {
            internalType: "string",
            name: "caption",
            type: "string",
          },
          {
            internalType: "string",
            name: "tags",
            type: "string",
          },
          {
            internalType: "string",
            name: "date",
            type: "string",
          },
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
        ],
        internalType: "struct SocialMediaApp.Post[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "postComment",
        type: "string",
      },
      {
        internalType: "string",
        name: "date",
        type: "string",
      },
    ],
    name: "uploadComment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "postImage",
        type: "string",
      },
      {
        internalType: "string",
        name: "caption",
        type: "string",
      },
      {
        internalType: "string",
        name: "tags",
        type: "string",
      },
      {
        internalType: "string",
        name: "postDate",
        type: "string",
      },
    ],
    name: "uploadPost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620025253803806200252583398181016040528101906200003791906200033f565b620000836040518060400160405280601681526020017f53636f6369616c204d6564696120417070204e616d650000000000000000000081525082620000dd60201b62000d341760201c565b8060009081620000949190620005db565b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200074f565b6200017f8282604051602401620000f692919062000714565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200018360201b60201c565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200021582620001ca565b810181811067ffffffffffffffff82111715620002375762000236620001db565b5b80604052505050565b60006200024c620001ac565b90506200025a82826200020a565b919050565b600067ffffffffffffffff8211156200027d576200027c620001db565b5b6200028882620001ca565b9050602081019050919050565b60005b83811015620002b557808201518184015260208101905062000298565b60008484015250505050565b6000620002d8620002d2846200025f565b62000240565b905082815260208101848484011115620002f757620002f6620001c5565b5b6200030484828562000295565b509392505050565b600082601f830112620003245762000323620001c0565b5b815162000336848260208601620002c1565b91505092915050565b600060208284031215620003585762000357620001b6565b5b600082015167ffffffffffffffff811115620003795762000378620001bb565b5b62000387848285016200030c565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003e357607f821691505b602082108103620003f957620003f86200039b565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004637fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000424565b6200046f868362000424565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620004bc620004b6620004b08462000487565b62000491565b62000487565b9050919050565b6000819050919050565b620004d8836200049b565b620004f0620004e782620004c3565b84845462000431565b825550505050565b600090565b62000507620004f8565b62000514818484620004cd565b505050565b5b818110156200053c5762000530600082620004fd565b6001810190506200051a565b5050565b601f8211156200058b576200055581620003ff565b620005608462000414565b8101602085101562000570578190505b620005886200057f8562000414565b83018262000519565b50505b505050565b600082821c905092915050565b6000620005b06000198460080262000590565b1980831691505092915050565b6000620005cb83836200059d565b9150826002028217905092915050565b620005e68262000390565b67ffffffffffffffff811115620006025762000601620001db565b5b6200060e8254620003ca565b6200061b82828562000540565b600060209050601f8311600181146200065357600084156200063e578287015190505b6200064a8582620005bd565b865550620006ba565b601f1984166200066386620003ff565b60005b828110156200068d5784890151825560018201915060208501945060208101905062000666565b86831015620006ad5784890151620006a9601f8916826200059d565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b6000620006e08262000390565b620006ec8185620006c2565b9350620006fe81856020860162000295565b6200070981620001ca565b840191505092915050565b60006040820190508181036000830152620007308185620006d3565b90508181036020830152620007468184620006d3565b90509392505050565b611dc6806200075f6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806340731c241461005c57806341f3004a1461008c5780634ac8e7fd146100aa57806391f3410c146100c6578063e96d2fb0146100e4575b600080fd5b61007660048036038101906100719190610ef8565b610100565b60405161008391906110a3565b60405180910390f35b6100946103d5565b6040516100a19190611225565b60405180910390f35b6100c460048036038101906100bf919061137c565b610760565b005b6100ce610938565b6040516100db9190611592565b60405180910390f35b6100fe60048036038101906100f991906115b4565b610ba9565b005b610108610e1d565b600460008381526020019081526020016000206040518060c0016040529081600082015481526020016001820180546101409061166e565b80601f016020809104026020016040519081016040528092919081815260200182805461016c9061166e565b80156101b95780601f1061018e576101008083540402835291602001916101b9565b820191906000526020600020905b81548152906001019060200180831161019c57829003601f168201915b505050505081526020016002820180546101d29061166e565b80601f01602080910402602001604051908101604052809291908181526020018280546101fe9061166e565b801561024b5780601f106102205761010080835404028352916020019161024b565b820191906000526020600020905b81548152906001019060200180831161022e57829003601f168201915b505050505081526020016003820180546102649061166e565b80601f01602080910402602001604051908101604052809291908181526020018280546102909061166e565b80156102dd5780601f106102b2576101008083540402835291602001916102dd565b820191906000526020600020905b8154815290600101906020018083116102c057829003601f168201915b505050505081526020016004820180546102f69061166e565b80601f01602080910402602001604051908101604052809291908181526020018280546103229061166e565b801561036f5780601f106103445761010080835404028352916020019161036f565b820191906000526020600020905b81548152906001019060200180831161035257829003601f168201915b505050505081526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050919050565b606060006103e36002610dd0565b905060008167ffffffffffffffff81111561040157610400611251565b5b60405190808252806020026020018201604052801561043a57816020015b610427610e1d565b81526020019060019003908161041f5790505b50905060005b8281101561075757600060018261045791906116ce565b90506000600460008381526020019081526020016000209050806040518060c0016040529081600082015481526020016001820180546104969061166e565b80601f01602080910402602001604051908101604052809291908181526020018280546104c29061166e565b801561050f5780601f106104e45761010080835404028352916020019161050f565b820191906000526020600020905b8154815290600101906020018083116104f257829003601f168201915b505050505081526020016002820180546105289061166e565b80601f01602080910402602001604051908101604052809291908181526020018280546105549061166e565b80156105a15780601f10610576576101008083540402835291602001916105a1565b820191906000526020600020905b81548152906001019060200180831161058457829003601f168201915b505050505081526020016003820180546105ba9061166e565b80601f01602080910402602001604051908101604052809291908181526020018280546105e69061166e565b80156106335780601f1061060857610100808354040283529160200191610633565b820191906000526020600020905b81548152906001019060200180831161061657829003601f168201915b5050505050815260200160048201805461064c9061166e565b80601f01602080910402602001604051908101604052809291908181526020018280546106789061166e565b80156106c55780601f1061069a576101008083540402835291602001916106c5565b820191906000526020600020905b8154815290600101906020018083116106a857829003601f168201915b505050505081526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505084848151811061073757610736611702565b5b60200260200101819052505050808061074f90611731565b915050610440565b50809250505090565b60008451116107a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079b906117d6565b60405180910390fd5b60008351116107e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107df90611842565b60405180910390fd5b600082511161082c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610823906118ae565b60405180910390fd5b6108366002610dde565b60006108426002610dd0565b90506000600460008381526020019081526020016000209050818160000181905550858160010190816108759190611a7a565b50848160020190816108879190611a7a565b50838160030190816108999190611a7a565b50828160040190816108ab9190611a7a565b50338160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fe83d5f9afb8e1c19d7c72681e5e92f701f5b6f64822b01d077379012fe4a848282878787873360405161092896959493929190611ba3565b60405180910390a1505050505050565b606060006109466003610dd0565b905060008167ffffffffffffffff81111561096457610963611251565b5b60405190808252806020026020018201604052801561099d57816020015b61098a610e69565b8152602001906001900390816109825790505b50905060005b82811015610ba05760006001826109ba91906116ce565b90506000600560008381526020019081526020016000209050806040518060a00160405290816000820154815260200160018201548152602001600282018054610a039061166e565b80601f0160208091040260200160405190810160405280929190818152602001828054610a2f9061166e565b8015610a7c5780601f10610a5157610100808354040283529160200191610a7c565b820191906000526020600020905b815481529060010190602001808311610a5f57829003601f168201915b50505050508152602001600382018054610a959061166e565b80601f0160208091040260200160405190810160405280929190818152602001828054610ac19061166e565b8015610b0e5780601f10610ae357610100808354040283529160200191610b0e565b820191906000526020600020905b815481529060010190602001808311610af157829003601f168201915b505050505081526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050848481518110610b8057610b7f611702565b5b602002602001018190525050508080610b9890611731565b9150506109a3565b50809250505090565b6000610bb56002610dd0565b118015610bc3575060008314155b610c02576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf990611c6c565b60405180910390fd5b6000825111610c46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3d90611cd8565b60405180910390fd5b610c506003610dde565b6000610c5c6003610dd0565b9050600060056000838152602001908152602001600020905081816000018190555084816001018190555083816002019081610c989190611a7a565b5082816003019081610caa9190611a7a565b50338160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f4f86e3ca7c283ca86241c8c7b0423203bf538aa29729c1e89e7dc060ae64a57c8286868633604051610d25959493929190611cf8565b60405180910390a15050505050565b610dcc8282604051602401610d4a929190611d59565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610df4565b5050565b600081600001549050919050565b6001816000016000828254019250508190555050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6040518060c001604052806000815260200160608152602001606081526020016060815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b6040518060a0016040528060008152602001600081526020016060815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b610ed581610ec2565b8114610ee057600080fd5b50565b600081359050610ef281610ecc565b92915050565b600060208284031215610f0e57610f0d610eb8565b5b6000610f1c84828501610ee3565b91505092915050565b610f2e81610ec2565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610f6e578082015181840152602081019050610f53565b60008484015250505050565b6000601f19601f8301169050919050565b6000610f9682610f34565b610fa08185610f3f565b9350610fb0818560208601610f50565b610fb981610f7a565b840191505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610fef82610fc4565b9050919050565b610fff81610fe4565b82525050565b600060c08301600083015161101d6000860182610f25565b50602083015184820360208601526110358282610f8b565b9150506040830151848203604086015261104f8282610f8b565b915050606083015184820360608601526110698282610f8b565b915050608083015184820360808601526110838282610f8b565b91505060a083015161109860a0860182610ff6565b508091505092915050565b600060208201905081810360008301526110bd8184611005565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600060c0830160008301516111096000860182610f25565b50602083015184820360208601526111218282610f8b565b9150506040830151848203604086015261113b8282610f8b565b915050606083015184820360608601526111558282610f8b565b9150506080830151848203608086015261116f8282610f8b565b91505060a083015161118460a0860182610ff6565b508091505092915050565b600061119b83836110f1565b905092915050565b6000602082019050919050565b60006111bb826110c5565b6111c581856110d0565b9350836020820285016111d7856110e1565b8060005b8581101561121357848403895281516111f4858261118f565b94506111ff836111a3565b925060208a019950506001810190506111db565b50829750879550505050505092915050565b6000602082019050818103600083015261123f81846111b0565b905092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61128982610f7a565b810181811067ffffffffffffffff821117156112a8576112a7611251565b5b80604052505050565b60006112bb610eae565b90506112c78282611280565b919050565b600067ffffffffffffffff8211156112e7576112e6611251565b5b6112f082610f7a565b9050602081019050919050565b82818337600083830152505050565b600061131f61131a846112cc565b6112b1565b90508281526020810184848401111561133b5761133a61124c565b5b6113468482856112fd565b509392505050565b600082601f83011261136357611362611247565b5b813561137384826020860161130c565b91505092915050565b6000806000806080858703121561139657611395610eb8565b5b600085013567ffffffffffffffff8111156113b4576113b3610ebd565b5b6113c08782880161134e565b945050602085013567ffffffffffffffff8111156113e1576113e0610ebd565b5b6113ed8782880161134e565b935050604085013567ffffffffffffffff81111561140e5761140d610ebd565b5b61141a8782880161134e565b925050606085013567ffffffffffffffff81111561143b5761143a610ebd565b5b6114478782880161134e565b91505092959194509250565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600060a0830160008301516114976000860182610f25565b5060208301516114aa6020860182610f25565b50604083015184820360408601526114c28282610f8b565b915050606083015184820360608601526114dc8282610f8b565b91505060808301516114f16080860182610ff6565b508091505092915050565b6000611508838361147f565b905092915050565b6000602082019050919050565b600061152882611453565b611532818561145e565b9350836020820285016115448561146f565b8060005b85811015611580578484038952815161156185826114fc565b945061156c83611510565b925060208a01995050600181019050611548565b50829750879550505050505092915050565b600060208201905081810360008301526115ac818461151d565b905092915050565b6000806000606084860312156115cd576115cc610eb8565b5b60006115db86828701610ee3565b935050602084013567ffffffffffffffff8111156115fc576115fb610ebd565b5b6116088682870161134e565b925050604084013567ffffffffffffffff81111561162957611628610ebd565b5b6116358682870161134e565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061168657607f821691505b6020821081036116995761169861163f565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006116d982610ec2565b91506116e483610ec2565b92508282019050808211156116fc576116fb61169f565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061173c82610ec2565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361176e5761176d61169f565b5b600182019050919050565b600082825260208201905092915050565b7f506c656173652053656c65637420506f73740000000000000000000000000000600082015250565b60006117c0601283611779565b91506117cb8261178a565b602082019050919050565b600060208201905081810360008301526117ef816117b3565b9050919050565b7f506c6561736520456e7465722043617074696f6e210000000000000000000000600082015250565b600061182c601583611779565b9150611837826117f6565b602082019050919050565b6000602082019050818103600083015261185b8161181f565b9050919050565b7f506c6561736520456e7465722054616700000000000000000000000000000000600082015250565b6000611898601083611779565b91506118a382611862565b602082019050919050565b600060208201905081810360008301526118c78161188b565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026119307fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826118f3565b61193a86836118f3565b95508019841693508086168417925050509392505050565b6000819050919050565b600061197761197261196d84610ec2565b611952565b610ec2565b9050919050565b6000819050919050565b6119918361195c565b6119a561199d8261197e565b848454611900565b825550505050565b600090565b6119ba6119ad565b6119c5818484611988565b505050565b5b818110156119e9576119de6000826119b2565b6001810190506119cb565b5050565b601f821115611a2e576119ff816118ce565b611a08846118e3565b81016020851015611a17578190505b611a2b611a23856118e3565b8301826119ca565b50505b505050565b600082821c905092915050565b6000611a5160001984600802611a33565b1980831691505092915050565b6000611a6a8383611a40565b9150826002028217905092915050565b611a8382610f34565b67ffffffffffffffff811115611a9c57611a9b611251565b5b611aa6825461166e565b611ab18282856119ed565b600060209050601f831160018114611ae45760008415611ad2578287015190505b611adc8582611a5e565b865550611b44565b601f198416611af2866118ce565b60005b82811015611b1a57848901518255600182019150602085019450602081019050611af5565b86831015611b375784890151611b33601f891682611a40565b8355505b6001600288020188555050505b505050505050565b611b5581610ec2565b82525050565b6000611b6682610f34565b611b708185611779565b9350611b80818560208601610f50565b611b8981610f7a565b840191505092915050565b611b9d81610fe4565b82525050565b600060c082019050611bb86000830189611b4c565b8181036020830152611bca8188611b5b565b90508181036040830152611bde8187611b5b565b90508181036060830152611bf28186611b5b565b90508181036080830152611c068185611b5b565b9050611c1560a0830184611b94565b979650505050505050565b7f506f7374204e6f7420417661696c61626c650000000000000000000000000000600082015250565b6000611c56601283611779565b9150611c6182611c20565b602082019050919050565b60006020820190508181036000830152611c8581611c49565b9050919050565b7f506c656173652041646420436f6d6d656e740000000000000000000000000000600082015250565b6000611cc2601283611779565b9150611ccd82611c8c565b602082019050919050565b60006020820190508181036000830152611cf181611cb5565b9050919050565b600060a082019050611d0d6000830188611b4c565b611d1a6020830187611b4c565b8181036040830152611d2c8186611b5b565b90508181036060830152611d408185611b5b565b9050611d4f6080830184611b94565b9695505050505050565b60006040820190508181036000830152611d738185611b5b565b90508181036020830152611d878184611b5b565b9050939250505056fea264697066735822122041f43ab0e616cd646c6976d5abe8c8ec1c51de306cce3df3969aaf64c6969e8764736f6c63430008110033";

type SocialMediaAppConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SocialMediaAppConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SocialMediaApp__factory extends ContractFactory {
  constructor(...args: SocialMediaAppConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SocialMediaApp> {
    return super.deploy(_name, overrides || {}) as Promise<SocialMediaApp>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, overrides || {});
  }
  override attach(address: string): SocialMediaApp {
    return super.attach(address) as SocialMediaApp;
  }
  override connect(signer: Signer): SocialMediaApp__factory {
    return super.connect(signer) as SocialMediaApp__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SocialMediaAppInterface {
    return new utils.Interface(_abi) as SocialMediaAppInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SocialMediaApp {
    return new Contract(address, _abi, signerOrProvider) as SocialMediaApp;
  }
}