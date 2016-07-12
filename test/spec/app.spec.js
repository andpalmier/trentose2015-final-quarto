/* Remember that blanket will only work with brackets live preview */
/* Try to maximise the coverage of the ParlaModel object */

describe("test getCurrentMonster()", function() {

  it("should return true", function() {  
    var monster = MonsterModel;
      monster.init();
      var cur = monster.getCurrentMonster();

      expect(cur.name).toBe("bulbasaur");
  });    
 it("should return false", function() {  
    var monster = MonsterModel;
      monster.init();
      var cur = monster.getCurrentMonster();

      expect(cur.name).not.toBe("pikachu");
  });  

});

describe("test catchMonster", function() {

  it("should return true", function() {  
    var monster = MonsterModel;
      monster.init();
      var n = monster.catchMonster("bulbasaur");
      expect(n).toBe(true);
  });    
 it("should return false", function() {  
    var monster = MonsterModel;
      monster.init();
            var n = monster.catchMonster("bulbasaur");
      expect(n).not.toBe(0);
  });  

});
