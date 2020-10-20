import React, { useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected"; 

am4core.useTheme(am4themes_animated);

function App(props) {
  const chart = useRef(null);

  useEffect(() => {
    let x = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree)
    var networkSeries = x.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
    networkSeries.dataFields.linkWith = "linkWith";
    networkSeries.dataFields.name = "name";
    networkSeries.dataFields.id = "name";
    networkSeries.dataFields.value = "value";
    networkSeries.dataFields.children = "children";
  
    networkSeries.nodes.template.label.text = "{name}"
    networkSeries.fontSize = 8;
    networkSeries.linkWithStrength = 0;
  
    var nodeTemplate = networkSeries.nodes.template;
    nodeTemplate.tooltipText = "{name}";
    nodeTemplate.fillOpacity = 1;
    nodeTemplate.label.hideOversized = true;
    nodeTemplate.label.truncate = true;
  
    var linkTemplate = networkSeries.links.template;
    linkTemplate.strokeWidth = 1;
    var linkHoverState = linkTemplate.states.create("hover");
    linkHoverState.properties.strokeOpacity = 1;
    linkHoverState.properties.strokeWidth = 2;
    
    nodeTemplate.events.on("over", function (event) {
        var dataItem = event.target.dataItem;
        dataItem.childLinks.each(function (link) {
            link.isHover = true;
        })
    })
  
    nodeTemplate.events.on("out", function (event) {
        var dataItem = event.target.dataItem;
        dataItem.childLinks.each(function (link) {
            link.isHover = false;
        })
    })
    
    networkSeries.data = [  
      {  "name" : "Student Name",
          "children" : [{
            "name":"Phoebe",
            "value":102,
            "linkWith":[  
              "Gunther"
            ],
            "children":[  
              {  
                  "name":"David",
                  "children":[{
                    "name" : "Sue", "value": 3
                  },{
                    "name" : "Park", "value" : 2
                  },{
                    "name" : "Sun", "value" : 1
                  },{
                    "name" : "Eme", "value" : 4
                  },{
                    "name" : "Dan", 
                    "children" : [{
                      "name" : "Amu", "value" : 1
                    },{
                      "name" : "guna", "value" : 3
                    },{
                      "name" : "yeseyse", "value" : 1
                    }]
                  }]
              },
              {  
                  "name":"Roger",
                  "value":1
              },
              {  
                  "name":"Duncan",
                  "value":1
              },
              {  
                  "name":"Rob Dohnen",
                  "value":2
              },
              {  
                  "name":"Ryan",
                  "children":[{
                    "name": "Ryu", "value" : 1
                  },{
                    "name": "Bak", "value" : 2
                  },{
                    "name" : "Shin", "value" : 2
                  }]
              },
              {  
                  "name":"Malcom",
                  "value":1
              },
              {  
                  "name":"Robert",
                  "value":1
              },
              {  
                  "name":"Sergei",
                  "value":1
              },
              {  
                  "name":"Vince",
                  "value":2
              },
              {  
                  "name":"Jason",
                  "value":1
              },
              {  
                  "name":"Rick",
                  "value":2
              },
              {  
                  "name":"Gary",
                  "value":7
              },
              {  
                  "name":"Jake",
                  "value":2
              },
              {  
                  "name":"Eric",
                  "value":3
              },
              {  
                  "name":"Mike",
                  "value":18
              }
            ]
        },
        {  
            "name":"Monica",
            "value":204,
            "linkWith":[  
              "Rachel",
              "Chandler",
              "Ross",
              "Joey",
              "Phoebe"
            ],
            "children":[  
              {  
                  "name":"Paul the wine guy",
                  "value":1
              },
              {  
                  "name":"Mr Geller",
                  "children" : [{
                    "name" : "Dona", "value" : 1
                  },{
                    "name" : "Yelle", "value" : 2
                  },{
                    "name" : "Hani", "value" : 1
                  },{
                    "name" : "Dali", "value" : 4
                  }]
              },
              {  
                  "name":"Mrs Geller",
                  "children" : [{
                    "name" : "Mr G", "value" : 4
                  },{
                    "name" : "Elle", 
                    "children" : [{
                      "name" : "Amu", "value" : 1
                    },{
                      "name" : "guna", "value" : 3
                    },{
                      "name" : "yeseyse", "value" : 1
                    }]
                  },{
                    "name" : "Liila", "value" : 2
                  },{
                    "name" : "Dyna", "value" : 2
                  },{
                    "name" : "Hun", "value" : 1
                  }]
              },
              {  
                  "name":"Aunt Lilian",
                  "value":2
              },
              {  
                  "name":"Nana",
                  "value":1
              },
              {  
                  "name":"Young Ethan",
                  "value":5
              },
              {  
                  "name":"Ben",
                  "value":9
              },
              {  
                  "name":"Fun Bobby",
                  "value":3
              },
              {  
                  "name":"Richard",
                  "children" : [{
                    "name" : "Rich", "value" : 2
                  },{
                    "name" : "Pool", 
                    "children" : [{
                      "name" : "Amu", "value" : 1
                    },{
                      "name" : "guna", "value" : 3
                    },{
                      "name" : "yeseyse", "value" : 1
                    }]
                  },{
                    "name" : "Such", "value" : 3
                  },{
                    "name" : "Jeis", "value" : 2
                  },{
                    "name" : "Seyoung", "value" : 1
                  },{
                    "name" : "Nada", "value" : 1
                  }]
              },
              {  
                  "name":"Mrs Green",
                  "value":4
              },
              {  
                  "name":"Paolo2",
                  "value":1
              },
              {  
                  "name":"Pete",
                  "value":10
              },
              {  
                  "name":"Chip",
                  "value":1
              },
              {  
                  "name":"Timothy (Burke)",
                  "value":1
              },
              {  
                  "name":"Emily",
                  "value":17
              },
              {  
                  "name":"Dr. Roger",
                  "value":3
              }
            ]
        },
        {  
            "name":"Ross",
            "value":216,
            "linkWith":[  
              "Joey",
              "Phoebe",
              "Mrs Geller",
              "Aunt Lilian",
              "Mrs Bing",
              "Ben",
              "Mrs Green",
              "Emily"
            ],
            "children":[  
              {  
                  "name":"Carol",
                  "children" : [{
                    "name" : "Cla", "value" : 1
                  },{
                    "name" : "Wa", "value" : 1
                  },{
                    "name" : "Dayu", "value" : 3
                  },{
                    "name" : "Enguang", "value" : 3
                  },{
                    "name" : "Ill", "value" : 2
                  }]
              },
              {  
                  "name":"Celia",
                  "value":2
              },
              {  
                  "name":"Julie",
                  "value":6
              },
              {  
                  "name":"Chloe",
                  "value":1
              },
              {  
                  "name":"Bonnie",
                  "value":4
              },
              {  
                  "name":"Messy Girl (Cheryl)",
                  "value":5
              },
              {  
                  "name":"Jill",
                  "value":1
              },
              {  
                  "name":"Elizabeth",
                  "children" : [{
                    "name" : "SilverLight",
                    "children" : [{
                      "name" : "Amu", "value" : 1
                    },{
                      "name" : "guna", "value" : 3
                    },{
                      "name" : "yeseyse", "value" : 1
                    }]
                  },{
                    "name" : "Hynsik", "value" : 2
                  },{
                    "name" : "IllHun", "value" : 1
                  }]
              },
              {  
                  "name":"Aunt Millie",
                  "value":2
              },
              {  
                  "name":"Mona",
                  "children" : [{
                    "name" : "SungJae",
                    "children" : [{
                      "name" : "Amu", "value" : 1
                    },{
                      "name" : "guna", "value" : 3
                    },{
                      "name" : "yeseyse", "value" : 2
                    }]
                  },{
                    "name" : "Dongun", "value" : 2
                  },{
                    "name" : "MinHyuk", "value" : 1
                  },{
                    "name" : "Changsub", "value" : 2
                  }]
              },
              {  
                  "name":"Emma",
                  "value":7
              },
              {  
                  "name":"Charlie",
                  "children" : [{
                    "name" : "Christin",
                    "children" : [{
                      "name" : "Amu", "value" : 1
                    },{
                      "name" : "guna", "value" : 3
                    },{
                      "name" : "yeseyse", "value" : 1
                    }]
                  },{
                    "name" : "ShaSha", "value" : 3
                  },{
                    "name" : "Rari", "value" : 2
                  },{
                    "name" : "Aki", "value" : 2
                  },{
                    "name" : "Classig", "value" : 1
                  },{
                    "name" : "Nutela", "value" : 4
                  }]
              }
            ]
        },
        {  
            "name":"Chandler",
            "value":167,
            "linkWith":[  
              "Joey",
              "Phoebe"
            ],
            "children":[  
              {  
                  "name":"Aurora",
                  "value":2
              },
              {  
                  "name":"Jill Goodacre",
                  "value":1
              },
              {  
                  "name":"Janice",
                  "children" : [{
                    "name" : "ShaSha", "value" : 3
                  },{
                    "name" : "Rari", "value" : 2
                  },{
                    "name" : "Aki", "value" : 2
                  },{
                    "name" : "Classig", "value" : 1
                  },{
                    "name" : "Nutela", "value" : 4
                  }]
              },
              {  
                  "name":"Mrs Bing",
                  "value":6
              },
              {  
                  "name":"Nina",
                  "value":1
              },
              {  
                  "name":"Susie",
                  "children" : [{
                    "name" : "ShaSha", "value" : 3
                  },{
                    "name" : "Rari", "value" : 2
                  }]
              },
              {  
                  "name":"Mary Theresa",
                  "value":1
              },
              {  
                  "name":"Ginger",
                  "value":2
              },
              {  
                  "name":"Joanna",
                  "value":5
              },
              {  
                  "name":"Kathy",
                  "children" : [{
                    "name" : "Rari", "value" : 2
                  },{
                    "name" : "Aki", "value" : 2
                  },{
                    "name" : "Classig", "value" : 1
                  },{
                    "name" : "Nutela", "value" : 4
                  }]
              },
              {  
                  "name":"Mr Bing",
                  "value":1
              }
            ]
        },
        {  
            "name":"Rachel",
            "value":158,
            "linkWith":[  
              "Chandler",
              "Ross",
              "Joey",
              "Phoebe",
              "Mr Geller",
              "Mrs Geller"
            ],
            "children":[  
              {  
                  "name":"Paolo",
                  "value":5
              },
              {  
                  "name":"Barry",
                  "value":1
              },
              {  
                  "name":"Dr Green",
                  "value":3
              },
              {  
                  "name":"Mark3",
                  "value":1
              },
              {  
                  "name":"Josh",
                  "value":2
              },
              {  
                  "name":"Gunther",
                  "value":2
              },
              {  
                  "name":"Joshua",
                  "children" : [{
                    "name" : "Christin", "value" : 1
                  },{
                    "name" : "ShaSha", "value" : 1
                  },{
                    "name" : "Classig", "value" : 1
                  }]
              },
              {  
                  "name":"Danny",
                  "value":1
              },
              {  
                  "name":"Mr. Zelner",
                  "value":1
              },
              {  
                  "name":"Paul Stevens",
                  "value":3
              },
              {  
                  "name":"Tag",
                  "children" : [{
                    "name" : "Rari", "value" : 2
                  },{
                    "name" : "Aki", "value" : 2
                  }]
              },
              {  
                  "name":"Melissa",
                  "value":1
              },
              {  
                  "name":"Gavin",
                  "value":2
              }
            ]
        },
        {  
            "name":"Joey",
            "value":88,
            "linkWith":[  
              "Phoebe",
              "Janice",
              "Mrs Green",
              "Kathy",
              "Emily",
              "Charlie"
            ],
            "children":[  
              {  
                  "name":"Lorraine",
                  "value":2
              },
              {  
                  "name":"Melanie",
                  "value":2
              },
              {  
                  "name":"Erica",
                  "value":2
              },
              {  
                  "name":"Kate",
                  "children" : [{
                    "name" : "Christin", "value" : 1
                  },{
                    "name" : "ShaSha", "value" : 1
                  },{
                    "name" : "Rari", "value" : 1
                  },{
                    "name" : "Aki", "value" : 1
                  }]
              },
              {  
                  "name":"Lauren",
                  "value":2
              },
              {  
                  "name":"Estelle",
                  "value":1
              },
              {  
                  "name":"Katie",
                  "value":2
              },
              {  
                  "name":"Janine",
                  "children" : [{
                    "name" : "Christin",
                    "children" : [{
                      "name" : "Amu", "value" : 1
                    },{
                      "name" : "guna", "value" : 3
                    },{
                      "name" : "yeseyse", "value" : 1
                    }]
                  },{
                    "name" : "Nutela", "value" : 4
                  }]
              },
              {  
                  "name":"Erin",
                  "value":1
              },
              {  
                  "name":"Cecilia",
                  "value":3
              }
            ]
        
          }]
        }
    ];
      return () => {
        x.dispose()
      };
    }, [])


  return (
    <div id="chartdiv" style={{ width: "100%", height: "1000px" }}></div>
  );
}
export default App;

