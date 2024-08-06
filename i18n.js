"server-only";

import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "./app/kernel/core";

const messageImports = {
	en: () => import("./messages/en.json"),
	es: () => import("./messages/es.json"),
};

export function isValidLocale(locale) {
	return locales.some((l) => l === locale);
}

export default getRequestConfig(async (params) => {
	const baseLocale = new Intl.Locale(params.locale).baseName;
	if (!isValidLocale(baseLocale)) notFound();

	const messages = (await messageImports[baseLocale]()).default;
	return {
		messages,
	};
});
