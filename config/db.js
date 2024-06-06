// lib/db.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost', // ปรับตามการตั้งค่าของคุณ
  user: 'root', // ปรับตามการตั้งค่าของคุณ
  password: '', // ปรับตามการตั้งค่าของคุณ
  database: 'hh' // ปรับตามการตั้งค่าของคุณ
});

export default pool;
