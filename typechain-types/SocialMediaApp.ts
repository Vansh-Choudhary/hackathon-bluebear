/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace SocialMediaApp {
  export type CommentStruct = {
    commentId: PromiseOrValue<BigNumberish>;
    relatedPostId: PromiseOrValue<BigNumberish>;
    comment: PromiseOrValue<string>;
    commentDate: PromiseOrValue<string>;
    commentedUser: PromiseOrValue<string>;
  };

  export type CommentStructOutput = [
    BigNumber,
    BigNumber,
    string,
    string,
    string
  ] & {
    commentId: BigNumber;
    relatedPostId: BigNumber;
    comment: string;
    commentDate: string;
    commentedUser: string;
  };

  export type PostStruct = {
    postId: PromiseOrValue<BigNumberish>;
    postImage: PromiseOrValue<string>;
    caption: PromiseOrValue<string>;
    tags: PromiseOrValue<string>;
    date: PromiseOrValue<string>;
    user: PromiseOrValue<string>;
  };

  export type PostStructOutput = [
    BigNumber,
    string,
    string,
    string,
    string,
    string
  ] & {
    postId: BigNumber;
    postImage: string;
    caption: string;
    tags: string;
    date: string;
    user: string;
  };
}

export interface SocialMediaAppInterface extends utils.Interface {
  functions: {
    "getComments()": FunctionFragment;
    "getPost(uint256)": FunctionFragment;
    "getPosts()": FunctionFragment;
    "uploadComment(uint256,string,string)": FunctionFragment;
    "uploadPost(string,string,string,string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getComments"
      | "getPost"
      | "getPosts"
      | "uploadComment"
      | "uploadPost"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getComments",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPost",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "getPosts", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "uploadComment",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "uploadPost",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getComments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPost", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPosts", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uploadComment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uploadPost", data: BytesLike): Result;

  events: {
    "UploadComment(uint256,uint256,string,string,address)": EventFragment;
    "UploadPost(uint256,string,string,string,string,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "UploadComment"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UploadPost"): EventFragment;
}

export interface UploadCommentEventObject {
  commentId: BigNumber;
  relatedPostId: BigNumber;
  comment: string;
  commentDate: string;
  commentedUser: string;
}
export type UploadCommentEvent = TypedEvent<
  [BigNumber, BigNumber, string, string, string],
  UploadCommentEventObject
>;

export type UploadCommentEventFilter = TypedEventFilter<UploadCommentEvent>;

export interface UploadPostEventObject {
  postId: BigNumber;
  postImage: string;
  caption: string;
  tags: string;
  date: string;
  user: string;
}
export type UploadPostEvent = TypedEvent<
  [BigNumber, string, string, string, string, string],
  UploadPostEventObject
>;

export type UploadPostEventFilter = TypedEventFilter<UploadPostEvent>;

export interface SocialMediaApp extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SocialMediaAppInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getComments(
      overrides?: CallOverrides
    ): Promise<[SocialMediaApp.CommentStructOutput[]]>;

    getPost(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[SocialMediaApp.PostStructOutput]>;

    getPosts(
      overrides?: CallOverrides
    ): Promise<[SocialMediaApp.PostStructOutput[]]>;

    uploadComment(
      postId: PromiseOrValue<BigNumberish>,
      postComment: PromiseOrValue<string>,
      date: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    uploadPost(
      postImage: PromiseOrValue<string>,
      caption: PromiseOrValue<string>,
      tags: PromiseOrValue<string>,
      postDate: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getComments(
    overrides?: CallOverrides
  ): Promise<SocialMediaApp.CommentStructOutput[]>;

  getPost(
    id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<SocialMediaApp.PostStructOutput>;

  getPosts(
    overrides?: CallOverrides
  ): Promise<SocialMediaApp.PostStructOutput[]>;

  uploadComment(
    postId: PromiseOrValue<BigNumberish>,
    postComment: PromiseOrValue<string>,
    date: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  uploadPost(
    postImage: PromiseOrValue<string>,
    caption: PromiseOrValue<string>,
    tags: PromiseOrValue<string>,
    postDate: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getComments(
      overrides?: CallOverrides
    ): Promise<SocialMediaApp.CommentStructOutput[]>;

    getPost(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<SocialMediaApp.PostStructOutput>;

    getPosts(
      overrides?: CallOverrides
    ): Promise<SocialMediaApp.PostStructOutput[]>;

    uploadComment(
      postId: PromiseOrValue<BigNumberish>,
      postComment: PromiseOrValue<string>,
      date: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    uploadPost(
      postImage: PromiseOrValue<string>,
      caption: PromiseOrValue<string>,
      tags: PromiseOrValue<string>,
      postDate: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "UploadComment(uint256,uint256,string,string,address)"(
      commentId?: null,
      relatedPostId?: null,
      comment?: null,
      commentDate?: null,
      commentedUser?: null
    ): UploadCommentEventFilter;
    UploadComment(
      commentId?: null,
      relatedPostId?: null,
      comment?: null,
      commentDate?: null,
      commentedUser?: null
    ): UploadCommentEventFilter;

    "UploadPost(uint256,string,string,string,string,address)"(
      postId?: null,
      postImage?: null,
      caption?: null,
      tags?: null,
      date?: null,
      user?: null
    ): UploadPostEventFilter;
    UploadPost(
      postId?: null,
      postImage?: null,
      caption?: null,
      tags?: null,
      date?: null,
      user?: null
    ): UploadPostEventFilter;
  };

  estimateGas: {
    getComments(overrides?: CallOverrides): Promise<BigNumber>;

    getPost(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPosts(overrides?: CallOverrides): Promise<BigNumber>;

    uploadComment(
      postId: PromiseOrValue<BigNumberish>,
      postComment: PromiseOrValue<string>,
      date: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    uploadPost(
      postImage: PromiseOrValue<string>,
      caption: PromiseOrValue<string>,
      tags: PromiseOrValue<string>,
      postDate: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getComments(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPost(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPosts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    uploadComment(
      postId: PromiseOrValue<BigNumberish>,
      postComment: PromiseOrValue<string>,
      date: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    uploadPost(
      postImage: PromiseOrValue<string>,
      caption: PromiseOrValue<string>,
      tags: PromiseOrValue<string>,
      postDate: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
