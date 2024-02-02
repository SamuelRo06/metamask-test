import './App.css';
import Web3 from 'web3';
import { useEffect, useState } from 'react';

function App() {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [data, setData] = useState([]);  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/nfts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        console.log('Fetched data:', jsonData);
        
        // Check if the 'nfts' property is present in the response
        const nftsData = jsonData.nfts || [];
        setData(nftsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching NFTs:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
    } else {
      console.log('MetaMask not detected');
    }
  }, []);

  useEffect(() => {
    console.log('Data:', data);
  }, [data]);

  const connectWallet = async () => {
    if (web3) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setAccounts(accounts);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      {accounts.length > 0 && <p>Connected account: {accounts[0]}</p>}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        Array.isArray(data) ? (
          data.map((nft) => (
            <div key={nft.identifier}>
              <h1>{nft.collection}</h1>
              <h2>{nft.description}</h2>
              <img src={nft.image_url} alt='image extracted from metamask collection api'/>
            </div>
          ))
        ) : (
          <p>Data is not an array</p>
        )
      )}
    </div>
  );
}

export default App;
