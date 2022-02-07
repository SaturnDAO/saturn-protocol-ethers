import logger from 'mocha-logger'
import { expect } from 'chai'
import { Exchange__factory, state } from '.'
import { isAddress } from 'ethers/lib/utils'

describe('Testing Exchange Contract', function () {
  this.beforeAll(async function () {
    state.exchange.exchange = Exchange__factory.connect(
      state.exchange.contractAddress, state.exchange.provider
    )

    logger.success('Contractaddress', state.exchange.exchange.address.toCyan())
  })

  it('should return treasury address', async function () {
    const treasuryAddress = await state.exchange.exchange.treasury()
    expect(isAddress(treasuryAddress)).true
    logger.success(treasuryAddress)
  })
})