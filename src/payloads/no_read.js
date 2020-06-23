import { WebpackModules, Filters } from "../modules";
import { Logger } from "../log";

export class NoRead {
    static load() {
        let ack_payload = WebpackModules.findByUniqueProperties(["Endpoints", "ActionTypes"])
        if(!ack_payload) {
            Logger.error("failed to find ack module in discord");
            return false;
        }

        ack_payload.Endpoints.MESSAGE_ACK = ack_payload.Endpoints.ME;
        ack_payload.Endpoints.CHANNEL_ACK = ack_payload.Endpoints.ME;
        ack_payload.Endpoints.CHANNEL_LOCAL_ACK = ack_payload.Endpoints.ME;
        
        Logger.log("loaded no read payload");

        return true;
    }
}