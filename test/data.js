module.exports = {
  "invoice": {
    "number": "26072015-001",
    "date": "Sun Jul 26 2015",
    "dueDate": "Mon Aug 31 2015",
    "totalDue": [
      {
        "currency": "\u00a3",
        "value": 2160
      }
    ]
  },
  "from": {
    "name": "My Company",
    "number": "1234555",
    "vat": "132435",
    "address": [
      "1 House",
      "Wee Street",
      "Wee Town",
      "Wee Country",
      "Earth"
    ],
    "bankDetails": {
      "name": "My Bank",
      "address": [
        "1 Main Street",
        "Big Street",
        "Big City",
        "Big Country",
        "Earth"
      ],
      "ac": "123456",
      "sc": "12-34-56",
      "iban": "1234567-abc",
      "swift": "1234567-abc"
    }
  },
  "to": {
    "name": "Client Company",
    "number": "1234",
    "vat": "089786",
    "address": [
      "1 Infinite Loop",
      "Cupertino",
      "California",
      "United States",
      "Earth"
    ]
  },
  "services": [
    {
      "type": "Software Development",
      "rate": {
        "unit": "hour",
        "value": 30,
        "currency": "\u00a3"
      },
      "worked": [
        {
          "project": "Cool Project",
          "measurement": 8,
          "date": "Wed Jul 01 2015"
        },
        {
          "project": "Cool Project",
          "measurement": 8,
          "date": "Thu Jul 02 2015"
        },
        {
          "project": "Cool Project",
          "measurement": 8,
          "date": "Fri Jul 03 2015"
        }
      ],
      "billable": 720
    },
    {
      "type": "Consulting",
      "rate": {
        "unit": "hour",
        "value": 60,
        "currency": "\u00a3"
      },
      "worked": [
        {
          "project": "Secret Project",
          "measurement": 8,
          "date": "Mon Jul 06 2015"
        },
        {
          "project": "Secret Project",
          "measurement": 8,
          "date": "Tue Jul 07 2015"
        },
        {
          "project": "Secret Project",
          "measurement": 8,
          "date": "Wed Jul 08 2015"
        }
      ],
      "billable": 1440
    }
  ]
};