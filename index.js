function submitData(userName, userEmail) {
    const pleaseLetThisWork = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify ({
            name: `${userName}`,
            email: `${userEmail}`,
        }),
    };
    return fetch("http://localhost:3000/users", pleaseLetThisWork)
    .then(function (resp) {
        return resp.json()
    })
    .then(function (object) {
        document.body.innerHTML = object['id']
    })
    .catch(function(error) {
        document.body.innerHTML = error.message
    })
}