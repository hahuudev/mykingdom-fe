export interface ILoginResponse {
  access_token: string;
  access_token_ttl: number;
  refresh_token: string;
  refresh_token_ttl: number;
  user: IUser;
  is_verified_user: boolean;
  verify_token: string;
}

export interface IRefreshTokenResponse extends ILoginResponse {}

export interface IUser {
  email: string;
  first_name: string;
  last_name: string;
  id: number;
  username: string;
  avatar: string;
  wallet_address: string;
}
export interface IForgotPassword {
  email: string;
}
export interface IResetPassword {
  email: string | string[] | undefined;
  password: string;
  token: string | string[] | undefined;
}

export interface IProfile {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
}
export interface IChangePassword {
  oldPassword: string;
  newPassword: string;
}

export interface IVerifyAccount {
  token: string;
  userId: string;
}

export interface IVerifyAccountResponse {
  token: string;
  userId: string;
}

export interface IWalletConnect {
  wallet_address: string;
  signature: string;
  nonce: string;
}

export interface IUploadAvatarResponse {
  file_name: string;
  url: string;
}
