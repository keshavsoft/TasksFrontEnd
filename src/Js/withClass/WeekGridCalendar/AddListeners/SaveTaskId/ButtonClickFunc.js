import { StartFunc as StartFuncFromAddToDomCalendar } from "./addToDomCalendar.js";

let StartFunc = () => {
    let jVarLocalBody = {};
    jVarLocalBody.title = jFLocalTopBarTaskId();
    jVarLocalBody.start = jFLocalTopBarDateId();
    jVarLocalBody.className =jFLocalTopBarClassId();

    StartFuncFromAddToDomCalendar({ inEvent: jVarLocalBody });

    console.log("jVarLocalBody : ", jVarLocalBody);
    // return jVarLocalBody;

};

let jFLocalTopBarTaskId = () => {
    let jVarLocalTopBarTaskId = 'TopBarTaskId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTopBarTaskId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalTopBarDateId = () => {
    let jVarLocalTopBarDateId = 'TopBarDateId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTopBarDateId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalTopBarClassId = () => {
    let jVarLocalTopBarClassId = 'TopBarClassId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTopBarClassId);

    if (jVarLocalHtmlId === null === false) {
    return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };