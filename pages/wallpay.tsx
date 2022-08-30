import WallPaySDK from 'wallpay-react-sdk';

const wallpaySDK = WallPaySDK({
    sdkPrivateKey:'YOUR_PRIVATE_KEY',  // provided API KEY
    defaultLanguage:"en",              // options are: en, pt, es
    creditCardConfirmUrl:"https://domain.com/MyCustomBuyPage", // required if credit card enabled: it's the return url for credit card purchases
    userSpaceUrl:"https://domain.com/MyUserSpaceUrl",          // optional: display a redirect button after a successfully purchase
});

export default wallpaySDK;