$(document).ready(function(){
    var listProduct = [];

    listProduct.push(addProduct("sp1.png","BÀN UỐNG NƯỚC",5,"(size vừa, nâu đậm)","8.999.000VND"));
    listProduct.push(addProduct("sp2.png","BÀN UỐNG NƯỚC 2",4,"(size vừa, nâu đậm)","4.999.000VND"));
    listProduct.push(addProduct("sp3.png","Kệ TV",1,"(size vừa, nâu đậm)","12.999.000VND"));
    listProduct.push(addProduct("sp4.png","Kệ để đồ",5,"(size vừa, nâu đậm)","2.999.000VND"));
    listProduct.push(addProduct("sp5.png","Sofa",2,"(size vừa, nâu đậm)","3.999.000VND"));
    listProduct.push(addProduct("sp6.png","Sofa 2",1,"(size vừa, nâu đậm)","5.999.000VND"));
    listProduct.push(addProduct("sp7.png","BÀN UỐNG NƯỚC 3",3,"(size vừa, nâu đậm)","7.999.000VND"));
    listProduct.push(addProduct("sp8.png","BÀN UỐNG NƯỚC 4",5,"(size vừa, nâu đậm)","8.999.000VND"));
    listProduct.push(addProduct("sp9.png","BÀN UỐNG NƯỚC 5",4,"(size vừa, nâu đậm)","14.999.000VND"));
    listProduct.push(addProduct("sp10.png","Tủ sách",5,"(size vừa, nâu đậm)","82.999.000VND"));
    listProduct.push(addProduct("sp11.png","Tủ sách 2",2,"(size vừa, nâu đậm)","18.999.000VND"));
    listProduct.push(addProduct("sp12.png","Tủ đồ",3,"(size vừa, nâu đậm)","77.999.000VND"));


    console.log(listProduct);
    renderListProduct(listProduct);

    // $(".list-products .products .row").html("");
    // var htmlListProduct = "";
    // for (let i = 0; i < listProduct.length; i++) {
    //     var htmlStar = "";
    //     for (let j = 0; j < listProduct[i].rate; j++) {
    //         htmlStar +=`<i class="fa-solid fa-star text-gold"></i>`
    //     }
    //     htmlListProduct +=`
    //     <div class="col-md-3 mb-3 col-sm-6">
    //         <div class="card">
    //             <img src="../images/xemtatca_sanpham/${listProduct[i].img}" alt="" class="card-img-top">
    //             <div class="card-body">
    //                 <h5 class="card-title text-blue text-center">${listProduct[i].name}</h5>
    //                 <span class="star text-center d-block">
    //                     ${htmlStar}
    //                 </span>
    //                 <span class="desc text-secondary d-block text-center">${listProduct[i].desc}</span>
    //                 <span class="price d-block text-center">${listProduct[i].price}</span>
    //             </div>
    //         </div>
    //     </div>`;
    // }
    // $(".list-products .products .row").html(htmlListProduct);

    $("#sortRate").click(function(){
        //copy array của project
        let newListProduct = listProduct.slice();
        newListProduct = newListProduct.sort(function(a,b){
            return a.rate - b.rate;
        });
        console.log(newListProduct);
        renderListProduct(newListProduct);
    });

    $("#sortName").click(function(){
        //copy array của project
        let newListProduct = listProduct.slice();
        newListProduct = newListProduct.sort(function(a,b){
            if(a.name < b.name) return -1;
            else if(a.name == b.name) return 0;
            else return 1;
        });
        console.log(newListProduct);
        renderListProduct(newListProduct);
    });

    $("#sortDefault").click(function(){
        renderListProduct(listProduct);
    });

    function renderListProduct(listProduct){
        $(".list-products .products .row").html("");
        var htmlListProduct = "";
        for (let i = 0; i < listProduct.length; i++) {
            var htmlStar = "";
            for (let j = 0; j < listProduct[i].rate; j++) {
                htmlStar +=`<i class="fa-solid fa-star text-gold"></i>`
            }
            htmlListProduct +=`
            <div class="col-md-3 mb-3 col-sm-6 " data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div class="card">
                    <img src="../images/xemtatca_sanpham/${listProduct[i].img}" alt="" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title text-blue text-center">${listProduct[i].name}</h5>
                        <span class="star text-center d-block">
                            ${htmlStar}
                        </span>
                        <span class="desc text-secondary d-block text-center">${listProduct[i].desc}</span>
                        <span class="price d-block text-center">${listProduct[i].price}</span>
                    </div>
                </div>
            </div>`;
        }
        $(".list-products .products .row").html(htmlListProduct);
    }

    function addProduct(imgInput, nameInput, rateInput, descInput, priceInput){
        return{
            img: imgInput,
            name: nameInput,
            rate: rateInput,
            desc: descInput,
            price: priceInput
        }
    }
});