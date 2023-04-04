var productname = document.getElementById("name");
var productprice = document.getElementById("price");
var productcat = document.getElementById("cat");
var productdes = document.getElementById("desc");
var add = document.getElementById("addBtn");

// console.log(add);
var list = [];
var globalindex;
var create=true;


var local=JSON.parse(localStorage.getItem('loginn'));
console.log(local);

if(local.customeroradmin=="admin")
{

// display3();
display2();
}
else
{
display2();

}



if(localStorage.getItem('productinfo')!="null")
{ 
    list=JSON.parse(localStorage.getItem('productinfo'));
    display1();
}


add.addEventListener('click', function () {
    
    var obj ={
        name: productname.value,
        price: productprice.value,
        category: productcat.value,
        discription: productdes.value
    }
    if(create==true){
        list.push(obj);
        localStorage.setItem('productinfo',JSON.stringify(list));
    }
    else{
        list[globalindex]=obj;
        localStorage.setItem('productinfo',JSON.stringify(list));
        create=true;
        add.innerHTML="Add Product";
    }
    
    console.log(list);
    clear();
    display1();
    
})


function clear(){
    productname.value = '';
    productprice.value = '';
    productcat.value = '';
    productdes.value = '';
}

function display1(){
    var cartona=``;
    for ( var i = 0; i < list.length; i++) {
        
        cartona+= 
        `<tr id="up">
        <th scope="row"> <p id='nameProduct'> ${i} </p><input type="text" class="form-control d-none " id="nameUpdate"></th>
        <th scope="row"> <p id='nameProduct'> ${list[i].name} </p><input type="text" class="form-control d-none " id="nameUpdate"></th>
       <td> <p id='priceProduct'>${list[i].price}</p><input type="text" class="form-control d-none " id="priceUpdate"></td>
       <td> <p id='catProduct'> ${list[i].category}</p><input type="text" class="form-control d-none " id="catUpdate"></td>
       <td> <p id='descProduct'> ${list[i].discription}</p><input type="text" class="form-control d-none " id="descUpdate"></td>
     
       </tr>`
    }

    
    document.getElementById("info").innerHTML = cartona;    
}

function more1(){
 var update=``;
 for(var i=0 ;i<list.length;i++){
 update+=`<td><button class="btn btn-outline-danger"  onclick ="delet(${i})">Delete</button></td> 
 <td><button class="btn btn-outline-warning" id='updatebttn' onclick="update(${i})">Update</button>
 <button class="btn btn-outline-success px-3 d-none" id='savebtn'>Save</button></td>`

}
 document.getElementById("up").innerHTML=update;

}


function delet(x){
    
    list.splice(x,1)
    display1();
    display2();    
}


function update(index){
    productname.value =list[index].name;
    productprice.value=list[index].price;
    productdes.value=list[index].discription;
    productcat.value=list[index].category;
    add.innerHTML="update";
    globalindex=index;
    create=false;
}

function display2(){
    var cartonaa=``;
     
    cartonaa+= 
     `  <input type="search" class="form-control mb-3"
        placeholder="search.." oninput="searchProduct(this.value)">
        <div id="error"></div>
        <tr>
        <th>index</th>
        <th>Name</th>
        <th>Price</th>
        <th>category</th>
        <th>Desc</th>
        </tr>`
        
        document.getElementById("thead").innerHTML = cartonaa;
    }

function more2(){
        var cartonaa=``;
        cartonaa+= `<th>Delete</th>
        <th>Update</th>`
        document.getElementById("thead").innerHTML = cartonaa;
    }

    
    // function display3() {
    //     var cartonaaa=``;
     
        
    //     cartonaaa+= 
    //     `  <h1 class="position-relative"> <span class="active">CRUDS</span>
    //     Operating System</h1>
    //     </div>
    //     <div class="form my-5">
    //     <div id="errorform"></div>
    //     <label for="">PRODUCT NAME</label>
    // <input type="text" class="form-control mb-3" id="name">


    // <label for="price">PRODUCT PRICE</label>
    // <input type="number" class="form-control mb-3" id="price">
    // <label for="cat">PRODUCT CATEGORY</label>
    // <input type="text" class="form-control mb-3" id="cat">
    
    
    // <label for="desc">PRODUCT DESCRIPTION</label>
    // <input type="text" class="form-control mb-3" id="desc">
    
    // <button class="btn btn-info text-dark mb-3 addBtn"
    //  id="addBtn">Add Product</button>
    // <button class="btn btn-success text-dark mb-3 d-none"
    // id="updateBtn" onclick="updateProduct()">Update Product</button>
    // <p class="text-danger text-center fw-bold" id="emp"></p>
    // `
    // document.getElementById("crudsystem").innerHTML = cartonaaa;}
    
    
    
    
    
    
    
    
    
    
    
    
