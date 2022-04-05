$(document).ready(()=>{
    function TotalPrice(product){     
        let productRow = $(product);

            productRow.find('.info').on('input',function(){
            let qty = Number(productRow.find("#Quantity").val());
            let price = Number(productRow.find("#Price").val());  
            let total = 0;
            if(qty != 0 && price != 0){
                total = qty*price;     
            }  
            productRow.find('.Total').val(total);

            sub_Total()
            discnumber()
            discount()
        })
    }    

    $('.prodcut-row').each((idx,el) => {
        TotalPrice(el);
    })

    $('#btn').click(() => {
        const newRow = $('.content').first().clone();
        newRow.appendTo(".main").find("input").val("");

        TotalPrice(newRow);
    })

    function sub_Total(){
        const productTotals = $('.Total');
        let sum = 0;
        
        productTotals.each((idx,el) => {
            let val = Number($(el).val());
            sum += val; 
        })
        $('#subTotal').val(sum);
    }
    
    function discount(){
        const totalsum = $('.subTotal').val();
        let a = $('#disc-number').val();
        let disc = 0;
        disc = totalsum - totalsum * a/100;
        $('#secondTotal').val(disc);
    }

    $('#secondTotal').keyup((idx,el)=>{
        discount(el);  
    })

    function discnumber(){
        const num = $('#disc-number').val();
          $('#discount').val(num);
    }

});



   