import { Portfolio } from './portfolio.model';

export interface Investor {
  id: number,
  investor_name: string,
  email: string,
  city: string,
  country: string,
  balance: number,
  photo?: string,
  portfolio?: Portfolio,
  portfolio_value: number,
  first_access: boolean,
  super_angel: boolean
}