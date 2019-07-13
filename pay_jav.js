/* Javscript */
const appState = {};
const formatAsMoney = (amount, buyerCountry) => {
  const country = countries.find(country.country == buyerCountry);
  if(country){
    return amount.toLocaleString(country.code, {style: 'currency', currency: country.currency});
    
  }else{
    return amount.toLocaleString(countries[0].code, {style: 'currency', currency:countries[0].currency});
  }
 
};
const appState = {};
const formatAsMoney = (amount, buyerCountry) => {
  amount.toLocaleString();
  buyerCountry.toLocaleString();
};

//functions for validating cardtype, expirydate and holder's name.
const detectCardType = ({target: cardType}) => {};
const validateCardExpiryDate = ({target: expiryate}) => {};
const validateCardHolderName = ({target: holderName}) => {};

//function to setup UI
const uiCanInteract = () => {};
//function to obtain results
//function to obtain results
const displayCartTotal = ({results}) => {
  const [{data}] = results;
  const {itemsInCart, buyerCountry} = data;
  appState.items = ItemsInCart;
  appState.country = buyerCountry;
 //assign cal bill 
 appState.bill = itemsInCart.reduce((usr, itm) => {
   return usr + (itm.price * itm.qty);
 }, 0);
 
 appState.billFormated = formatAsMoney(appState.bill, appState.country);
 document.querySelector(span[data-bill]).textContent = appState.billFormated;

  uiCanInteract();
};
                                    
//step2 fetchBill function
const fetchBill = () => {
 const api = "https://randomapi.com/api/006b08a801d82d0c9824dcfdfdfa3b3c";
 fetch(api)
   .then(response => {response.json()})
   .then(data => {displayCartTotal(data)})
   .catch(error => console.log(error))
};


const supportedCards = {
    visa, mastercard
  };
  
  const countries = [
    {
      code: "US",
      currency: "USD",
      country: 'United States'
    },
    {
      code: "NG",
      currency: "NGN",
      country: 'Nigeria'
    },
    {
      code: 'KE',
      currency: 'KES',
      country: 'Kenya'
    },
    {
      code: 'UG',
      currency: 'UGX',
      country: 'Uganda'
    },
    {
      code: 'RW',
      currency: 'RWF',
      country: 'Rwanda'
    },
    {
      code: 'TZ',
      currency: 'TZS',
      country: 'Tanzania'
    },
    {
      code: 'ZA',
      currency: 'ZAR',
      country: 'South Africa'
    },
    {
      code: 'CM',
      currency: 'XAF',
      country: 'Cameroon'
    },
    {
      code: 'GH',
      currency: 'GHS',
      country: 'Ghana'
    }
  ];
  
  const startApp = () => {
  };

  startApp();