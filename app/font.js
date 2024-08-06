import { Rajdhani, Orbitron, JetBrains_Mono } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
export const globalText = Rajdhani({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

export const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "600", "700"] });
