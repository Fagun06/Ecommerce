var AccountService = {
    VerifyUser: (ModelAccount, callback) => {
        //$.get("http://localhost:49908/AccountAPI/VerifyUser?UserName=" + UserName + "&Password="+Password, function (data, status) {
        //    callback(data);
        //});

        $.post(
            "http://localhost:62748/AccountAPI/VerifyUser",
            { "ModelAccount": ModelAccount },
            function (data, status) {
                callback(data);
        })
    }
}