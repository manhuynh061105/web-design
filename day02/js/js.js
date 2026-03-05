
var man = [
    {
        id: 1,
        name: "The Cosmo (Đen) Quần short khaki",
        code: "TC1025011BA",
        price: "250.000 ₫",
        image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0"
    },
    {
        id: 2,
        name: "Quần baggy đen sang trọng QQ",
        code: "TC1025011BA",
        price: "398.000 ₫",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
    },
    {
        id: 3,
        name: "Quần short khaki nam",
        code: "TC1025011BA",
        price: "300.000 ₫",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c"
    },
    {
        id: 4,
        name: "Quần short nam casual",
        code: "TC1025011BA",
        price: "300.000 ₫",
        image: "https://images.unsplash.com/photo-1620799139507-2a76f79b1c66"
    }
];

var woment = [
    {
        id: 1,
        name: "Váy Fashion",
        code: "TC1025011BA",
        price: "250.000 ₫",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c"
    },
    {
        id: 2,
        name: "Áo thun phối váy ngắn",
        code: "TC1025011BA",
        price: "398.000 ₫",
        image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b"
    },
    {
        id: 3,
        name: "Áo khoác nữ",
        code: "TC1025011BA",
        price: "300.000 ₫",
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
    },
    {
        id: 4,
        name: "Áo thun nữ basic",
        code: "TC1025011BA",
        price: "300.000 ₫",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
    }
];


function renderProducts(list, elementId) {
    var html = "";

    for (var i = 0; i < list.length; i++) {
        html += `
            <div class="card">
                <img src="${list[i].image}" alt="${list[i].name}">
                <div class="card-body">
                    <h3>${list[i].name}</h3>
                    <p>${list[i].price}</p>
                    <button onclick="order()">Đặt mua</button>
                </div>
            </div>
        `;
    }

    document.getElementById(elementId).innerHTML = html;
}


function listProducts() {
    renderProducts(man, "men");
    renderProducts(woment, "woment");
}


function order() {
    alert("Cảm ơn bạn đã đặt hàng!");
}
