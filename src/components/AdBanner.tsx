import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { useUser } from '../context/UserContext';

interface AdMobInterstitialType {
  setAdUnitID: (id: string) => void;
  requestAdAsync: (options: { servePersonalizedAds: boolean }) => Promise<void>;
  showAdAsync: () => Promise<void>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let AdMobBanner: React.ComponentType<any> | null = null;
let AdMobInterstitial: AdMobInterstitialType | null = null;
let setTestDeviceIDAsync: ((deviceId: string) => Promise<void>) | null = null;

type Props = {
  unitId?: string;
  bannerSize?:
    | 'banner'
    | 'largeBanner'
    | 'mediumRectangle'
    | 'fullBanner'
    | 'leaderboard'
    | 'smartBannerPortrait'
    | 'smartBannerLandscape';
};

export default function AdBanner({ unitId, bannerSize = 'smartBannerPortrait' }: Props) {
  const adUnitID = unitId ?? 'ca-app-pub-3940256099942544/6300978111';
  const { noAds, personalizedAds } = useUser();
  const [adsLoaded, setAdsLoaded] = React.useState(false);

  React.useEffect(() => {
    let isMounted = true;

    if (Platform.OS === 'web') {
      return undefined;
    }

    import('expo-ads-admob')
      .then((AdMobModule) => {
        if (!isMounted) {
          return;
        }

        AdMobBanner = AdMobModule.AdMobBanner;
        AdMobInterstitial = AdMobModule.AdMobInterstitial;
        setTestDeviceIDAsync = AdMobModule.setTestDeviceIDAsync;
        setAdsLoaded(true);
      })
      .catch((error) => {
        console.log('AdMob unavailable:', error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  React.useEffect(() => {
    (async () => {
      try {
        if (setTestDeviceIDAsync) {
          await setTestDeviceIDAsync('EMULATOR');
        }
      } catch {
        // ignore
      }
    })();
  }, [adsLoaded]);

  if (noAds || !AdMobBanner || !adsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} pointerEvents="box-none">
      <AdMobBanner
        bannerSize={bannerSize}
        adUnitID={adUnitID}
        servePersonalizedAds={personalizedAds === null ? true : personalizedAds}
        onDidFailToReceiveAdWithError={(err: unknown) => console.log('AdMob banner error', err)}
      />
    </View>
  );
}

export async function showInterstitial(adUnitID = 'ca-app-pub-3940256099942544/1033173712') {
  try {
    if (!AdMobInterstitial) {
      console.log('AdMob interstitial not available on this platform');
      return;
    }
    await AdMobInterstitial.setAdUnitID(adUnitID);
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  } catch (error) {
    console.log('AdMob interstitial error', error);
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 8,
  },
});
