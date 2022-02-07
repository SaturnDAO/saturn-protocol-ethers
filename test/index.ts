import { exchanges } from 'saturn-types'
import { JsonRpcProvider } from '@ethersproject/providers'
import type { Exchange } from '../typechain'

export interface ExchangeState {
  provider: JsonRpcProvider
  contractAddress: string
  exchange: Exchange
}

export * from '../typechain'

export const state = {
  exchange: <ExchangeState> {
    contractAddress: exchanges.latest('ETC').contractAddress,
    provider: new JsonRpcProvider(
      'https://ethercluster.com/etc',
      { name: 'etc', chainId: 61 }
    )
  }
}