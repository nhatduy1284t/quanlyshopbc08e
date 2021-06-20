console.log("Hello Cybersoft");

var arrProduct = [
    {id:1,name:'iphoneX', price:1000, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/600px-Google_%22G%22_Logo.svg.png'},
    {id:2,name:'iphoneX', price:3000, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/600px-Google_%22G%22_Logo.svg.png'},
    {id:3,name:'iphoneX', price:2000, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/600px-Google_%22G%22_Logo.svg.png'},
];

function renderProduct() {
    var content ='';
    for(var i=0;i<arrProduct.length;i++) {
        let product =arrProduct[i];
        content += `
            <div class="col-4">
                <div class="card">
                    <img src="${product.img}" />
                    <div class="card-body">
                        <p>${product.price}</p>
                        <button>Mua hàng</button>
                    </div>
                </div>
            </div>
        `
    }
    document.querySelector("#arrProduct").innerHTML=content;
}
renderProduct();