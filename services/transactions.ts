import axios from './axios';
import type { AxiosResponse } from 'axios';
import type { Transaction } from '~~/interfaces/Transaction';

export const getTransactions = async (): Promise<AxiosResponse<Transaction[]>> => await axios.get("/transactions");
export const postTransactions = async (transaction: Transaction) => await axios.post('/transactions', transaction);