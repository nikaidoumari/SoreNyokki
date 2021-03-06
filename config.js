/* 
 * Application configuration file.
 * ===============================
 * File name : config.js
 * Author    : Hayato Doi
 * License   : MIT
 * ===============================
 *
 * -------------------------------
 * @hoge
 * -------------------------------
 *
 * Copyright (c) 2017, Hayato Doi
 * */

module.exports = {
	SERVER : {
		PORT : 3000,
		ROOT : "/api",
		SESSION_SECRET : "60d0d99346f0dccb3310fc1fc99bea89e85bf79b77341dd618fdb6e2c6979a33",
	},
	USER : {
		ADMIN_PASSWORD : "admin",
		GUEST_PASSWORD : "guest",
	},
	SLACK : {
		// A page for acquiring token https://api.slack.com/custom-integrations/legacy-tokens
		TOKEN : "xoxp-102447702628-102372103170-169280040087-dce7cde80d9a29d0d0dd27a6d32f7387",
	},
	MAIL : {
		// Student id is assigned to (?).
		FORMAT : "b(?)@planet.kanazawa-it.ac.jp",
	},

}
