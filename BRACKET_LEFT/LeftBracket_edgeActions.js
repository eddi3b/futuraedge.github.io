/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Braket_Lanimation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 300, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${P2R2WEB_Bracket-07}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${P2R2WEB_Bracket-07}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

   })("Braket_Lanimation");
   //Edge symbol end:'Braket_Lanimation'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-338548447");