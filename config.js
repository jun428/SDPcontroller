module.exports = {
	// print debug statements
	debug: true,
  
	serverPort: 18000,
	maxConnections: 100,
  
	// milliseconds, 0 indicates no timeout
	// this is controller's way of noticing a lost connection
	socketTimeout: 30000,
  
	// false indicates the server should disconnect
	// after a successful credential update
	keepClientsConnected: true,
  
	// allow legacy access request type
	// Legacy access request means the SPA packet specifies
	// the port to open along with detailed NAT instructions
	// if applicable. This mode is not secure because the
	// client can be NAT'ed to anywhere it requests if NAT
	// is enabled.
	allowLegacyAccessRequests: false,
  
	// can create these using ./setup/create-certs.sh
	serverCert: "./certs/server.crt",
	serverKey: "./certs/server.key",
  
	// to be prompted for a password, set this field
	// to a null string using '' (that's 2 single quotes
	// with no spaces between)
	serverKeyPassword: "homeSDP",
	serverKeyPasswordRequired: true,
  
	// can create these using ./setup/create-certs.sh
	caCert: "./certs/ca.crt",
	caKey: "./certs/ca.key",
  
	// to be prompted for a password, delete this field or
	// set it to a null string using '' (that's 2 single
	// quotes with no spaces between)
	caKeyPassword: "homeSDP",
	caKeyPasswordRequired: true,
  
	// how many days new certificates should be good for
	daysToExpiration: 31,
  
	// SPA encryption key length in bytes, range is 64 to 256
	encryptionKeyLen: 256,
  
	// SPA HMAC key length in bytes, range is 4 to 128
	hmacKeyLen: 128,
  
	// database options
	dbHost: "127.0.0.1",
	dbUser: "sdp_controller",
	dbPasswordRequired: true,
  
	// to be prompted for a password, delete this field or
	// set it to a null string using '' (that's 2 single
	// quotes with no spaces between)
	//'dbPassword': 'password',
	dbPassword: "sdp1234!@A",
	dbName: "sdp",
  
	// if any of these are exceeded, the controller
	// disconnects from the client
	maxDataTransmitTries: 3,
	maxCredentialMakerTries: 3,
	maxBadMessages: 3,
  
	// retry interval (milliseconds) for database failures
	databaseRetryInterval: 5000,
	databaseMaxRetries: 5,
  
	// interval (milliseconds) to check database for changes
	// that require sending updates to gateways
	databaseMonitorInterval: 3000,
  };
  
