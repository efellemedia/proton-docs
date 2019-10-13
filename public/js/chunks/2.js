(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{15:function(e,t,a){"use strict";a.r(t);var o=a(0),s=Object(o.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("section",[t("div",{staticClass:"card"},[this._m(0),this._v(" "),t("p-chart",{attrs:{name:"stats-visitors",labels:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],type:"axis-mixed",height:350,colors:["#4DD0E1","#FF5722"],"line-options":{dotSize:6,hideLine:0,hideDots:0,heatline:0,regionFill:1},"y-markers":[{label:"Top Visitors Last Week",value:47,options:{labelPos:"left"}}],"data-sets":[{name:"Last Week",chartType:"line",values:[12,14,11,24,19,32,47]},{name:"This Week",chartType:"line",values:[58,110,76,240,100,180,220]}]}})],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card__body"},[t("h2",[this._v("Visitors")])])}],!1,null,null,null).exports,n={data:function(){return{Visitors:s,VisitorsCode:"<template>\n    <section>\n        <div class=\"card\">\n            <div class=\"card__body\">\n                <h2>Visitors</h2>\n            </div>\n\n            <p-chart\n                name=\"stats-visitors\"\n                :labels=\"[\n                    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'\n                ]\"\n                type=\"axis-mixed\"\n                :height=\"350\"\n                :colors=\"['#4DD0E1', '#FF5722']\"\n                :line-options=\"{\n                    dotSize: 6,\n                    hideLine: 0,\n                    hideDots: 0,\n                    heatline: 0,\n                    regionFill: 1\n                }\"\n                :y-markers=\"[\n                    {\n                        label: 'Top Visitors Last Week',\n                        value: 47,\n                        options: { labelPos: 'left' }\n                    }\n                ]\"\n                :data-sets=\"[\n                    {\n                        name: 'Last Week',\n                        chartType: 'line',\n                        values: [12, 14, 11, 24, 19, 32, 47]\n                    },\n                    {\n                        name: 'This Week',\n                        chartType: 'line',\n                        values: [58, 110, 76, 240, 100, 180, 220]\n                    },\n                ]\">\n            </p-chart>\n        </div>\n    </section>\n</template>\n"}}},i=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("article",[t("h2",[this._v("Example")]),this._v(" "),this._m(0),this._v(" "),t("example",{attrs:{component:this.Visitors,code:this.VisitorsCode}}),this._v(" "),t("api-reference",{attrs:{data:[{props:[{name:"<code>name</code>",description:"Required. Unique name value that is used to generate the wrapping elements div ID.",type:"<code>String</code>",values:"",default:""},{name:"<code>title</code>",type:"<code>String</code>",description:"Add a title to the Chart.",values:"",default:""},{name:"<code>type</code>",type:"<code>String</code>",description:"Let the chart know what type to render.",values:"line, bar, axis-mixed, pie, percentage, heatmap",default:"bar"},{name:"<code>height</code>",type:"<code>Number</code>",description:"Set the height of the chart in pixels.",values:"",default:"300"},{name:"<code>colors</code>",type:"<code>Array</code>",description:"Set the colors to be used for each individual unit type, depending on the chart type.",values:"",default:"purple, #ffa3ef, light-blue"},{name:"<code>dataSets</code>",type:"<code>Array</code>",description:"An array of your dataset values you wish to display within your chart.",values:"",default:""},{name:"<code>labels</code>",type:"<code>Array</code>",description:"An array of labels used to label your dataset.",values:"",default:""},{name:"<code>dataPoints</code>",type:"<code>Object</code>",description:"An object of your datapoint values you wish to display within heatmap-type charts.",values:"",default:""},{name:"<code>startDate</code>",type:"<code>Date</code>",description:"JavaScript date object for when heatmap chart types should start.",values:"",default:""},{name:"<code>endDate</code>",type:"<code>Date</code>",description:"JavaScript date object for when heatmap chart types should end.",values:"",default:""},{name:"<code>countLabel</code>",type:"<code>String</code>",description:"Count label used in heatmap chart types.",values:"",default:"Count"},{name:"<code>discreteDomains</code>",type:"<code>Boolean</code>",description:"Allow for a continous distribution of heat squares (as on GitHub), rather than showing the month-wise separation.",values:"true, false",default:"false"},{name:"<code>yMarkers</code>",type:"<code>Array</code>",description:"Highlight certain values on the Y axis, shown as dashed lines on the graph.",values:"",default:""},{name:"<code>yRegions</code>",type:"<code>Array</code>",description:"2D counterparts to markers with start and end values, shown as a greyed-out area between the extremes.",values:"",default:""},{name:"<code>axisOptions</code>",type:"<code>Object</code>",description:"Customize axis options.",values:"",default:""},{name:"<code>lineOptions</code>",type:"<code>Object</code>",description:"Can be used to set various properties on line plots, turn them into Area Charts and so on.",values:"",default:""},{name:"<code>tooltipOptions</code>",type:"<code>Object</code>",description:"Customize the format of the label and value displayed in tooltips.",values:"",default:""},{name:"<code>valuesOverPoints</code>",type:"<code>Boolean</code>",description:"Display data values over bars or dots in an axis graph.",values:"true, false",default:"false"},{name:"<code>maxLegendPoints</code>",type:"<code>Number</code>",description:"Set the maximum number of legend points.",values:"",default:"20"},{name:"<code>maxSlices</code>",type:"<code>Number</code>",description:"Set the maximum number of slices shown in pie charts.",values:"",default:"20"},{name:"<code>isNavigable</code>",type:"<code>Boolean</code>",description:"Makes the chart interactive with arrow keys and highlights the current active data point.",values:"true, false",default:"false"}]}]}})],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Proton's charts are powered by the "),t("a",{attrs:{href:"https://frappe.io/charts",target:"_blank"}},[this._v("Frappe Charts")]),this._v(" library.")])}],!1,null,null,null);t.default=i.exports}}]);