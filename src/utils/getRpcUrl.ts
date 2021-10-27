import sample from 'lodash/sample'

// Array of available nodes to connect to
export const nodes = [process.env.REACT_APP_NODE_1, process.env.REACT_APP_NODE_2, process.env.REACT_APP_NODE_3]

const getNodeUrl = () => {
  return sample(nodes)
}

export const getNodeUrlMatic = () => {
  return sample(['https://rpc-mainnet.maticvigil.com'])
}

export const getNodeUrlMumbai = () => {
  return sample(['https://rpc-mumbai.matic.today'])
}

export default getNodeUrl
