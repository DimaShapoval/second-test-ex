$(document).ready(()=>{
    $(document).on("mouseover", ".product-image", (event)=>{ //function that show button under product when it was hover           
        let index = event.target.dataset.itemNumber
        $('.product-button').eq(index).removeClass('hidden')
    })
    $(document).on("mouseleave", ".product-image", ()=>{//function that hide button under product
        $('.product-button').addClass('hidden')
    })
})
