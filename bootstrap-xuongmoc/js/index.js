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
    listProduct.push(addProduct("sp12.png","Giá đồ",3,"(size vừa, nâu đậm)","77.999.000VND"));

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

    // //load file html vào id contet
    // $("#content").load("tabs/dactrung.html");
    // $("#main ul li a").click(function(e){
    //     //xoá class selected của thẻ a
    //     $('a').removeClass('selected');
    //     //lấy id của thẻ a đc click
    //     id = e.target.id;
    //     //add lại class selected vào thẻ a có id đc click
    //     $("#"+id).addClass('selected');
    //     //load lại content vào thẻ id container
    //     $("#content").load("tabs/"+id+".html");
    // });

    // var listModal = [];

    // listModal.push(addModal("BÀN UỐNG NƯỚC",["sp1.png","sp2.png","sp3.png","sp4.png","sp5.png","sp6.png","sp7.png","sp8.png","sp9.png","sp10.png","sp11.png","sp12.png"],5,"Mô tả: (OK)","GIÁ: 8.999.000"));
    // listModal.push(addModal("BÀN UỐNG NƯỚC 2",["sp2.png","sp3.png","sp4.png","sp5.png","sp6.png","sp7.png","sp8.png","sp9.png","sp10.png","sp11.png","sp12.png","sp1.png"],4,"Mô tả: (OK)","GIÁ: 4.999.000"));
    // listModal.push(addModal("Kệ TV",["sp1.png","sp2.png","sp3.png","sp4.png","sp5.png","sp6.png","sp7.png","sp8.png","sp9.png","sp10.png","sp11.png","sp12.png"],1,"Mô tả: (OK)","GIÁ: 12.999.000"));
    // listModal.push(addModal("Kệ để đồ",["sp1.png","sp2.png","sp3.png","sp4.png","sp5.png","sp6.png","sp7.png","sp8.png","sp9.png","sp10.png","sp11.png","sp12.png"],5,"Mô tả: (OK)","GIÁ: 2.999.000"));
    // listModal.push(addModal("Sofa",["sp1.png","sp2.png","sp3.png","sp4.png","sp5.png","sp6.png","sp7.png","sp8.png","sp9.png","sp10.png","sp11.png","sp12.png"],2,"Mô tả: (OK)","GIÁ: 3.999.000"));
    // listModal.push(addModal("Sofa 2",["sp1.png","sp2.png","sp3.png","sp4.png","sp5.png","sp6.png","sp7.png","sp8.png","sp9.png","sp10.png","sp11.png","sp12.png"],1,"Mô tả: (OK)","GIÁ: 5.999.000"));
    // listModal.push(addModal("BÀN UỐNG NƯỚC 3",["sp1.png","sp2.png","sp3.png","sp4.png","sp5.png","sp6.png","sp7.png","sp8.png","sp9.png","sp10.png","sp11.png","sp12.png"],3,"Mô tả: (OK)","GIÁ: 7.999.000"));
    // listModal.push(addModal("BÀN UỐNG NƯỚC 4",["sp1.png","sp2.png","sp3.png","sp4.png","sp5.png","sp6.png","sp7.png","sp8.png","sp9.png","sp10.png","sp11.png","sp12.png"],5,"Mô tả: (OK)","GIÁ: 8.999.000"));
    // listModal.push(addModal("BÀN UỐNG NƯỚC 5",["sp1.png","sp2.png","sp3.png","sp4.png","sp5.png","sp6.png","sp7.png","sp8.png","sp9.png","sp10.png","sp11.png","sp12.png"],4,"Mô tả: (OK)","GIÁ: 14.999.000"));
    // listModal.push(addModal("Tủ sách",["sp1.png","sp2.png","sp3.png","sp4.png","sp5.png","sp6.png","sp7.png","sp8.png","sp9.png","sp10.png","sp11.png","sp12.png"],5,"Mô tả: (OK)","GIÁ: 82.999.000"));
    // listModal.push(addModal("Tủ sách 2",["sp1.png","sp2.png","sp3.png","sp4.png","sp5.png","sp6.png","sp7.png","sp8.png","sp9.png","sp10.png","sp11.png","sp12.png"],2,"Mô tả: (OK)","GIÁ: 18.999.000"));
    // listModal.push(addModal("Giá đồ",["sp1.png","sp2.png","sp3.png","sp4.png","sp5.png","sp6.png","sp7.png","sp8.png","sp9.png","sp10.png","sp11.png","sp12.png"],3,"Mô tả: (OK)","GIÁ: 77.999.000"));

    // console.log(listModal);
    // renderListModal(listModal);

    // function renderListModal(listModal){
    //     $(".modal .modal-content .modal-body").html("");
    //     var htmlListModal = "";
    //     for (let i = 0; i < listModal.length; i++) {
    //         var htmlSta = "";
    //         for (let j = 0; j < listModal[i].rate; j++) {
    //             htmlSta +=`<i class="fa-solid fa-star text-gold"></i>`
    //         }
    //         htmlListModal +=`<div class="title text-blue h3 my-3">${listModal[i].name}</div>
    //         <div class="product-infor d-flex">
    //             <div class="product-slide" style="width: 60%;">
    //                 <div class="slider-for">
    //                     <div class="img-box">
    //                         <img src="../images/xemtatca_sanpham/${listModal[i].img}" alt=""
    //                             class="w-100 object-fit-cover" style="height: 25rem;">
    //                     </div>

    //                 </div>
    //                 <div class="slider-nav mt-3">
    //                     <div class="img-box me-2">
    //                         <img src="../images/xemtatca_sanpham/${listModal[i].img}" alt="" class="w-100">
    //                     </div>

    //                 </div>
    //             </div>
    //             <div class="product-desc ms-5" style="width: 40%;">
    //                 <div class="rate h4">
    //                     Đánh giá:
    //                     ${htmlSta}
    //                 </div>
    //                 <div class="desc h4 text-secondary">
    //                     ${listModal[i].desc}
    //                 </div>
    //                 <div class="price h4 text-gold">
    //                     ${listModal[i].price}
    //                 </div>
    //             </div>
    //         </div>`
    //     }
    //     $(".modal .modal-content .modal-body").html(htmlListModal);
    // }

    // function addModal(nameOutput, imgOutput, rateOutput, descOutput, priceOutput){
    //     return{
    //         name: nameOutput,
    //         img: imgOutput,
    //         rate: rateOutput,
    //         desc: descOutput,
    //         price: priceOutput
    //     }
    // }

});