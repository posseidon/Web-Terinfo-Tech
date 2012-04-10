/**
 * My OpenLayers Wrapper for OpenLayers.
 * @author: ntb
 * @email: ntb@inf.elte.hu
 */
function WttMap(divId){
	/** Pre-defined Projection Systems */
	this.projections = {
		wgsProjection: new OpenLayers.Projection('EPSG:4326'),
		oplProjection: new OpenLayers.Projection("EPSG:900913")
	};
	
	/** Map Initialization Options */
	this.mapOptions = {
		div: divId
	};
	
	/** Pre-defined Layers */
	this.mapLayers = {
		googlePhysical: new OpenLayers.Layer.Google(
		        "Physical",
		        {type: google.maps.MapTypeId.TERRAIN}
		    ),
		googleMap: 	new OpenLayers.Layer.Google(
			    "Streets", // the default
			    {numZoomLevels: 20}
			),
	    googleHybrid: new OpenLayers.Layer.Google(
		        "Hybrid",
		        {type: google.maps.MapTypeId.HYBRID, numZoomLevels: 20}
		    ),
		googleSatelite: new OpenLayers.Layer.Google(
		        "Satellite",
		        {type: google.maps.MapTypeId.SATELLITE, numZoomLevels: 22}
		    ),
		osm:  new OpenLayers.Layer.OSM('OSM'),
		wms:  new OpenLayers.Layer.WMS( 
				"OpenLayers WMS","http://vmap0.tiles.osgeo.org/wms/vmap0", 
				{layers: 'basic'} ),
		vect: new OpenLayers.Layer.Vector("Vector Layer")
	};
	
	/** Map Controls */
	this.controls = {
		layerSwitcher: new OpenLayers.Control.LayerSwitcher()
	};
	
	/** Initialize Openlayers Map Object */
	this.map = new OpenLayers.Map(this.mapOptions);
}

/**
 * Add Layers to map object.
 * @params layersArray Array of mapLayers.LayerName
 */
WttMap.prototype.addLayers = function(layersArray){
	for(var key in layersArray){
		this.map.addLayer(this.mapLayers[layersArray[key]]);
	}
}

/**
 * Purpose: demo
 * Add All available Google Layers.
 */
WttMap.prototype.addAllGoogleLayers = function(){
	var googleLayers = [this.mapLayers.googleMap,this.mapLayers.googlePhysical, this.mapLayers.googleHybrid, this.mapLayers.googleSatelite];
	this.map.addLayers(googleLayers);
}

/**
 *
 */
WttMap.prototype.addControls = function(mapControls){
	for(var i = 0; i < mapControls.length; i++){
		this.map.addControl(this.controls[mapControls[i]]);
	}
}

/**
 * Setting Map Center with given coordinates.
 * @param latitude
 * @param longitude
 */
WttMap.prototype.setCenter = function(latitude, longitude){
	this.map.setCenter(this.trLonLat(latitude, longitude), 17);
}


/**
 * Translate coordinates from WGS84 to Openlayers 90013.
 * @param longitude
 * @param latitude
 * @return OpenLayers.LonLat object.
 */
WttMap.prototype.trLonLat = function(latitude, longitude){
	return new OpenLayers.LonLat(longitude, latitude).transform(this.projections.wgsProjection, this.projections.oplProjection);
}
