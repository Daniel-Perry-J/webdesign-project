function validate() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    if (name == '') {
        alert("Please enter a name!");
        return false;
    } else if (email == '' && phone == '') {
        alert("Please enter an email or phone number!");
        return false;
    }
    return true;
}
