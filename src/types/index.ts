import { StyledComponent } from 'styled-components';

/**
 * User types
 */

export interface User {
  id: number;
  displayName: string;
  email: string;
  createdAt: Date;
}

export interface UserRef {
  get(): Promise<UserSnapshot>;
}

export interface UserSnapshot {
  id: number;
  data(): User;
}

export interface EmailSignInData {
  email: string;
  password: string;
}

export interface EmailSignUpData extends EmailSignInData {
  displayName: string;
}

export interface SignUpSuccessData {
  user: User;
  additionalData: { [key: string]: any };
}

/**
 * Cart types
 */

export interface CartItem {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
}

/**
 * Collection types
 */

export interface Collection {
  id: number;
  title: string;
  items: CartItem[];
  routeName: string;
}

/**
 * Sections
 */

export interface Section {
  id: number;
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: string;
}

/**
 * Styled components
 */

export interface StyledComponentsObject {
  [name: string]: StyledComponent<any, any>;
}
