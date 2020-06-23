export class Logger {
    static error(text) {
        console.log("%c[dspy | error]%c " + text, 'color: red;', '');
    }

    static log(text) {
        console.log("%c[dspy | log]%c " + text, 'color: purple;', '');
    }

    static warn(text) {
        console.log("%c[dspy | log]%c " + text, 'color: orangered;', '');
    }
}