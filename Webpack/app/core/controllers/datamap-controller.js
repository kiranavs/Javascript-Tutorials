module.exports = function(DatamapService){
	var datamapVm = this;
	datamapVm.mapObject = {
	  scope: 'usa',
	  responsive: true,
	  options: {
	    width: 1110,
	    legendHeight: 60 // optionally set the padding for the legend
	  },
	  geographyConfig: {
	    highlighBorderColor: '#EAA9A8',
	    highlighBorderWidth: 2
	  },
	  fills: {
	    'HIGH': '#CC4731',
	    'MEDIUM': '#306596',
	    'LOW': '#667FAF',
	    'defaultFill': '#DDDDDD'
	  },
	  data: {
	    "AZ": {
	      "fillKey": "MEDIUM",
	    },
	    "CO": {
	      "fillKey": "HIGH",
	    },
	    "DE": {
	      "fillKey": "LOW",
	    },
	    "GA": {
	      "fillKey": "MEDIUM",
	    }
	  },
	}
}