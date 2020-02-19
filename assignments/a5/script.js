function displayCalculate()
{
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const productName = document.getElementById("product-name").value;
    const productCount = document.getElementById("product-count").value;
    const productPrice = document.getElementById("product-price").value;

    //let displayC = doucment.getElementById("calculate-results");

    

    var finalPrice = (productPrice * productCount) * 1.07;

    let finalString = `${firstName} ${lastName} ordered ${productCount} ${productName}(s)<br>Totalling: $${finalPrice}`
    
    document.getElementById("calculate-results").innerHTML = finalString;

}
