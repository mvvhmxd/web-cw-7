// Database قاعدة البيانات
const chars = [
    {
lsmall:"asdfghjklrdyytgvjvh"
    },

   {lcap:"RDTFYGUHLIKHCDNVH"
},

{
    num:"98765434567778"
},

{charcs:"*#!@#$%($#^%#$#####_~"

},
];

// دالة generate
   function generate() {
    let randompassword = "";
    let collection_1  = chars[0] ["lsmall"];
    let collection_2  = chars[1] ["lcap"];
    let collection_3  = chars[2] ["num"];
    let collection_4  = chars[3] ["charcs"];
    
    randompassword =

    randompassword + 
    collection_1.charAt(Math.floor(Math.random * collection_1.length));

    randompassword + 
    collection_2.charAt(Math.floor(Math.random * collection_2.length));

    randompassword + 
    collection_3.charAt(Math.floor(Math.random * collection_3.length));

    randompassword + 
    collection_4.charAt(Math.floor(Math.random * collection_4.length));
    display.value = randompassword;
   
   }
