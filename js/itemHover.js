$(document).ready(()=>{
    $(document).on("mouseover", ".first-product-item-wrapper", (event)=>{ //function that show button under product when it was hover           
        let index = event.target.dataset.itemNumber
        $('.product-button').eq(index).removeClass('hidden')
    })
    $(document).on("mouseleave", ".first-product-item-wrapper", ()=>{//function that hide button under product
        $('.product-button').addClass('hidden')
    })
})
