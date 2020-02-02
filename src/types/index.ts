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
  title: string;
  items: CartItem[];
}

/**
 * Sections
 */

export interface Section {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
}
