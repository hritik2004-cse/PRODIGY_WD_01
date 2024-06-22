function showsidebar(){
    const sidebar = document.querySelector(".side-bar-div");
    sidebar.style.display = "flex";
}

function hidesidebar(){
    const sidebar = document.querySelector(".side-bar-div");
    sidebar.style.display = "none";
}

function greet(){
    const input = document.querySelectorAll("input");
    const name = document.querySelector("#name").value;
    if (input.value == ''){
        alert("please fullfill requirements");
    }
    else{
        alert(`thanks for contacting me ${name}! i will be right back to you.`);
    }
}
function buy(){
    alert("this feature is not available at this time please try again later.")
}