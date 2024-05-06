# NFT MARKETPLACE DAPP
This NFT Marketplace is a robust platform for buying, selling, and trading digital assets using blockchain technology, designed as the final project for CPSC 559 Advanced Blockchain. Featuring a user-friendly web interface, it leverages Ethereum-compatible networks and Google Cloud Storage for efficient and secure transactions.


### Improvements and Changes
Google Cloud Storage Integration:
- Previous System: Initially, NFT images were stored using IPFS, which, while decentralized, could face issues with image retrieval speeds and availability.
- Current System: Switched to Google Cloud Storage (GCS) for hosting NFT images. This change provides faster load times and more reliable access to the images, enhancing the user experience.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- **Node.js**: Download and install from [Node.js official website](https://nodejs.org/).
- **Metamask Extension**: Install from the [Chrome Web Store](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) or equivalent for your browser.
- **Google Cloud Account**: Create an account at [Google Cloud](https://cloud.google.com/).

## Setup and Installation

### Configure Blockchain Node

1. **Create a Node on Chainstack**: 
   - Follow the instructions at [Chainstack's official documentation](https://docs.chainstack.com/) to create a new node.

2. **Configure Hardhat**:

- **Clone the repository** and navigate to the project directory.
- **Install dependencies**:
   ```bash
   npm install
   ```
- Open hardhat.config.js and add your Chainstack node's HTTPS URL to the network configuration.
- Add your Metamask private key to the accounts key in the same file.


### Deploy Smart Contract
Run the following command to deploy your smart contract using Hardhat on the Chainstack network:
```bash
npx hardhat run scripts/deploy.js --network chainstack
```
### Set Up Google Cloud Storage
1. Create a Google Cloud Storage Bucket: Follow Google Cloud's documentation to create a new bucket.
2. Configure Backend:
- Navigate to the backend directory.
 Replace the privateKey and bucketName in the .env file with your Google Cloud service account key and bucket name.

### Run The Application
```bash
npm run start
```



### Team Members 
Shubhankar Sapa | CWID:885190959 | sapashubhankar@csu.fullerton.edu
Bhavyom Singh Kushwah | CWID:885198051 | bhavyom19@csu.fullerton.edu | 
