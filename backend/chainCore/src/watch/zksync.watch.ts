import { Address, ITransaction, QueryTxFilterZKSync } from '../types'
import AbstractWatch from './base.watch'
export default class ZKSyncWatch extends AbstractWatch {
  public async getApiFilter(address: Address):Promise<QueryTxFilterZKSync> {
    const params:Partial<QueryTxFilterZKSync> = {
      from: 'latest',
      limit: 100,
      direction: 'newer'
    }
    const cursor = await this.cursor(address)
    if (cursor && cursor.hash) {
      params.from = String(cursor.hash)
    }
    return params as QueryTxFilterZKSync;
  }

  public async apiWatchNewTransaction(
    address: Address
  ): Promise<Array<ITransaction>> {
    const filter:any = await this.getApiFilter(address)
    const response = await this.chain.getTransactions(address, filter)
    return response.txlist
  }
  public async ws() {
    throw new Error('Method not implemented.')
  }
}
