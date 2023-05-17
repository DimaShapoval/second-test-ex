    $(document).ready(()=>{
    let elemArray = []

   function createElemWrapper(length) {
        let elem = `<div class="main-products-wrapper grid grid-cols-4 2xl:grid-cols-2 md:grid-cols-1 justify-center items-center mt-12 2xl:mt-0 2xl:first:mt-[48px] ">
    </div>`
        for (let i = 0; i < length; i++) {
            $('.wrapper-of-products-items').append(elem)

        }
    }
    function createElem(name, price, src, length) {
        
        console.log($('.main-product-items-wrapper').html());
    }
    $.ajax({
        type: 'get',
        url: 'https://voodoo-sandbox.myshopify.com/products.json?limit=13',
        // dataType: 'json',
        success: function (data) {
            let products = data.products;
            let lengthForWrapper = Math.floor(products.length / 4);
            let lengthForItems = products.length / 3;
            let prevI = 1
            createElemWrapper(lengthForWrapper)

            for (let i = 1; i < products.length; i++) {
                let productName = products[i].title;
                let productPrice = products[i].variants[0].price
                let productImage = products[i].images[0].src
                let elem = `<div class="first-product-item-wrapper max-w-[300px] w-full flex flex-col m-auto" >
        <div class="product-item-wrapper max-w-[300px] max-h-[300px] h-full w-full border-2 border-black rounded flex flex-col">
        <div class="used-wrapper flex">
            <button class="absolute m-3 bg-black text-white w-12 h-6 rounded text-xs">USED</button>
        </div>
        <img class="product-image h-full  w-full cursor-pointer" data-item-number="${i-1}" src="${productImage}" alt="image" srcset="">
        </div>
        <div class="product-info-wrapper flex justify-between w-full mt-[12px]">
            <div class="product-name-price-wrapper">
                <p class="product-name text-sm font-bold">${productName}</p>
                <p class="product-price text-sm font-bold">${productPrice} KR.</p>
            </div>
            <div class="product-name-price-wrapper">
                <p class="product-condition text-sm font-medium">Condition</p>
                <p class="product-used text-sm font-normal">Slightly used</p>
            </div>
        </div>
        <div class="product-button-wrapper flex w-full mt-3 h-[42px] 2xl:mb-[48px]">
            <button class="product-button w-full bg-black text-white rounded uppercase h-[42px] gap-2.5 hidden">pick up in <span class="underline">2200</span></button>
        </div>
        </div>`
            elemArray.push(elem);
            if(elemArray.length == 4){
                    let itemNumber = Math.floor(i/4-1);
                    // console.log(itemNumber);
                    $('.main-products-wrapper').eq(itemNumber).append(elemArray)
                
               

                elemArray = []
            }
            
                prevI = i
                // console.log(prevI);


            }
        },
        error: function () {
            alert("ERROR")
        }
    })
    $('.product-item-wrapper').on("mouseover", () => {
        $('.product-button').removeClass('hidden')
    })
    $('.product-item-wrapper').on("mouseleave", () => {
        $('.product-button').addClass('hidden')
    })
    
})