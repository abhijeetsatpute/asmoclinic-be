export const createTokenUser = (user: any) => {
  return {
    username: user.username,
    userId: user.id,
    userType: user.userType.name,
  };
};
