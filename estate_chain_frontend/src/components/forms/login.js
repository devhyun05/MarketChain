import React, { useState } from 'react';


export const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null); 
  const [userBalance, setUserBalance] = useState(null); 
  const [connButtonText, setConnButtonText] = useState('Connect Wallet'); 

    const connectWalletHandler = () => {
      
      if (window.ethereum) {
          window.ethereum.request({method: 'eth_requestAccounts'})
          .then(result => {
              accountChangedHandler(result[0])
          }); 
      } else {
          setErrorMessage("Install MetaMask")
      }
  }

    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount); 
        getUserBalance(newAccount); 
    }

    const getUserBalance = (address) => {
      window.ethereum.request({ method: 'eth_getBalance', params: [address] })
          .then(balance => {
              setUserBalance(balance);
          })
          .catch(error => {
              console.error("Error fetching balance:", error);
          });
  };
  


  return (
    <>
    <a onClick={connectWalletHandler} className="text-sm font-semibold leading-6 text-gray-900">        
             <button type="button" 
                    className="text-white bg-blue-400 hover:bg-gray-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center "
                    onClick={connectWalletHandler}>
                {connButtonText}
            </button>
            <span aria-hidden="true">&rarr;</span>
          </a>
             <div className="accountDisplay">
              <h3>Address: {defaultAccount}</h3>
            </div>
            <div className="balanceDisplay">
              <h3>Balance: {userBalance}</h3>
            </div>
            {errorMessage}
    </>
  );
};
