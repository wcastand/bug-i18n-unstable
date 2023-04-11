import { SplashScreen, Stack } from "expo-router";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en.json";
import fr from "../locales/fr.json";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();
/**
 * Initialize i18n
 */

i18next.use(initReactI18next).init({
	compatibilityJSON: "v3",
	fallbackLng: "en",
	lng: "en",
	interpolation: { escapeValue: false },
	joinArrays: "\n",
	resources: { en, fr },
	react: { useSuspense: false },
});

export const unstable_settings = {
	initialRoute: "Home",
};

export default function Root() {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setReady(true);
		}, 1000);
	}, []);
	if (!ready) return <SplashScreen />;
	return <Stack />;
}
