import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { sound } from "@/app/kernel/sound";

//import CustomNotify from "../../components/shared/CustomNotify";

/**
 * 
 * .Toastify__toast-container {
    width: fit-content;
    min-width: 480px;
    max-width: 480px;
}
 * Xeneural Notification
 * @param {number}  code Notification Code
 * @param {string}  [position] Notification Position
 *
 */
export const simpleNotify = (code, position) => {
	//const eventData = eventsData[`e${code}`];

	sound("error");

	/*let convertedType = "warning";

	switch (eventData.t) {
		case "e":
			convertedType = "error";
			break;

		case "s":
			convertedType = "success";
			break;

		case "i":
			convertedType = "info";
			break;

		default:
			break;
	}*/

	toast(
		"Probando error", //@ts-ignore
		{ type: "error", toastId: "20" }
	);
};
