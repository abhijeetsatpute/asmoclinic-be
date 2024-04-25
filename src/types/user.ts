export interface CreateUser {
  username: string;
  email: string;
  password: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface tokenPayload {
  username: string | undefined;
  userId: string | undefined;
  userType: string | undefined;
  iat: number | undefined;
}
