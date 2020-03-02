# Roborock controller via socket API
---

## Clone project

`$ git clone https://github.com/elpsk/Roborock-Controller.git .`

## Install dependencies

The only one dependency needed is miio:

`"miio": "https://github.com/elpsk/miio.git"`

`$ npm install`

## Configuration

```
const robotIp = "192.168.1.180" // your device IP
const token = "47xxxxxxxxxxxxxxxxxxxxxxxx754959" // your TOKEN
```

## How to run

`$ node index.js`

### Demo output

```
Connected to MiioDevice {
  model=roborock.vacuum.s5,
  types=miio:vacuum, miio, vaccuum,
  capabilities=adjustable-fan-speed, fan-speed, spot-cleaning, autonomous-cleaning, cleaning-state, error-state, charging-state, battery-level, state
}

100

{
  fanSpeed: 60,
  cleanArea: 48.4475,
  cleanTime: 2459,
  in_cleaning: 0,
  filterWorkTime: 15617,
  sensorDirtyTime: 15507
}

{
  count: 445,
  days: [
    2020-03-01T16:59:25.000Z,
    2020-03-01T16:49:25.000Z,
    2020-03-01T15:35:55.000Z,
    2020-03-01T11:15:01.000Z,
    2020-02-29T17:55:35.000Z,
    2020-02-29T12:24:53.000Z,
    2020-02-29T11:15:01.000Z,
    2020-02-28T17:15:01.000Z,
    2020-02-27T22:08:33.000Z,
    2020-02-27T11:00:01.000Z,
    2020-02-26T11:00:01.000Z,
    2020-02-25T11:00:01.000Z,
    2020-02-24T14:16:29.000Z,
    2020-02-24T12:48:53.000Z,
    2020-02-24T10:29:42.000Z,
    2020-02-07T10:31:37.000Z,
    2019-12-20T14:36:42.000Z,
    2019-12-20T13:32:05.000Z,
    2019-12-13T18:45:31.000Z,
    2019-12-08T16:55:46.000Z
  ]
}

{
  hw_ver: 'Linux',
  fw_ver: '3.3.9_001886',
  ap: { ssid: 'MyWifi', bssid: '11:22:33:44:55:66', rssi: -50 },
  netif: {
    localIp: '192.168.1.180',
    mask: '255.255.255.0',
    gw: '192.168.1.254'
  },
  model: 'roborock.vacuum.s5',
  mac: '44:55:66:77:88:99',
  token: '1234567890xxxxxxxxxxx4531754959',
  life: 28513
}

{ 
  serial: 'R00123456789000' 
}

{
  day: 2020-03-01T11:15:01.000Z,
  history: [
    {
      start: 2020-03-01T11:15:01.000Z,
      end: 2020-03-01T12:05:43.000Z,
      duration: 3042,
      area: 47.63,
      complete: true
    }
  ]
}

```