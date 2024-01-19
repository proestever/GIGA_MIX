import networkConfig from '@/networkConfig'

export const CHAIN_IDS = Object.keys(networkConfig)

export const NETWORKS = CHAIN_IDS.map((i) => i.replace('netId', ''))

export const LOCALES_NAMES = {
  en: 'en-US',
  es: 'es-ES',
  'zh-cn': 'zh-CN',
  ru: 'ru-RU',
  tr: 'tr-TR',
  uk: 'uk-UA',
  fr: 'fr-FR'
}
export const SECOND = 1000
export const ROUNDING_PRECISION = 0.0001

const DEPOSIT = 'deposit'
const WITHDRAWAL = 'withdrawal'

export const eventsType = {
  DEPOSIT,
  WITHDRAWAL
}

export const CONTRACT_INSTANCES = ['1', '2000', '100000', '1000000', '10000000', '100000000']

export const INDEX_DB_ERROR = 'A mutation operation was attempted on a database that did not allow mutations.'

export const ACTION = Object.freeze({
  WITHDRAW: 'WITHDRAW',
  WITHDRAW_WITH_EXTRA: 'WITHDRAW_WITH_EXTRA',
  ARB_WITHDRAW: 'ARB_WITHDRAW',
  OP_WITHDRAW: 'OP_WITHDRAW'
})

// TODO unique gas limit for each token
export const ACTION_GAS = Object.freeze({
  [ACTION.WITHDRAW]: 390000,
  [ACTION.WITHDRAW_WITH_EXTRA]: 550000,
  [ACTION.OP_WITHDRAW]: 440000,
  [ACTION.ARB_WITHDRAW]: 1900000
})

export const GAS_PRICES = ['low', 'standard', 'fast']

export const addressType = { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$' }

// TODO auto update in yarn updateCache
export const cachedEventsLength = {
  mainnet: {
    ENCRYPTED_NOTES: 16898
  },
  goerli: {
    ENCRYPTED_NOTES: 1662
  },
  bsc: {
    ENCRYPTED_NOTES: 11333
  }
}

export const PROVIDERS = {
  walletConnect: {
    name: 'WalletConnect',
    isPartialSupport: true,
    storageName: 'walletconnect',
    listener: 'walletConnectSocketListener'
  },
  metamask: {
    name: 'Metamask',
    isPartialSupport: false
  },
  generic: {
    name: 'Web3 Wallet',
    isPartialSupport: true
  },
  mobileWallet: {
    name: 'Wallet',
    isPartialSupport: true
  }
}

export const REGISTRY_DEPLOYED_BLOCK = {
  1: 14173129
}
export const DONATIONS_ADDRESS = '0x22DfC892c58959f8693f97c0647920f7c28e71b3'

export const trees = {
  PARTS_COUNT: 4,
  LEVELS: 20 // const from contract
}

export const DUMMY_NONCE = '0x1111111111111111111111111111111111111111111111111111111111111111'

export const DUMMY_WITHDRAW_DATA =
  '0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'

export const CHUNK_COUNT_PER_BATCH_REQUEST = 200
