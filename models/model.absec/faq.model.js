const mongoose = require("mongoose");
const faqSchema = new mongoose.Schema({
  one : { 
    title: {type : String} , 
    text: {type : String}  
},
  two : { 
    title: {type : String} , 
    text: {type : String}  
},
  three : { 
    title: {type : String} , 
    text: {type : String}  
},
  four : { 
    title: {type : String} , 
    text: {type : String}  
},
  five : { 
    title: {type : String} , 
    text: {type : String}  
},
  six : { 
    title: {type : String} , 
    text: {type : String}  
},
  seven : { 
    title: {type : String} , 
    text: {type : String}  
},
  eight : { 
    title: {type : String} , 
    text: {type : String}  
},
  nine : { 
    title: {type : String} , 
    text: {type : String}  
},
  ten : { 
    title: {type : String} , 
    text: {type : String}  
},

});

module.exports = mongoose.model("faq_absec", faqSchema);
