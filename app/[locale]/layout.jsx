import "../globals.css";

import { use } from "react";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import InterLayout from "./_components/InterLayout";
import { MenuProvider } from "../context/MenuContext";
import { AuthProvider } from "../context/AuthContex";
import { ToastContainer } from "react-toastify";
import { toastNotificationsOptions } from "../kernel/config";

const Layout = ({ children }) => {
	const locale = useLocale();
	const messages = use(getMessages());

	return (
		<html lang={locale}>
			<body style={{ background: "#101015" }}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<AuthProvider>
						<ToastContainer theme={"dark"} style={{ zIndex: 9999999999999 }} {...toastNotificationsOptions} />
						<MenuProvider>
							<InterLayout>{children}</InterLayout>
						</MenuProvider>
					</AuthProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
};

export async function generateMetadata({ params: { locale } }) {
	const t = await getTranslations({ locale, namespace: "metadata" });

	return {
		title: t("root.title"),
		description: t("root.description"),
	};
}

export default Layout;
