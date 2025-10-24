var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_poothadi2_1 = new ol.format.GeoJSON();
var features_poothadi2_1 = format_poothadi2_1.readFeatures(json_poothadi2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poothadi2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poothadi2_1.addFeatures(features_poothadi2_1);
var lyr_poothadi2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poothadi2_1, 
                style: style_poothadi2_1,
                popuplayertitle: 'poothadi2',
                interactive: true,
    title: 'poothadi2<br />\
    <img src="styles/legend/poothadi2_1_0.png" /> ATHIRATTUKUNNU<br />\
    <img src="styles/legend/poothadi2_1_1.png" /> CHEENGODE<br />\
    <img src="styles/legend/poothadi2_1_2.png" /> CHEEYAMBAM<br />\
    <img src="styles/legend/poothadi2_1_3.png" /> CHERUKUNNU<br />\
    <img src="styles/legend/poothadi2_1_4.png" /> CHUNDAKOLLY<br />\
    <img src="styles/legend/poothadi2_1_5.png" /> GANDHINAGAR<br />\
    <img src="styles/legend/poothadi2_1_6.png" /> IRULAM<br />\
    <img src="styles/legend/poothadi2_1_7.png" /> KELAMANGALAM<br />\
    <img src="styles/legend/poothadi2_1_8.png" /> KENICHIRA<br />\
    <img src="styles/legend/poothadi2_1_9.png" /> KOLERI<br />\
    <img src="styles/legend/poothadi2_1_10.png" /> KOTTAKOLLY<br />\
    <img src="styles/legend/poothadi2_1_11.png" /> KOTTAVAYAL<br />\
    <img src="styles/legend/poothadi2_1_12.png" /> MANALVAYAL<br />\
    <img src="styles/legend/poothadi2_1_13.png" /> MARIYANAD<br />\
    <img src="styles/legend/poothadi2_1_14.png" /> MOODAKOLLY<br />\
    <img src="styles/legend/poothadi2_1_15.png" /> NADAVAYAL<br />\
    <img src="styles/legend/poothadi2_1_16.png" /> NELLIKKARA<br />\
    <img src="styles/legend/poothadi2_1_17.png" /> PAPLASSERI<br />\
    <img src="styles/legend/poothadi2_1_18.png" /> POOTHADI<br />\
    <img src="styles/legend/poothadi2_1_19.png" /> THAZAMUNDA<br />\
    <img src="styles/legend/poothadi2_1_20.png" /> THOOTHALERI<br />\
    <img src="styles/legend/poothadi2_1_21.png" /> VAKERI<br />\
    <img src="styles/legend/poothadi2_1_22.png" /> VALAVAYAL<br />\
    <img src="styles/legend/poothadi2_1_23.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_poothadi2_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_poothadi2_1];
lyr_poothadi2_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'district': 'district', 'lsgd': 'lsgd', 'ward_name': 'ward_name', 'ward_no': 'ward_no', 'lsgd_type': 'lsgd_type', 'created_da': 'created_da', 'surveyor': 'surveyor', 'mob_no': 'mob_no', 'remarks': 'remarks', '_distlsgd': '_distlsgd', 'objectid': 'objectid', '_result': '_result', '_ulid': '_ulid', '_distlsgd2': '_distlsgd2', });
lyr_poothadi2_1.set('fieldImages', {'ogc_fid': 'TextEdit', 'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'district': 'TextEdit', 'lsgd': 'TextEdit', 'ward_name': 'TextEdit', 'ward_no': 'TextEdit', 'lsgd_type': 'TextEdit', 'created_da': 'TextEdit', 'surveyor': 'TextEdit', 'mob_no': 'TextEdit', 'remarks': 'TextEdit', '_distlsgd': 'TextEdit', 'objectid': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distlsgd2': 'TextEdit', });
lyr_poothadi2_1.set('fieldLabels', {'ogc_fid': 'no label', 'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'district': 'no label', 'lsgd': 'no label', 'ward_name': 'inline label - always visible', 'ward_no': 'no label', 'lsgd_type': 'no label', 'created_da': 'no label', 'surveyor': 'no label', 'mob_no': 'no label', 'remarks': 'no label', '_distlsgd': 'no label', 'objectid': 'no label', '_result': 'no label', '_ulid': 'no label', '_distlsgd2': 'no label', });
lyr_poothadi2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});