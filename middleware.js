import createMiddleware from "next-intl/middleware";
import { locales } from "./app/kernel/core";

const nextIntlMiddleware = createMiddleware({
	locales,
	defaultLocale: "en",
	//localePrefix: "never",
});

export default function (req) {
	return nextIntlMiddleware(req);
}

export const config = {
	matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
