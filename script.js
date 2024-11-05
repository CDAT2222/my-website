// Xử lý đăng ký
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Gửi dữ liệu đến server (giả sử bạn có API)
    console.log('Đăng ký:', { username, email, password });
    alert('Đăng ký thành công!'); // Thông báo cho người dùng
});

// Xử lý đăng nhập
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Gửi dữ liệu đến server (giả sử bạn có API)
    console.log('Đăng nhập:', { username, password });
    alert('Đăng nhập thành công!'); // Thông báo cho người dùng
});
