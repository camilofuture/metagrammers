import UIfx from "uifx";
import clickSound from "../../public/sounds/click.mp3";
import errorSound from "../../public/sounds/error.mp3";
import infoSound from "../../public/sounds/info.mp3";
import msgSound from "../../public/sounds/msg.mp3";
import offlineSound from "../../public/sounds/offline.mp3";
import onlineSound from "../../public/sounds/online.mp3";
import successSound from "../../public/sounds/success.mp3";
import vibrationSound from "../../public/sounds/vibration.mp3";
import warningSound from "../../public/sounds/warning.mp3";
import leonorSound from "../../public/sounds/leonor.mp3";
import menuSound from "../../public/sounds/menu.mp3";

const isSoundEnabled = true;

const config = {
	volume: 0.5,
	throttleMs: 2,
};

const clickBeep = new UIfx(clickSound, config);
const errorBeep = new UIfx(errorSound, config);
const infoBeep = new UIfx(infoSound, config);
const msgBeep = new UIfx(msgSound, config);
const offlineBeep = new UIfx(offlineSound, config);
const onlineBeep = new UIfx(onlineSound, config);
const successBeep = new UIfx(successSound, config);
const vibrationBeep = new UIfx(vibrationSound, config);
const warningBeep = new UIfx(warningSound, config);
const leonorBeep = new UIfx(leonorSound, config);
const menuBeep = new UIfx(menuSound, config);

/**
 * Reproduces a Xeneural specific sound
 * @param {string | void}  type
 */
export const sound = async (type) => {
	try {
		if (isSoundEnabled) {
			switch (type) {
				case "click":
					clickBeep.play();
					break;
				case "error":
				case "e":
					errorBeep.play();
					break;
				case "info":
				case "i":
					infoBeep.play();
					break;
				case "msg":
					msgBeep.play();
					break;
				case "offline":
					offlineBeep.play();
					break;
				case "online":
					onlineBeep.play();
					break;
				case "success":
				case "s":
					successBeep.play();
					break;
				case "vibration":
					vibrationBeep.play();
					break;
				case "warning":
				case "w":
					warningBeep.play();
					break;
				case "leonor":
					leonorBeep.play();
					break;
				case "menu":
					menuBeep.play();
					break;
				default:
					break;
			}
		}
	} catch (error) {
		console.log("Error on beep ==>", error);
	}
};
