require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note sad solid grace industry outer submit'; 
let testAccounts = [
"0x68ad610a0a95722befc411365e5371bb8a09d65f22bf27550fdc291cf8667291",
"0xbe53b1ab105fe65b602070c5838c06d8807b3733a204a8059dc8b2ddd7e1f363",
"0xb8f9642c51a2220d3271e7b381d41be691727e6980ebe0fab1892c7ac2cc02ac",
"0x2bfa166b161189e68c9b70b20550bb9031a09f8df3ab5495f9da00f2e04c8bde",
"0xb9d06801a87e6f1294e0d924bf8ca77231fa1ce8742938d9f814de2940d9fcc7",
"0xc3d76795e17f8226c6a5c2571f0cacdafc4c19626ed2753919ed5d526f6869ab",
"0x99a950d4ab5699a26f315382bb403369f658556351474d18b708df1e23a93e0a",
"0x4c75a3b94d7caae8b4a29ea95cae1cf692c446b6aac9f607b6667e4276abbcf5",
"0x691ea445e7df365467a90c66a523140b93b2b31baad9bd96ca91deb7f37d4367",
"0xaeae8fbe8ec004089794c54698f5e01793df4badc157b8ad3be2364b8f803628"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

