import { Investor } from './investor.model';

export interface User {
  enterprise?: string,
  success: boolean,
  investor: Investor
}