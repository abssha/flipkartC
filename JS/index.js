var ul=document.createElement('ul');
document.body.append(ul);

for(var i=0; i<10; i++)
{
    var li=document.createElement('li');
    li.innerHTML=(i+1)+" Hello";
    ul.append(li);
}

var object=document.getElementsByTagName('li');

for(var p in object)
{
    if(!isNaN(p) && p<3 || p>6)
    {
        object[p].style.color="red";
    }
}

let abrar=
{
    name:"Abrar",
    'surname':"Shaikh",
    "fname":"Farid",
    profession:"Enginner",

    getName:function()
    {
        return this.name+" "+this.fname+" "+this.surname;
    },

    getProfession:()=>
    {
        return abrar.profession;
    }
};

console.log(abrar.getName());
console.log(abrar.getProfession());

