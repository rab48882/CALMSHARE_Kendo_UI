/** ORDER OF FUNCTION
 * Get_URL_Parameter(parameter_name)
 * Set_Default_BaseMap()
 * Set_Default_Extent()
 * Set_Default_Rotation()
 * Set_Default_FeatureLayers_On_Off()
 * Set_UI()
 * Set_FeatureLayers_Where_Filters()
 * Initialize()
 */

/*Define all function before use*/
  function Get_URL_Parameter(parameter_name){
    parameter_name = parameter_name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( window.location.href );
    if( results == null )
        return "";
      else
        return results[1];
  }

  function Set_Default_BaseMap(){
    var urlObject = esri.urlToObject(document.location.href);
    alert(urlObject.query.basemapid);
  }

  function Initialize(){
    dojo.require("esri.map");
    
    var map;
    map = new esri.Map("theMapDiv");
    
    var basemapURL = "http://slaxadggis001/CALMArcGIS/rest/services/01_CTA_Arrivals_Tunnels/MapServer";
    var basemap = new esri.layers.ArcGISTiledMapServiceLayer(basemapURL);
              
    map.addLayer(basemap);   
  }

            

/*Call all functions*/
dojo.addOnLoad(Initialize);
