# NFTix Demo UI

https://egghead.io/courses/build-an-nft-based-ticketing-system-1a2f387c

## Get started

1. Clone the repo to you local system

```bash
git clone git@github.com:ryancharris/nftix-demo-ui.git
```

2. Open the directory

```bash
cd nftix-demo-ui
```

3. Install the required node modules

```bash
yarn install
```

4. Set the value of `REACT_APP_CONTRACT_ID`

```env
# .env.development.local

REACT_APP_CONTRACT_ID=0x1234567890
```

5. Start the development server

```bash
yarn start
```

// ON EVERY REDEPLOY OF THE CONTRACT

- change env variable ID
- change abi file
