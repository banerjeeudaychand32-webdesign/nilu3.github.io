function showResponse() {
    let name = document.getElementById("name").value;
    let msg = document.getElementById("msg").value;

    if (!name || !msg) {
        document.getElementById("response").innerText = "Please fill all fields!";
        return;
    }

    document.getElementById("response").innerText =
        
    "Hi " + name + ", your message is: " + msg;


    document.getElementById("name").value = "";
    document.getElementById("msg").value = "";
}