function create(ele)
{
    return document.createElement(ele);
}

function _style(ele)
{
    return ele.style;
}

document.body.style.background="#F1F2F4";
document.body.style.fontFamily="Open+Sans";

var h = create('header');
document.body.append(h);
h.className="container-fluid p-0";

function _append(ele)
{
    h.append(ele);
}

var h_div_top=create('div');
var h_div_bottom=create('div');
var h_div=create('div');
var h_div1=create('div');
var h_div2=create('div');
var h_a_top=create('a');
var img=create('img');
var h_input=create('input');
var i=create('i');
var h_button=create('button');
var h_a1=create('a');
var a1_span=create('span');
var a1_img=create('img');
var a1_img2=create('img');
var h_a2=create('a');
var a2_img=create('img');
var a2_span=create('span');
var h_a3=create('a');
var a3_img=create('img');
var a3_span=create('span');
var h_a4=create('a');
var a4_img=create('img');
var hr=create('hr');

a1_span.innerHTML="Login";
a2_span.innerHTML="Cart";
a3_span.innerHTML="Become a Seller";

h_div_top.className="m-0 row";
h_div_bottom.className="row";
h_div2.className="p-0 col-sm-12 col-lg-2 col-xl-2";
h_div.className="p-0 col-sm-12 col-lg-5 col-xl-6";
h_div1.className="p-0 col-sm-12 col-lg-5 col-xl-4";
h_a1.setAttribute('href','#');
h_a2.setAttribute('href','#');
h_a3.setAttribute('href','#');
h_a4.setAttribute('href','#');
h_a1.className="text-decoration-none text-dark";
h_a2.className="text-decoration-none text-dark";
h_a3.className="text-decoration-none text-dark";
h_a4.className="text-decoration-none text-dark";
h_a_top.setAttribute('href','#');
img.setAttribute('src','./IMG/flipkartlogo.svg');
i.className="fa-solid fa-magnifying-glass";
h_input.setAttribute('type','search');
h_input.setAttribute('placeholder','Search for Products, Brands and More');
a1_img.setAttribute('src','./IMG/profile.svg');
a1_img2.setAttribute('src','./IMG/chevrond.svg');
a2_img.setAttribute('src','./IMG/cart.svg');
a3_img.setAttribute('src','./IMG/Store.svg');
a4_img.setAttribute('src','./IMG/verticalDots.svg');

h_div_top.append(h_input);
h_a_top.append(img);
h_button.append(i);
h_div.append(h_button);
h_div.append(h_input);
h_div.append(hr);
h_div2.append(h_a_top);
h_a1.append(a1_img);
h_a1.append(a1_span);
h_a1.append(a1_img2);
h_a2.append(a2_img);
h_a2.append(a2_span);
h_a3.append(a3_img);
h_a3.append(a3_span);
h_a4.append(a4_img);
h_div1.append(h_a1);
h_div1.append(h_a2);
h_div1.append(h_a3);
h_div1.append(h_a4);
h_div_top.append(h_div2);
h_div_top.append(h_div);
h_div_top.append(h_div1);
_append(h_div_top);
_append(h_div_bottom);

//style
_style(h).Height="200px";
//_style(h).border="1px solid black";

_style(h_div_top).minHeight="65px";
//_style(h_div_top).border="1px solid green";
_style(h_div_top).background="#fff";
_style(h_div_top).display="flex";

h_a_top.style.marginLeft="60px";

_style(h_div).display="flex";
//_style(h_div).border="1px solid orange";
// _style(h_div).width="970px";

_style(img).margin="10px 15px";

_style(i).padding="5px";
_style(i).fontSize="18px";
_style(i).color="#666";

_style(h_button).margin="10px 0px";
// _style(h_button).marginLeft="950px";
_style(h_button).paddingLeft="10px";
_style(h_button).background="transparent";
_style(h_button).border="none";
_style(h_button).borderTopLeftRadius="8px";
_style(h_button).borderBottomLeftRadius="8px";
_style(h_button).borderRight="none";
_style(h_button).background="#F0F5FF";

_style(h_input).margin="10px 0px";
_style(h_input).borderRadius="8px";
_style(h_input).borderTopLeftRadius="0px";
_style(h_input).borderBottomLeftRadius="0px";
_style(h_input).border="none";
_style(h_input).borderLeft="0px";
_style(h_input).width="700px";
_style(h_input).fontSize="18px";
_style(h_input).fontWeight="400";
_style(h_input).textDecoration="none";
_style(h_input).background="#F0F5FF";

h_input.addEventListener('focus',function()
{
    this.style.outline="none";
});

//_style(h_div1).border="1px solid black";
// _style(h_div1).margin="0px 10px";
_style(h_div1).color="#000";

h_a1.style.lineHeight="55px";
h_a1.style.paddingLeft="20px";
h_a1.style.textAlign="center";
a1_span.style.paddingLeft="5px";
a1_img2.style.paddingLeft="5px";

h_a2.style.paddingLeft="40px";
a2_span.style.paddingLeft="5px";

h_a3.style.paddingLeft="40px";
a3_span.style.paddingLeft="5px";

h_a4.style.paddingLeft="40px";

function myFun()
{
    if(query5.matches)
    {
        h_input.style.width="270px";
        h_a_top.style.margin="0px 45px";
        h_div2.style.boxShadow="0px 1px 1px 0px rgba(0,0,0,0.5)";
        h_button.style.marginLeft="10px";
        h_input.style.marginRight="10px";
        h_input.style.fontSize="16px";
        h_button.style.fontSize="16px";
        h_a1.style.paddingLeft="20px";
        h_a1.style.fontSize="14px";
        a1_img.style.height="19px";
        a1_span.style.paddingLeft="2px";
        a1_img2.style.height="12px";
        a1_img2.style.paddingLeft="2px";
        h_a2.style.paddingLeft="12px";
        h_a2.style.fontSize="14px";
        a2_img.style.height="19px";
        a2_span.style.paddingLeft="2px";
        h_a3.style.paddingLeft="12px";
        h_a3.style.fontSize="14px";
        a3_img.style.height="19px";
        a3_span.style.paddingLeft="2px";
        h_a4.style.paddingLeft="12px";
        a4_img.style.height="19px";
    }
    else if(query4.matches)
    {
        h_input.style.width="450px";
        h_button.style.marginLeft="100px";
        h_input.style.fontSize="16px";
        h_button.style.fontSize="16px";
        h_button.style.marginLeft="8px";
        h_a1.style.paddingLeft="80px";
        h_a2.style.paddingLeft="60px";
        h_a3.style.paddingLeft="60px";
        h_a4.style.paddingLeft="60px";
    }
    else if(query3.matches)
    {
        h_input.style.width="420px";
    }
    else if (query2.matches)
    {
        h_input.style.width="600px";
        h_a1.style.paddingLeft="80px";
        h_a2.style.paddingLeft="100px";
        h_a3.style.paddingLeft="100px";
        h_a4.style.paddingLeft="100px";
        _style(h_div).boxShadow="0px 1px 1px 0px rgba(0,0,0,0.2)";
    }
    else if (query1.matches)
    {
        h_input.style.width="450px";

        h_a2.style.paddingLeft="20px";
        h_a3.style.paddingLeft="20px";
        h_a4.style.paddingLeft="20px";
    }
    else
    {
        h_input.style.width="700px";

        h_a2.style.paddingLeft="40px";
        h_a3.style.paddingLeft="40px";
        h_a4.style.paddingLeft="40px";
        h_a1.style.paddingLeft="20px";

        _style(h_div).boxShadow="";

        h_input.style.fontSize="18px";
        h_button.style.fontSize="";
        h_button.style.marginLeft="15px";
    }
}

var query1=window.matchMedia("(max-width : 1355px)");
var query2=window.matchMedia("(max-width : 992px)");
var query3=window.matchMedia("(max-width : 867px)");
var query4=window.matchMedia("(max-width : 695px)");
var query5=window.matchMedia("(max-width : 570px)");

myFun();

query1.addEventListener("change",function()
{
    myFun();
});
query2.addEventListener("change",function()
{
    myFun();
});
query3.addEventListener("change",function()
{
    myFun();
});
query4.addEventListener("change",function()
{
    myFun();
});
query5.addEventListener("change",function()
{
    myFun();
});

_style(h_div_bottom).height="130px";
_style(h_div_bottom).border="1px solid red";
_style(h_div_bottom).background="#fff";
_style(h_div_bottom).margin="10px 13px";