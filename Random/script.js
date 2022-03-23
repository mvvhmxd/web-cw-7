// project أنشئ كائن
const project = {
    type:"health",
    user:23,
    biography() {  return "i help people be healthy"
    },

};
// randomProperty أنشئ دالة
function RandomProperty(obj) {
    const keys = Object.keys(obj);
  
    const random = Math.floor(Math.random() * keys.length);
  
  
console.log(keys[random]);
console.log(obj[`${keys[random]}`]);
}
RandomProperty(project);