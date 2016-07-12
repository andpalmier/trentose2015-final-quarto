/*
 * MonsterModel provides basic methods to iterate
 * over a collection of "monsters"  
 */
var MonsterModel = {
    
   /* Collection of available monsters */
   collection : monsters, 
  
   /* Start the iteration over the collection of monsters.
   it sets the first element as the current monster */    
   init : function() {
    
    for (var i = monsters.length - 1; i >= 0; i--) {
        MonsterModel.collection[i] = monsters[i];
      }
    
   },
  
   /*   Returns the current monster and sets as current monster
    * the next element in the array.
    * If no more monsters are available, it returns null
    */
   getCurrentMonster : function () {
    if (MonsterModel.collection.length == 0)
      {
        return null;
      }

      var cur = MonsterModel.collection[0];
      

      return cur;
    },
  
   /* Checks if the name of the current monster 
    * is monsterName. It returns true if the user 
    * correctly named the monster, false otherwise
    */
   catchMonster : function (monsterName){
    if (MonsterModel.collection.length == 0)
      {
        return false;
      }
      var cur = MonsterModel.collection[0];
      
    if (cur.name == monsterName)
      {
        return true;
      }
    else{
      return false;
         }  
}};

$(document).ready(function(){
    MonsterModel.init();
    var tmp0 = MonsterModel.getCurrentMonster();
    $("#monsterPicture").attr("src",tmp0.pic);
    $("#monsterPicture").attr("value",tmp0.name);

    $("button").on("click", function(){
         var name = $("input").val();
         var catc = MonsterModel.catchMonster(name);
          if(catc){
            alert("Catched!");
          }
          else{
            alert("Sorry Master!");
          }
    MonsterModel.collection.shift();
    var tmp = MonsterModel.getCurrentMonster();
    if(tmp !=null){
      $("#monsterPicture").attr("src",tmp.pic);
    $("#monsterPicture").attr("value",tmp.name);
    }
    else {
    alert("No more monsters");
      }  
        
        
        
        
    });
  
});