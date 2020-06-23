import { NoTyping } from "./payloads/no_typing";
import { NoRead } from "./payloads/no_read";

import { Logger } from "./log";
import { WebpackModules } from "./modules";

// exists for dev reasons
window.__modules = WebpackModules;

// actual payloads
try {
    if(!NoTyping.load()) {
        Logger.error("failed to load typing payload");
    }
} catch(e) {
    Logger.error("encountered hard errror in typing payload");
    console.error(e);
}

try {
    if(!NoRead.load()) {
        Logger.error("failed to load read payload");
    }
} catch(e) {
    Logger.error("encountered hard errror in read payload");
    console.error(e);
}