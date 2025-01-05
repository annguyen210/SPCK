document.getElementById("login-form").addEventListener("submit", function(event) {  
    event.preventDefault(); // Ngăn không cho form tự động gửi  

    const username = document.getElementById("username").value;  
    const password = document.getElementById("password").value;  

    // Lấy thông tin đã lưu trong localStorage  
    const storedUsername = localStorage.getItem("username");  
    const storedPassword = localStorage.getItem("password");  

    // Kiểm tra thông tin đăng nhập  
    if (username === storedUsername && password === storedPassword) {  
        // Nếu đúng, chuyển hướng đến trang index.html  
        window.location.href = "index.html";  
    } else {  
        alert("Tài khoản hoặc mật khẩu không đúng!");  
    }  
});