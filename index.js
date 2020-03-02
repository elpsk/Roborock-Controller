const miio = require('miio');

const devices = miio.devices({
  cacheTime: 300
});

/**
 * The Roborock Vacuum IP address
 */
const robotIp = "192.168.1.123"

/**
 * The 32 bit authentication token
 */
const token = "123456789012345678901234567890"

//
// You can add more methods on the forked library: 
// https://github.com/elpsk/miio
//

devices.on('available', device => {

	/**
	 * Connect to device and start sending socket commands
	 */
	miio.device({ address: robotIp, token: token })
	.then(device => {
		console.log('Connected to', device)

		/**
		 * Find me function
		 */
		device.find()
		.then()
		.catch( err => {
			console.log( err )
		})

		/**
		 * Map total size is 52000x52000
		 */
		device.goToTarget( 25000, 25000)
		.then()
		.catch( err => {
			console.log( err )
		})


		// --------------------------------------------------------
		// Various explicit functions:
		// --------------------------------------------------------

		const props = [
			'fan_power', 
			'clean_area',
			'clean_time',
			'in_cleaning',
			'filterWorkTime', 
			'sensorDirtyTime'
		]
		device.loadProperties(props)
		.then(result => {
			console.log(result);
		})

		device.batteryLevel()
		.then(level => {
		  console.log(level);
		});

		device.getHistory()
		.then(result => {
		  console.log(result);

		  device.getHistoryForDay(result.days[3])
		  .then( dayResult => {
			  console.log(dayResult)
		  })
		});

		device.getSerial()
		.then(result => {
		  console.log( result );
		});

		device.getInfo()
		.then(result => {
		  console.log( result );
		});

		device.getWifi()
		.then(result => {
		  console.log( result );
		});

		device.getNetwork()
		.then(result => {
		  console.log( result );
		});

		device.getToken()
		.then(result => {
		  console.log( result );
		});

		device.getModel()
		.then(result => {
		  console.log( result );
		});

		device.getWifiStatus()
		.then(result => {
		  console.log( result );
		});

		device.getConsumable()
		.then(result => {
		  console.log( result );
		});

		device.getStatus()
		.then(result => {
		  console.log( result );
		});

	})
	.catch(err => {
		
	});
});
