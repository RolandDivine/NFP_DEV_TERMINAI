// This is the JavaScript file where you'll write your DApp logic using Web3.js

// Define global variables
let contractAddress;
let contractInstance;
let userAddress;
let rewardInfoElement;

// Function to connect to the Ethereum network and instantiate the smart contract
async function connectToContract() {
    if (!window.ethereum) {
        alert("Please install MetaMask or use a Web3-enabled browser to connect.");
        return;
    }

    // Prompt the user to connect their wallet
    try {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        userAddress = accounts[0];

        // Instantiate the contract with the contract ABI and address
        contractInstance = new web3.eth.Contract(contractABI, contractAddress);

        // Update the UI with the user's address and contract information
        document.getElementById("address").value = userAddress;
        rewardInfoElement = document.getElementById("rewardInfo");
        rewardInfoElement.innerHTML = "Connected to contract: " + contractAddress;
    } catch (error) {
        console.error("Error connecting to contract:", error);
    }
}

// Function to handle the "Claim Reward" button click
async function claimReward() {
    try {
        // Call the smart contract's claimDailyReward function
        await contractInstance.methods.claimDailyReward().send({ from: userAddress });

        // Get the user's claimable rewards and update the UI
        const claimableRewards = await contractInstance.methods.claimableRewards(userAddress).call();
        rewardInfoElement.innerHTML = "Claimed " + claimableRewards + " rewards!";
    } catch (error) {
        console.error("Error claiming reward:", error);
    }
}

// Event listener for the "Connect" button
document.getElementById("connectButton").addEventListener("click", connectToContract);

// Event listener for the "Claim Reward" button
document.getElementById("claimRewardButton").addEventListener("click", claimReward);
