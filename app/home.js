import { useTranslation } from "react-i18next";
import { Button, Text, View } from "react-native";

export default function Home() {
	const { t, i18n } = useTranslation();
	function switchL() {
		i18n.changeLanguage(i18n.resolvedLanguage === "fr" ? "en" : "fr");
	}
	return (
		<View>
			<Button onPress={switchL} title={t("Change language")} />
			<Text>{t("Home")}</Text>
		</View>
	);
}
