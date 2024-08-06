// components/utils/PersonalMenu.js
"use client";

import {
	CasualSeparator,
	Separator,
	Text,
	TextSeparator,
	XList,
	XListCollapse,
	XListItemButton,
	XListItemButtonNoSelectable,
	XListItemIcon,
	XListItemText,
} from "./styles";
import { Collapse, Grow } from "@mui/material";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { SiPolkadot } from "react-icons/si";

const PersonalMenu = ({ openeddrawer, menus, selectedMenu, handleSelectedMenu }) => {
	return (
		<Grow in timeout={500} id="anim1">
			<XList>
				<div style={{ marginBottom: 8 }} />
				{menus.map((menu, index) =>
					isNaN(menu.key) ? (
						openeddrawer ? (
							menu.isVisible && (
								<Grow key={menu.key} in timeout={500}>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											height: 38,
										}}
									>
										<TextSeparator>{menu.text}</TextSeparator>
										<div
											style={{
												width: "100%",
												background: "#ffffff10",
												height: 0.3,
												marginLeft: 20,
												marginRight: 20,
											}}
										/>
									</div>
								</Grow>
							)
						) : (
							menu.isVisible && (
								<div key={menu.key} style={{ height: 20 }}>
									<CasualSeparator />
								</div>
							)
						)
					) : (
						<div key={index}>
							{menu.hasSubMenu
								? menu.isActivated && (
										<XListItemButtonNoSelectable
											key={menu.key}
											disabled={!menu.isActivated}
											onClick={() => handleSelectedMenu(menu.key, true)}
											selected={selectedMenu === menu.key}
										>
											<XListItemIcon>
												<menu.icon size={24} style={{ marginLeft: -9 }} />
											</XListItemIcon>
											<XListItemText>
												<Text>{menu.text}</Text>
											</XListItemText>
											{menu.isCollapsed ? <MdExpandLess /> : <MdExpandMore />}
										</XListItemButtonNoSelectable>
								  )
								: menu.isActivated && (
										<XListItemButton
											disabled={!menu.isActivated}
											key={menu.key}
											onClick={() => handleSelectedMenu(menu.key, false, menu.to)}
											selected={selectedMenu === menu.key}
										>
											<XListItemIcon>
												<menu.icon size={24} style={{ marginLeft: -9 }} />
											</XListItemIcon>
											<XListItemText>
												<Text>{menu.text}</Text>
											</XListItemText>
										</XListItemButton>
								  )}

							{menu.hasSubMenu && (
								<Collapse in={menu.isOpen} timeout="auto" mountOnEnter style={{ marginRight: -4 }}>
									<XListCollapse disablePadding>
										{menu.subMenu.map(
											(submen, i) =>
												submen.isActivated && (
													<div key={submen.key}>
														<XListItemButton
															style={{ height: 30 }}
															key={submen.key}
															onClick={() => handleSelectedMenu(submen.key, false, submen.to)}
															selected={selectedMenu === submen.key}
														>
															<XListItemIcon>
																<SiPolkadot size={10} style={{ marginLeft: -5 }} />
															</XListItemIcon>

															<XListItemText>
																<Text>{submen.text}</Text>
															</XListItemText>

															{submen.new && (
																<div
																	style={{
																		position: "absolute",
																		color: "#FFF",
																		top: -3,
																		right: -3,
																		background: "#CB4335",
																		borderRadius: 10,
																		fontSize: 9,
																		paddingLeft: 5,
																		paddingRight: 5,
																	}}
																>
																	Nuevo
																</div>
															)}
														</XListItemButton>

														{submen.downSeparator && (
															<div>
																<div style={{ paddingTop: 8 }} />
																<Separator />
																<div style={{ paddingBottom: 8 }} />
															</div>
														)}
													</div>
												)
										)}
									</XListCollapse>
								</Collapse>
							)}
						</div>
					)
				)}
			</XList>
		</Grow>
	);
};

export default PersonalMenu;
