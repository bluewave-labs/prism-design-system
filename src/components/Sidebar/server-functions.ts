'use server';

import jwt from 'jsonwebtoken';
import { cookies as getCookies } from 'next/headers';
import { User } from '../../types/sidebar';

export const logOut = async () => {
  console.log('Logging out');
};

export const getUser = async () => {
  const token = (await getCookies()).get('access_token');
  if (!token) {
    return null;
  }

  const decodeUser = jwt.decode(token.value);
  if (!decodeUser) {
    return null;
  }

  const { exp, ...user } = decodeUser as User & { exp: number };
  return user;
};
