# Multipurpose Fitness App

This repository contains a cross-platform React Native / Expo application designed to work on Android, iOS and Web.

Quick start

1. Install dependencies:

```bash
npm install
# or
yarn
```

2. Start development server (Expo):

```bash
npm run start
```

3. Run on a platform:

```bash
npm run android
npm run ios
npm run web
```

Helpful scripts

- `npm run lint` — runs ESLint (if configured)
- `npm run format` — runs Prettier (if configured)
- `npm run typecheck` — runs TypeScript type check

Notes

- The app uses a small responsive helper `src/utils/responsive.ts` to scale spacing and fonts across screen sizes.
- Accessibility labels and basic roles were added to interactive controls.
- For a production-ready app consider adding CI (GitHub Actions), automated tests, image optimization, app icons and splash screens, and proper E2E tests.

If you want, I can:

- Add ESLint/Prettier configs and basic CI.
- Sweep the remaining screens for accessibility and platform-specific polish.

AdMob / Google Ads integration

This project includes a lightweight banner component you can use to show AdMob ads on Android/iOS (and a helper to show interstitials).

Steps to enable ads locally:

1. Install the AdMob package (Expo-managed workflow):

```bash
expo install expo-ads-admob
```

2. Replace the test ad unit IDs in `src/components/AdBanner.tsx` with your own AdMob ad unit IDs (banner and interstitial).

3. Configure native app IDs (required by AdMob):

- Android: add your AdMob App ID as a `<meta-data android:name="com.google.android.gms.ads.APPLICATION_ID" android:value="ca-app-pub-xxxxxxxx~yyyyyyyy"/>` entry to `android/app/src/main/AndroidManifest.xml` when using bare workflow or set via `app.json` when prebuilding.
- iOS: add `GADApplicationIdentifier` to `Info.plist` with your AdMob App ID.

4. Use test ad unit IDs while developing. The component defaults to Google's sample test IDs.

Privacy & policy

- Make sure to follow Google AdMob policies (ads placement, no accidental clicks).
- Implement consent/GDPR for EU users if you serve personalized ads.

Where banners were added

- `HomeScreen`, `WorkoutGalleryScreen`, `DietScreen` include `AdBanner` placements.

If you want, I can:

- Add automated consent dialog (IAB CMP) and non-personalized ad fallback.
- Add a settings toggle to disable ads for premium users and wire it to `UserContext`.
- Add server-side ad mediation steps or analytics.

App icon and splash

- The project now references `./assets/app-icon.png` as the Expo app `icon` and `splash` image in `app.json`. Expo will use that file when building native binaries.
- For best results generate platform-specific icon sizes (Android adaptive icons and iOS icon set). I can generate them for you or add a script using `expo-optimize` and `sharp`.

If you'd like me to generate optimized icons and a splash image set from `./assets/app-icon.png`, say "generate icons" and I'll create the images and update `app.json` accordingly.

## Cross-platform support

This app is now configured for **iOS, Android, Windows, macOS, and Linux**. Key changes:

- **Platform detection**: `src/utils/platform.ts` provides utilities to detect the runtime platform.
- **StatusBar**: Only rendered on iOS/Android (skipped on web and desktop).
- **AdMob**: Gracefully disables on web and desktop platforms (only loads on iOS/Android).
- **app.json**: Updated with iOS bundle ID (`com.prakharanand.fitnesstracker`), Android package name, adaptive icons, and permissions.

### Running on different platforms

**Development**

```bash
npm run start       # Start Expo dev server (shows menu for iOS/Android/Web)
npm run ios         # Run on iOS simulator
npm run android     # Run on Android emulator
npm run web         # Run in web browser
```

**Building for production**

```bash
expo build:ios      # Build iOS IPA (requires Expo account)
expo build:android  # Build Android APK
expo export:web     # Build static web bundle
```

**Desktop (Windows/macOS/Linux)**

- Install Expo Go app or use the web bundle for desktop browsers.
- The app runs in a web context on desktop, so AdMob is disabled (web fallback works).

### iOS-specific notes

- Ensure you have Xcode 14+ and macOS 12+ for building iOS.
- The app uses `supportsTablet: true` in `app.json`, so it will adapt to iPad screens.
- If building via `expo prebuild`, your Ad Mob App ID will need to be added to the generated `Info.plist`.

### Android-specific notes

- Adaptive icon is configured in `app.json`.
- The app targets modern Android devices (API level set by Expo).
- If using prebuild, your AdMob App ID goes in the generated `AndroidManifest.xml`.

### Web and desktop

- The app runs in a responsive layout optimized for all screen sizes (thanks to `useResponsive()` hook).
- AdMob is disabled; no ads are shown in web/desktop contexts.
- Platform-specific features (like StatusBar) gracefully degrade on web.
