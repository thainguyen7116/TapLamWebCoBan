function tinh() {
    // 1. Lấy element
    const n1 = document.getElementById("number1");
    const n2 = document.getElementById("number2");
    const dau = document.getElementById("phepToan");
    const hienThi = document.getElementById("ketQua");

    // 2. Lấy giá trị và chuyển sang kiểu Số (Number)
    const so1 = Number(n1.value);
    const so2 = Number(n2.value);
    const phepTinh = dau.value;

    let ketQua = 0;

    // 3. Xử lý phép tính
    if (phepTinh === "+") {
        ketQua = so1 + so2;
    } else if (phepTinh === "-") {
        ketQua = so1 - so2;
    } else if (phepTinh === "*") {
        ketQua = so1 * so2;
    } else if (phepTinh === "/") {
        ketQua = so1 / so2;
    }

    // 4. Hiển thị ra màn hình
    hienThi.innerHTML = "Kết quả: " + ketQua;
}