import { useEffect } from "react";

import {
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from "react-native-google-mobile-ads";

export default () => {};

// export default () => {
//   const [loaded, setLoaded] = useState(false);
//   const [isInitialized, setIsInitialized] = useState(false);

//   useEffect(() => {}, []);

//   useEffect(() => {
//     if (!isInitialized) return;

//     const rewarded = RewardedAd.createForAdRequest(TestIds.REWARDED);

//     const unsubscribeLoaded = rewarded.addAdEventListener(
//       RewardedAdEventType.LOADED,
//       () => {
//         setLoaded(true);
//       }
//     );
//     const unsubscribeEarned = rewarded.addAdEventListener(
//       RewardedAdEventType.EARNED_REWARD,
//       (reward) => {
//         console.log("User earned reward of ", reward);
//       }
//     );

//     // Start loading the rewarded ad straight away
//     rewarded.load();

//     // Unsubscribe from events on unmount
//     return () => {
//       unsubscribeLoaded();
//       unsubscribeEarned();
//     };
//   }, []);

//   const showAd = () => {
//     if (loaded) {
//       rewarded.show();
//     }
//   };

//   // No advert ready to show yet
//   return {
//     loaded,
//     showAd,
//   };
// };
