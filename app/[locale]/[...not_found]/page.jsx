// app/[locale]/[...not_found]/page.tsx
//import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";

export default function NotFoundCatchAll() {
	//const t = useTranslations("notfound");

	notFound();
}
