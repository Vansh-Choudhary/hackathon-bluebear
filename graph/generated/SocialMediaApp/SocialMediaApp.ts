// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class UploadComment extends ethereum.Event {
  get params(): UploadComment__Params {
    return new UploadComment__Params(this);
  }
}

export class UploadComment__Params {
  _event: UploadComment;

  constructor(event: UploadComment) {
    this._event = event;
  }

  get commentId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get relatedPostId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get comment(): string {
    return this._event.parameters[2].value.toString();
  }

  get commentDate(): string {
    return this._event.parameters[3].value.toString();
  }

  get commentedUser(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class UploadPost extends ethereum.Event {
  get params(): UploadPost__Params {
    return new UploadPost__Params(this);
  }
}

export class UploadPost__Params {
  _event: UploadPost;

  constructor(event: UploadPost) {
    this._event = event;
  }

  get postId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get postImage(): string {
    return this._event.parameters[1].value.toString();
  }

  get caption(): string {
    return this._event.parameters[2].value.toString();
  }

  get tags(): string {
    return this._event.parameters[3].value.toString();
  }

  get date(): string {
    return this._event.parameters[4].value.toString();
  }

  get user(): Address {
    return this._event.parameters[5].value.toAddress();
  }
}

export class SocialMediaApp__getCommentsResultValue0Struct extends ethereum.Tuple {
  get commentId(): BigInt {
    return this[0].toBigInt();
  }

  get relatedPostId(): BigInt {
    return this[1].toBigInt();
  }

  get comment(): string {
    return this[2].toString();
  }

  get commentDate(): string {
    return this[3].toString();
  }

  get commentedUser(): Address {
    return this[4].toAddress();
  }
}

export class SocialMediaApp__getPostResultValue0Struct extends ethereum.Tuple {
  get postId(): BigInt {
    return this[0].toBigInt();
  }

  get postImage(): string {
    return this[1].toString();
  }

  get caption(): string {
    return this[2].toString();
  }

  get tags(): string {
    return this[3].toString();
  }

  get date(): string {
    return this[4].toString();
  }

  get user(): Address {
    return this[5].toAddress();
  }
}

export class SocialMediaApp__getPostsResultValue0Struct extends ethereum.Tuple {
  get postId(): BigInt {
    return this[0].toBigInt();
  }

  get postImage(): string {
    return this[1].toString();
  }

  get caption(): string {
    return this[2].toString();
  }

  get tags(): string {
    return this[3].toString();
  }

  get date(): string {
    return this[4].toString();
  }

  get user(): Address {
    return this[5].toAddress();
  }
}

export class SocialMediaApp extends ethereum.SmartContract {
  static bind(address: Address): SocialMediaApp {
    return new SocialMediaApp("SocialMediaApp", address);
  }

  getComments(): Array<SocialMediaApp__getCommentsResultValue0Struct> {
    let result = super.call(
      "getComments",
      "getComments():((uint256,uint256,string,string,address)[])",
      []
    );

    return result[0].toTupleArray<
      SocialMediaApp__getCommentsResultValue0Struct
    >();
  }

  try_getComments(): ethereum.CallResult<
    Array<SocialMediaApp__getCommentsResultValue0Struct>
  > {
    let result = super.tryCall(
      "getComments",
      "getComments():((uint256,uint256,string,string,address)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<SocialMediaApp__getCommentsResultValue0Struct>()
    );
  }

  getPost(id: BigInt): SocialMediaApp__getPostResultValue0Struct {
    let result = super.call(
      "getPost",
      "getPost(uint256):((uint256,string,string,string,string,address))",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );

    return changetype<SocialMediaApp__getPostResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getPost(
    id: BigInt
  ): ethereum.CallResult<SocialMediaApp__getPostResultValue0Struct> {
    let result = super.tryCall(
      "getPost",
      "getPost(uint256):((uint256,string,string,string,string,address))",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<SocialMediaApp__getPostResultValue0Struct>(value[0].toTuple())
    );
  }

  getPosts(): Array<SocialMediaApp__getPostsResultValue0Struct> {
    let result = super.call(
      "getPosts",
      "getPosts():((uint256,string,string,string,string,address)[])",
      []
    );

    return result[0].toTupleArray<SocialMediaApp__getPostsResultValue0Struct>();
  }

  try_getPosts(): ethereum.CallResult<
    Array<SocialMediaApp__getPostsResultValue0Struct>
  > {
    let result = super.tryCall(
      "getPosts",
      "getPosts():((uint256,string,string,string,string,address)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<SocialMediaApp__getPostsResultValue0Struct>()
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class UploadCommentCall extends ethereum.Call {
  get inputs(): UploadCommentCall__Inputs {
    return new UploadCommentCall__Inputs(this);
  }

  get outputs(): UploadCommentCall__Outputs {
    return new UploadCommentCall__Outputs(this);
  }
}

export class UploadCommentCall__Inputs {
  _call: UploadCommentCall;

  constructor(call: UploadCommentCall) {
    this._call = call;
  }

  get postId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get postComment(): string {
    return this._call.inputValues[1].value.toString();
  }

  get date(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class UploadCommentCall__Outputs {
  _call: UploadCommentCall;

  constructor(call: UploadCommentCall) {
    this._call = call;
  }
}

export class UploadPostCall extends ethereum.Call {
  get inputs(): UploadPostCall__Inputs {
    return new UploadPostCall__Inputs(this);
  }

  get outputs(): UploadPostCall__Outputs {
    return new UploadPostCall__Outputs(this);
  }
}

export class UploadPostCall__Inputs {
  _call: UploadPostCall;

  constructor(call: UploadPostCall) {
    this._call = call;
  }

  get postImage(): string {
    return this._call.inputValues[0].value.toString();
  }

  get caption(): string {
    return this._call.inputValues[1].value.toString();
  }

  get tags(): string {
    return this._call.inputValues[2].value.toString();
  }

  get postDate(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class UploadPostCall__Outputs {
  _call: UploadPostCall;

  constructor(call: UploadPostCall) {
    this._call = call;
  }
}