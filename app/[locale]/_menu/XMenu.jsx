"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import PersonalMenu from "./utils/PersonalMenu";
import { useMenu } from "@/app/context/MenuContext";
import { useTranslations } from "next-intl";

import { PiHouse, PiUserCircleDashed } from "react-icons/pi";

const XMenu = ({ openeddrawer }) => {
	const { selectedMenu, setSelectedMenu, expandedMenus, setExpandedMenus } = useMenu();
	const router = useRouter();

	const t = useTranslations("menu");

	const personalMenu = useMemo(
		() => [
			{
				key: 1000,
				text: t("m1000"),
				isActivated: true,
				icon: PiHouse,
				hasSubMenu: false,
				to: "/",
			},
			{
				key: "s1",
				text: t("s1"),
				isVisible: true,
			},
			{
				key: 1100,
				text: t("m1100"),
				isActivated: true,
				icon: PiUserCircleDashed,
				hasSubMenu: true,
				isOpen: expandedMenus[1100] || false,
				subMenu: [
					{
						key: 1101,
						text: t("m1101"),
						isActivated: true,
						to: "/metakey",
					},
				],
			},
			/*{
                key: 2300,
                text: "menu 2", 
                isActivated: true,
                icon: IoSchoolOutline,
                hasSubMenu: true,
                isOpen: expandedMenus[2300] || false,
                subMenu: [
                    {
                        key: 2301,
                        text: "",
                        isActivated: true,
                        to: "/",
                    },
                ],
            },*/
		],
		[expandedMenus, t]
	);

	useEffect(() => {
		if (!router.isReady) return;

		const path = router.asPath.split("/").filter(Boolean).join("/");

		console.log("THIS IS PATH: ", path);

		const matchingMenu = personalMenu
			.flatMap((menu) => (menu.hasSubMenu ? menu.subMenu : menu))
			.find((menu) => menu.to === `/${path}`);

		if (matchingMenu) {
			setSelectedMenu(matchingMenu.key);
		} else {
			setSelectedMenu(1000); // Default to home if no match
		}
	}, [router.isReady, router.asPath, personalMenu, setSelectedMenu]);

	const handleSelectedMenu = (key, isCollapsable, to) => {
		setSelectedMenu(key);
		if (isCollapsable) {
			setExpandedMenus((prev) => ({
				...prev,
				[key]: !prev[key],
			}));
		}
		if (to) {
			router.push(to);
		}
	};

	return (
		<PersonalMenu
			openeddrawer={openeddrawer}
			menus={personalMenu}
			selectedMenu={selectedMenu}
			handleSelectedMenu={handleSelectedMenu}
		/>
	);
};

export default XMenu;
