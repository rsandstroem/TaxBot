var builder = require("botbuilder");
var botbuilder_azure = require("botbuilder-azure");

module.exports = {
    Label: 'Ask Generic Yes No',
    Dialog: [
        function (session, args) {
            builder.Prompts.choice(session, args.prompt,
            ['Ja', 'Nein'],
            {retryPrompt: "I verstehe nicht. Bitte antworten 'ja' oder 'nein'."});
        },
        // function (session, results) {
        //     if (results.response) {
        //         //session.privateConversationData.IP_Foreign3rdParty = results.response;
        //     }    
        function (session, results) {
            session.endDialogWithResult(results.response);
        }
    ]
}
