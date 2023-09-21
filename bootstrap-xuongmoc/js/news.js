$(document).ready(function(){

    var pagination ={
        pageSize: 6, //số bản ghi trên 1 trang
        pageNumber: 1,
        skip: 0,
        recordCount: 12,
        recordShow: 0,
        totalPage: 0
    }

    var listNews = [];
    listNews.push(addNews("sp1.png","Thông tin 1","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed laborum quas provident dolor harum optio maiores eveniet ipsam? Corporis, amet? Esse quibusdam fuga vero sequi adipisci id quis assumenda."));
    listNews.push(addNews("sp2.png","Thông tin 2","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed laborum quas provident dolor harum optio maiores eveniet ipsam? Corporis, amet? Esse quibusdam fuga vero sequi adipisci id quis assumenda."));
    listNews.push(addNews("sp3.png","Thông tin 3","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed laborum quas provident dolor harum optio maiores eveniet ipsam? Corporis, amet? Esse quibusdam fuga vero sequi adipisci id quis assumenda."));
    listNews.push(addNews("sp4.png","Thông tin 4","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed laborum quas provident dolor harum optio maiores eveniet ipsam? Corporis, amet? Esse quibusdam fuga vero sequi adipisci id quis assumenda."));
    listNews.push(addNews("sp5.png","Thông tin 5","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed laborum quas provident dolor harum optio maiores eveniet ipsam? Corporis, amet? Esse quibusdam fuga vero sequi adipisci id quis assumenda."));
    listNews.push(addNews("sp6.png","Thông tin 6","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed laborum quas provident dolor harum optio maiores eveniet ipsam? Corporis, amet? Esse quibusdam fuga vero sequi adipisci id quis assumenda."));
    listNews.push(addNews("sp7.png","Thông tin 7","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed laborum quas provident dolor harum optio maiores eveniet ipsam? Corporis, amet? Esse quibusdam fuga vero sequi adipisci id quis assumenda."));
    listNews.push(addNews("sp8.png","Thông tin 8","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed laborum quas provident dolor harum optio maiores eveniet ipsam? Corporis, amet? Esse quibusdam fuga vero sequi adipisci id quis assumenda."));
    listNews.push(addNews("sp9.png","Thông tin 9","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed laborum quas provident dolor harum optio maiores eveniet ipsam? Corporis, amet? Esse quibusdam fuga vero sequi adipisci id quis assumenda."));
    listNews.push(addNews("sp10.png","Thông tin 10","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed laborum quas provident dolor harum optio maiores eveniet ipsam? Corporis, amet? Esse quibusdam fuga vero sequi adipisci id quis assumenda."));
    listNews.push(addNews("sp11.png","Thông tin 11","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed laborum quas provident dolor harum optio maiores eveniet ipsam? Corporis, amet? Esse quibusdam fuga vero sequi adipisci id quis assumenda."));
    listNews.push(addNews("sp12.png","Thông tin 12","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed laborum quas provident dolor harum optio maiores eveniet ipsam? Corporis, amet? Esse quibusdam fuga vero sequi adipisci id quis assumenda."));

    console.log(listNews);
    renderListNews(listNews);

    function renderListNews(listNews){
        $(".listNews .news .row").html("");

        pagination.recordCount = listNews.length;
        var htmlListNews = "";
        var starIndex = pagination.skip;
        var endIndex = pagination.skip + pagination.pageSize;
        for (let i = 0; i < listNews.length; i++) {
            htmlListNews +=`
            <div class="col-md-4 mb-4 col-sm-6 new-item">
                <div class="card">
                    <img src="../images/xemtatca_sanpham/${listNews[i].img}" alt="" class="card-img-top">
                    <div class="card-body py-2">
                        <h5 class="card-title text-gold p-2" style="font-family: font-Ultra;">${listNews[i].name}</h5>
                        <p class="p-2">${listNews[i].param}</p>
                    </div>
                </div>
            </div>`;
        }

        pagination.totalPage = Math.round(pagination.recordCount / pagination.pageSize);
        $("nav .pagination").html("");
        var htmlPageNumber = ``;
        for (let i = 0; i < pagination.totalPage ; i++) {
            if(i==0){
                htmlPageNumber += ` <li class="page-item page-item-number p1" data-page-number="${i+1}"><a class="page-link" href="#">${i+1}</a></li>`;
            }
            else{
                htmlPageNumber += ` <li class="page-item page-item-number" data-page-number="${i+1}"><a class="page-link" href="#">${i+1}</a></li>`;
            }
            
            
        }
        var htmlPagination = `
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                ${htmlPageNumber}
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        `;
        $("nav .pagination").html(htmlPagination);
        $(".listNews .news .row").html(htmlListNews);
        
        $(".page-item-number").click(function(){
            const pageNumber = $(this).data("pageNumber");
            if(pageNumber - 1 >= 0) $(`.p1`).css("display","none");
            console.log(pageNumber)
            pagination.pageNumber = pageNumber;
            pagination.skip = (pageNumber - 1)*pagination.pageSize;//update skip 
            renderListNews(listNews);
        })
    }

    function addNews(imgInput, nameInput, paramInput){
        return{
            img: imgInput,
            name: nameInput,
            param: paramInput
        }
    }
});