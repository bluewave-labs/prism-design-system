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

  try {
    // Replace 'your_secret_key' with the actual secret key from environment variables
    const decodeUser = jwt.verify(token.value, process.env.JWT_SECRET || 'your_secret_key');
    if (!decodeUser) {
      return null;
    }

    const { exp, ...user } = decodeUser as User & { exp: number };
    return user;
  } catch (error) {
    console.error('Error verifying token:', error);
    return null;
  }
};
