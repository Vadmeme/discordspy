import { WebpackModules, Filters } from "../modules";
import { Logger } from "../log";

export class NoTyping {
    static load() {
        let typing_payload = WebpackModules.findByUniqueProperties(["startTyping"]);

        if(!typing_payload) {
            Logger.error("failed to find typing module in discord");
            return false;
        }

        typing_payload.startTyping = () => {};

        Logger.log("loaded no typing payload");

        return true;
    }
}