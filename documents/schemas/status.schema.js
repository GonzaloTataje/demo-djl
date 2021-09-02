exports.statusSchema = {
    pageNumber: {
        notEmpty: true,
        errorMessage: "PageNumber cannot be empty"
    },
    pageSize: {
        notEmpty: true,
        errorMessage: "PageSize cannot be empty"
    },
    type: {
        notEmpty: true,
        errorMessage: "Type cannot be empty"
    }
}
