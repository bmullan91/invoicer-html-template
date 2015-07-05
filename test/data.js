module.exports = {
  "invoice": {
    "number": "1234",
    "date": "Sat, 04 Jul 2015 14:48:35 GMT",
    "dueDate": "Thu, 30 Jul 2015 23:00:00 GMT",
    "totalDue": [
      {
        "currency": "£",
        "value": 2640
      }
    ]
  },
  "from": {
    "name": "My Super Company",
    "number": "00112233",
    "address": [
      "Number 1",
      "Down the lane",
      "Over the Bridge",
      "Wee Town",
      "Earth"
    ],
    "bankDetails": {
      "name": "Big Bank",
      "address": [
        "1 Wall Street",
        "New York",
        "USA",
        " ",
        " "
      ],
      "ac": "99999999999",
      "sc": "11-22-33",
      "iban": "BIGBANK9999999999112233",
      "swift": "BIGBANK9999999999112233"
    }
  },
  "to": {
    "name": "Client Company",
    "number": "78659433",
    "address": [
      "32 Grassy Lane",
      "London",
      "WQO 4R56",
      "UK",
      "Earth"
    ]
  },
  "services": [
    {
      "type": "Software Development & Consulting",
      "rate": {
        "unit": "hour",
        "value": 30,
        "currency": "£"
      },
      "worked": [
        {
          "project": "cool project",
          "measurement": 8,
          "date": "Wed, 01 Jul 2015 23:00:00 GMT"
        },
        {
          "project": "cool project",
          "measurement": 8,
          "date": "Thu, 02 Jul 2015 23:00:00 GMT"
        },
        {
          "project": "cool project",
          "measurement": 8,
          "date": "Fri, 03 Jul 2015 23:00:00 GMT"
        },
        {
          "project": "cool project",
          "measurement": 8,
          "date": "Mon, 06 Jul 2015 23:00:00 GMT"
        },
        {
          "project": "cool project",
          "measurement": 8,
          "date": "Tue, 07 Jul 2015 23:00:00 GMT"
        }
      ],
      "billable": 1200
    },
    {
      "type": "Design & Architecture",
      "rate": {
        "unit": "hour",
        "value": 60,
        "currency": "£"
      },
      "worked": [
        {
          "project": "cool project",
          "measurement": 8,
          "date": "Wed, 08 Jul 2015 23:00:00 GMT"
        },
        {
          "project": "cool project",
          "measurement": 8,
          "date": "Thu, 09 Jul 2015 23:00:00 GMT"
        },
        {
          "project": "cool project",
          "measurement": 8,
          "date": "Fri, 10 Jul 2015 23:00:00 GMT"
        }
      ],
      "billable": 1440
    }
  ]
};