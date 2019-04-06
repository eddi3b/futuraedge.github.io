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
      
      
      Symbol.bindElementAction(compId, symbolName, "${HitRegion}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("O");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${HomeBTN}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.play("GO_HOME");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11869, function(sym, e) {
         // insert code here
         sym.stop("HOME_END");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12750, function(sym, e) {
         // insert code here
         sym.stop("HOME_END");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${HoverLeft_ABOUT}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("GO_HOME");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${HoverRight_ABOUT}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Numbers");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${HoverLeft_NUMBERS}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("About_Reset");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${HoverRight_NUMBERS}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Letters");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${HoverRight_HOME}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("About");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${HoverLeft_LETTERS}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Numbers_End");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${HoverRight_LETTERS}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Style");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${HoverLeft_STYLE}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Letters");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18877, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23877, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28877, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33877, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 63500, function(sym, e) {
         // insert code here
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("HOME_END");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${HomeBTN_ABOUT}", "click", function(sym, e) {
         // insert code for mouse click here
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.play("Home_Reset");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${AboutBTN_HOME}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("About");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${AboutBTN_ABOUT}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.stop("About_End");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${TURA22}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("Home_Reset");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Number_BTN}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Numbers");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${NumberBTN_NUMBER}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Number_End");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60500, function(sym, e) {
         // insert code here
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("About_End");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${About_BTNRESET}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("About_Reset");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Letters_BTN}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Letters");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Style_BTN}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Style");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         //Force body of webpage to a specific color
         $("body").css("background-color","#353734");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'OpeningBrackets'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 799, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "stop", function(sym, e) {
         

      });
      //Edge binding end

   })("OpeningBrackets");
   //Edge symbol end:'OpeningBrackets'

   //=========================================================
   
   //Edge symbol: 'HoverRight'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 300, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 300, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${P2R2WEBver1-LR-063}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${P2R2WEBver1-LR-063}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.playReverse();

      });
      //Edge binding end

   })("HoverRight");
   //Edge symbol end:'HoverRight'

   //=========================================================
   
   //Edge symbol: 'HoverLeft'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 300, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${P2R2WEBver1-LR-073}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${P2R2WEBver1-LR-073}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.playReverse();
         

      });
      //Edge binding end

   })("HoverLeft");
   //Edge symbol end:'HoverLeft'

   //=========================================================
   
   //Edge symbol: 'HomeBTN'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text2}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object"
         sym.stop("OVER");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text2}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.stop("UP");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 989, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text2}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("Down");

      });
      //Edge binding end

   })("HomeBTN");
   //Edge symbol end:'HomeBTN'

   //=========================================================
   
   //Edge symbol: 'About_BTN'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 989, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${About}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("OVER");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${About}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("UP");

      });
      //Edge binding end

   })("About_BTN");
   //Edge symbol end:'About_BTN'

   //=========================================================
   
   //Edge symbol: 'Number_BTN'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 989, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text2Copy2}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("OVER");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text2Copy2}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("UP");
         

      });
      //Edge binding end

   })("Number_BTN");
   //Edge symbol end:'Number_BTN'

   //=========================================================
   
   //Edge symbol: 'Letters_BTN'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 989, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text2Copy3}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("OVER");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text2Copy3}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("UP");
         

      });
      //Edge binding end

   })("Letters_BTN");
   //Edge symbol end:'Letters_BTN'

   //=========================================================
   
   //Edge symbol: 'Style_BTN'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 989, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text2Copy4}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("OVER");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text2Copy4}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("UP");

      });
      //Edge binding end

   })("Style_BTN");
   //Edge symbol end:'Style_BTN'

   //=========================================================
   
   //Edge symbol: 'About_Content'
   (function(symbolName) {   
   
   })("About_Content");
   //Edge symbol end:'About_Content'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-179474352");