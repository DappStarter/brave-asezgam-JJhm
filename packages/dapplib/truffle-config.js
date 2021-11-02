require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stock rifle nominee erupt gesture hat army genius'; 
let testAccounts = [
"0xdbd7bbbcee8dc6652eb17f4b3c3ef0b68dc28e2ea768d324d3c5a2950cf4193b",
"0x30a2b9341ddc8b6fe7d24505acfe37c6d6d03bb9035b4677d3bf1db269ca71ad",
"0xc91628e83d183fb7211cbf697b1327f61b77014c60075ccdd8d4a224681d7c52",
"0xce4fd59c992c149a6a8a7ecef64d557dfe544106dd2501621a7fb9761db7724d",
"0x0be41ab3903cda3da9e2fa58b013bcb4810d846ec61eb348a7e74f64b44e6ab8",
"0x7fb2b41d3a2713250c1d98ffb65ee41674212c7bec0e5d7de9ca1937f84eed77",
"0xa26167974693830147d91f73e44d9daec79af355518659186da2887d74360604",
"0x0a7d65c3cfd752f0bdbd77e745d2b9b6302b2f0e06733e5bb3797483872159f4",
"0x655049a41baec7ce7437290014a89520cc59cfef350c00a92354c593ea5430f3",
"0xacc7b279d9ce1ad5045d4fddb99ac3433e7601e0a6ad8b9c601bc8bc4e4737fc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


