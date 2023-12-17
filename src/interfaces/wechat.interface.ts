export interface Params {
  wxid: string;
  content: string;
}

export interface Response<T> {
  code: number;
  msg: string;
  data: T;
}

export interface Check {
  status: number;
}

export interface User {
  customAccount: string;
  nickname: string;
  phone: string;
  phoneSystem: string;
  profilePircture: string;
  proilePictureSmall: string;
  wxid: string;
}

export interface Contact {
  customAccount: string;
  nickname: string;
  note: string;
  pinYin: string;
  pinYinAll: string;
  type1: number;
  type2: number;
  wxid: number;
}
