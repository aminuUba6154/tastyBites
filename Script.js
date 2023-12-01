
function setCustomerNameAndRedirect(event) {
    
    event.preventDefault();

    
    var customerName = document.getElementById("name").value;

   
    document.cookie = "customerName=" + customerName;

    window.location.href = "thank you.html";
}
function getCookie(name) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return "";
}


var customerName = getCookie("customerName");

document.addEventListener("DOMContentLoaded", function () {
    var customerNameElement = document.getElementById("customerName");
    if (customerNameElement && customerName !== "") {
        customerNameElement.textContent = customerName;
    }
});
