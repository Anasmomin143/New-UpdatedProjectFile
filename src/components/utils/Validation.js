function passWordvalidate(pass) {
    if (pass.length < 4) {
        return {
            message: "Password To Short",
            result: false
        }
    } else {
        return {
            message: "SuccessFull",
            result: true
        }
    }
};

function nameValidatetion(name) {
    if (name.length < 3) {
        return {
            message: "Name Must be Atleast 3 Charechter",
            result: false
        }
    } else {
        return {
            message: "SuccessFull",
            result: true
        }
    }
};

function Emailvalidate(email) {
    const userlist = JSON.parse(localStorage.getItem("NewData"))
    console.log(userlist)
    const result = userlist.find((user) => user.email === email)
    if (result) {
        return {
            message: "Email Already Exists ",
            result: false
        }
    } else {
        return {
            message: "SuccessFull",
            result: true
        }
    }
};

export { passWordvalidate, nameValidatetion, Emailvalidate }