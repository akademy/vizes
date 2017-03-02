// solr: http://127.0.0.1:8983/solr/locations/select?indent=on&version=2.2&q=*%3A*&fq=&start=0&rows=10&fl=geo%3Alat%2Cgeo%3Along%2Cgeonames%3Aname%2Cdcterms%3Aidentifier-uri%3A&qt=standard&wt=standard&explainOther=&hl.fl=
var places = {
  "response": {
    "lst": {
      "-name": "responseHeader",
      "int": [
        {
          "-name": "status",
          "#text": "0"
        },
        {
          "-name": "QTime",
          "#text": "13"
        }
      ],
      "lst": {
        "-name": "params",
        "str": [
          { "-name": "explainOther" },
          {
            "-name": "fl",
            "#text": "geo:lat,geo:long,geonames:name,dcterms:identifier-uri:"
          },
          {
            "-name": "indent",
            "#text": "on"
          },
          {
            "-name": "start",
            "#text": "0"
          },
          {
            "-name": "q",
            "#text": "geo\\:lat:[* TO *]"
          },
          { "-name": "hl.fl" },
          {
            "-name": "qt",
            "#text": "standard"
          },
          {
            "-name": "wt",
            "#text": "standard"
          },
          { "-name": "fq" },
          {
            "-name": "version",
            "#text": "2.2"
          },
          {
            "-name": "rows",
            "#text": "5000"
          }
        ]
      }
    },
    "result": {
      "-name": "response",
      "-numFound": "4663",
      "-start": "0",
      "doc": [
        {
          "str": [
            {
              "-name": "dcterms:identifier-uri:",
              "#text": "uri:http://localhost/location/fd92ebe0-5001-4ae6-908f-3b29b3c9327e"
            },
            {
              "-name": "geo:lat",
              "#text": "51.05"
            },
            {
              "-name": "geo:long",
              "#text": "3.71667"
            },
            {
              "-name": "geonames:name",
              "#text": "Ghent, Flanders, Belgium"
            }
          ]
        },
        {
          "str": [
            {
              "-name": "dcterms:identifier-uri:",
              "#text": "uri:http://localhost/location/466fe88c-5304-453c-a127-6b6c908cf6e2"
            },
            {
              "-name": "geo:lat",
              "#text": "51.49635"
            },
            {
              "-name": "geo:long",
              "#text": "-0.11152"
            },
            {
              "-name": "geonames:name",
              "#text": "Lambeth, London, (Surrey) Greater London, England"
            }
          ]
        },
        {
          "str": [
            {
              "-name": "dcterms:identifier-uri:",
              "#text": "uri:http://localhost/location/5b71e883-718b-4181-97dd-615ef427c441"
            },
            {
              "-name": "geo:lat",
              "#text": "57.14369"
            },
            {
              "-name": "geo:long",
              "#text": "-2.09814"
            },
            {
              "-name": "geonames:name",
              "#text": "King's College, University of Aberdeen, Aberdeen, Aberdeenshire, Scotland"
            }
          ]
        },
        {
          "str": [
            {
              "-name": "dcterms:identifier-uri:",
              "#text": "uri:http://localhost/location/8846bd87-a14c-4665-919a-98bbb8e8bc96"
            },
            {
              "-name": "geo:lat",
              "#text": "52.07667"
            },
            {
              "-name": "geo:long",
              "#text": "4.29861"
            },
            {
              "-name": "geonames:name",
              "#text": "E Villa Hoekerburgi, The Hague, South Holland, (United Provinces) Netherlands"
            }
          ]
        },
        {
          "str": [
            {
              "-name": "dcterms:identifier-uri:",
              "#text": "uri:http://localhost/location/5e1fb83b-1b74-4f79-8bdb-5f90ae4e8d17"
            },
            {
              "-name": "geo:lat",
              "#text": "50.8"
            },
            {
              "-name": "geo:long",
              "#text": "-3.46667"
            },
            {
              "-name": "geonames:name",
              "#text": "Killerton, Devon, England"
            }
          ]
        },
        {
          "str": [
            {
              "-name": "dcterms:identifier-uri:",
              "#text": "uri:http://localhost/location/c6b01b2a-ea86-4c9f-9267-419a904f8fe2"
            },
            {
              "-name": "geo:lat",
              "#text": "37.32355"
            },
            {
              "-name": "geo:long",
              "#text": "26.54406"
            },
            {
              "-name": "geonames:name",
              "#text": "Pátmos, Notio Aigaio, Greece"
            }
          ]
        },
        {
          "str": [
            {
              "-name": "dcterms:identifier-uri:",
              "#text": "uri:http://localhost/location/08aec711-5a84-48be-93dc-8583223ea8b6"
            },
            {
              "-name": "geo:lat",
              "#text": "54.8951"
            },
            {
              "-name": "geo:long",
              "#text": "-2.9382"
            },
            {
              "-name": "geonames:name",
              "#text": "Carlisle, Cumbria, England"
            }
          ]
        },
        {
          "str": [
            {
              "-name": "dcterms:identifier-uri:",
              "#text": "uri:http://localhost/location/46294e35-4a57-4b22-9d4c-94757a2d8436"
            },
            {
              "-name": "geo:lat",
              "#text": "51.50853"
            },
            {
              "-name": "geo:long",
              "#text": "-0.12574"
            },
            {
              "-name": "geonames:name",
              "#text": "Guildhall Yard, Guildhall, London, England"
            }
          ]
        },
        {
          "str": [
            {
              "-name": "dcterms:identifier-uri:",
              "#text": "uri:http://localhost/location/3ef6fabe-c799-4a1d-b8ec-ba6f2bd99205"
            },
            {
              "-name": "geo:lat",
              "#text": "51.51279"
            },
            {
              "-name": "geo:long",
              "#text": "-0.09184"
            },
            {
              "-name": "geonames:name",
              "#text": "Ironmongers' Hall, London, England"
            }
          ]
        },
        {
          "str": [
            {
              "-name": "dcterms:identifier-uri:",
              "#text": "uri:http://localhost/location/449911c7-eaff-40b8-823a-e7338a693171"
            },
            {
              "-name": "geo:lat",
              "#text": "54.96209"
            },
            {
              "-name": "geo:long",
              "#text": "-1.60168"
            },
            {
              "-name": "geonames:name",
              "#text": "Gateshead, Tyne and Wear, England"
            }
          ]
        },
        {
          "str": [
            {
              "-name": "dcterms:identifier-uri:",
              "#text": "uri:http://localhost/location/cf3028d5-a952-41e8-bbe6-bec8c633702d"
            },
            {
              "-name": "geo:lat",
              "#text": "51.49635"
            },
            {
              "-name": "geo:long",
              "#text": "-0.11152"
            },
            {
              "-name": "geonames:name",
              "#text": "East Place, Lambeth, Greater London, England"
            }
          ]
        },
        {
          "str": [
            {
              "-name": "dcterms:identifier-uri:",
              "#text": "uri:http://localhost/location/afc7de8c-0c3b-4af0-bbbe-985b7b98724b"
            },
            {
              "-name": "geo:lat",
              "#text": "51.50853"
            },
            {
              "-name": "geo:long",
              "#text": "-0.12574"
            },
            {
              "-name": "geonames:name",
              "#text": "Chancery Lane 100, London, England"
            }
          ]
        },
        {
          "str": [
            {
              "-name": "dcterms:identifier-uri:",
              "#text": "uri:http://localhost/location/828e35c1-c635-43ec-9308-0cbd0a80d4b9"
            },
            {
              "-name": "geo:lat",
              "#text": "51.37795"
            },
            {
              "-name": "geo:long",
              "#text": "-2.35907"
            },
            {
              "-name": "geonames:name",
              "#text": "Widcombe Crescent 14, Bath, Somerset, England"
            }
          ]
        },
        {
          "str": [
            {
              "-name": "dcterms:identifier-uri:",
              "#text": "uri:http://localhost/location/516200bc-5495-4979-8966-b0977834e4c6"
            },
            {
              "-name": "geo:lat",
              "#text": "55.07196"
            },
            {
              "-name": "geo:long",
              "#text": "-1.52609"
            },
            {
              "-name": "geonames:name",
              "#text": "Seaton Delaval, Northumberland, England"
            }
          ]
        },
        {
          "str": [
            {
              "-name": "dcterms:identifier-uri:",
              "#text": "uri:http://localhost/location/2d743707-44d8-4099-8142-4f69facf8e81"
            },
            {
              "-name": "geo:lat",
              "#text": "54.97328"
            },
            {
              "-name": "geo:long",
              "#text": "-1.61396"
            },
            {
              "-name": "geonames:name",
              "#text": "Newcastle upon Tyne, Northumberland, England"
            }
          ]
        },
        {
          "str": [
            {
              "-name": "dcterms:identifier-uri:",
              "#text": "uri:http://localhost/location/fda228fb-5bd9-45e0-822d-01a99ec820c6"
            },
            {
              "-name": "geo:lat",
              "#text": "51.50853"
            },
            {
              "-name": "geo:long",
              "#text": "-0.12574"
            },
            {
              "-name": "geonames:name",
              "#text": "Wills Coffee House, London, England"
            }
          ]
        },
        {
          "str": [
            {
              "-name": "dcterms:identifier-uri:",
              "#text": "uri:http://localhost/location/3621bb23-12d6-4929-aa74-758ed8891e60"
            },
            {
              "-name": "geo:lat",
              "#text": "48.8555"
            },
            {
              "-name": "geo:long",
              "#text": "16.0488"
            },
            {
              "-name": "geonames:name",
              "#text": "Znojmo, South Moravian, Czech Republic"
            }
          ]
        },
        {
          "str": [
            {
              "-name": "dcterms:identifier-uri:",
              "#text": "uri:http://localhost/location/dd19ba51-0b36-4053-a7b2-35ca2b1e09ef"
            },
            {
              "-name": "geo:lat",
              "#text": "50.04066"
            },
            {
              "-name": "geo:long",
              "#text": "20.22257"
            },
            {
              "-name": "geonames:name",
              "#text": "Niepolomice, Lesser Poland Voivodeship, Poland"
            }
          ]
        },
        {
          "str": [
            {
              "-name": "dcterms:identifier-uri:",
              "#text": "uri:http://localhost/location/9b6863db-ef16-4856-af1f-71558c5454bc"
            },
            {
              "-name": "geo:lat",
              "#text": "49.60669"
            },
            {
              "-name": "geo:long",
              "#text": "8.18486"
            },
            {
              "-name": "geonames:name",
              "#text": "Bockenheim, Rheinland-Pfalz, Germany"
            }
          ]
        }
      ]
    }
  }
};
