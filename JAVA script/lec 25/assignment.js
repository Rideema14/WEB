
let arr=["https://plus.unsplash.com/premium_photo-1673529434513-36961d98dd23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJveXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1574722772849-7b249c18a2fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJveXN8ZW58MHx8MHx8fDA%3D ", 
    "https://media.istockphoto.com/id/1331261934/photo/adorable-black-infant-baby-playing-with-stacking-building-blocks-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=UDG8UVL2V-a-lExbI4js_ec99YM_AdGGCOUMrJn0wrQ=",
    "https://media.istockphoto.com/id/2005119463/photo/indian-frustrated-lonely-teenager-male-burst-of-anger-feeling-bad-hurt-upset-sitting-alone-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=9bnniMddbIPl-BInv1KHYbIM8qZTVguuA1fo_FdoEuE="]
    let imageE1 = document.querySelector("img");
    let num=0;
    setInterval(function(){
        imageE1.setAttribute("src",arr[num]);
    num=(num+1) % arr.length;
    
    },2000
);
