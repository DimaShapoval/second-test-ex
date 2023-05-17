$(document).ready(()=>{
    $(document).on("mouseover", ".product-image", (event)=>{                
        let index = event.target.dataset.itemNumber
        $('.product-button').eq(index).removeClass('hidden')
    })
    $(document).on("mouseleave", ".product-image", ()=>{
        $('.product-button').addClass('hidden')
    })
})
