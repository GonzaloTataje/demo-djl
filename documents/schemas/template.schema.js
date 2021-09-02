exports.templateSchema = {
    userMail: {
        notEmpty: true,
        errorMessage: "UserMail cannot be empty"
    },
    sendType: {
        notEmpty: true,
        errorMessage: "SendType cannot be empty"
    },
    attachedFlag: {
        notEmpty: true,
        errorMessage: "AttachedFlag cannot be empty"
    },
    templateCode: {
        notEmpty: true,
        errorMessage: "TemplateCode cannot be empty"
    }
}
