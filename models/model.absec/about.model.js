const mongoose = require("mongoose");
const aboutSchema = new mongoose.Schema({
  skillOne : { type: String },
  skillTwo : { type: String },
  skillThree : { type: String },
  skillFour : { type: String },
  skillFive : { type: String },
  HistoryOne : { 
    title: {type : String} , 
    text: {type : String}  
},
  HistoryTwo  :  { 
    title: {type : String} , 
    text: {type : String}  
},
  HistoryThree  :  { 
    title: {type : String} , 
    text: {type : String}  
},
  HistoryFour  :  { 
    title: {type : String} , 
    text: {type : String}  
},
});

module.exports = mongoose.model("about_absec", aboutSchema);
