import createMiddleware from "next-intl/middleware";

const locales = ["en", "es"];

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
	/*matcher: [
		"/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)",
	],*/
	//	matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
