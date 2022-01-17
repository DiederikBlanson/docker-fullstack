import express from 'express'
import mysql from 'mysql'
const router = express.Router()

const connection = mysql.createPool({
	connectionLimit: 10,
	host: process.env.MYSQL_HOST || 'localhost',
	user: process.env.MYSQL_USER || 'root',
	password: process.env.MYSQL_PASSWORD || 'password',
	database: process.env.MYSQL_DATABASE || 'test'
})

router.get('/', (req, res) => {
	connection.query('SELECT * FROM Student' , (err, rows) => {
		if(err){ 
            res.json({
				success: false,
				err
			})
		} else {
			res.json({
				success: true,
				rows
			})
		}
	});
});

module.exports = router