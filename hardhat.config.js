require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */
console.log(
  process.env.REACT_DAPP_ACCOUNT_KEY,
  'process.env.REACT_DAPP_ACCOUNT_KEY'
);
module.exports = {
  solidity: '0.8.17',
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: 'https://goerli.infura.io/v3/331699f8f71f4e4ea591e8c47bc41651',
      accounts: [`0x${process.env.REACT_DAPP_ACCOUNT_KEY}`],
    },
  },
};
