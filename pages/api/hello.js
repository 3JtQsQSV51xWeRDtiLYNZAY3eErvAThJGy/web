// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import pool from "@/pages/config/db";
// import { User } from '../../models/User';
export default async function handler(req, res) {
  try {
    // const person = {
    //   firstName: "John",
    //   lastName: "Doe",
    //   id: 5566,
    // };
    
    // // Add a Method
    // person.name = function() {
    //   return this.firstName + " " + this.lastName;
    // };
    
    // const { id ,name, email} = req.query;
    // const [rows] = await pool.query("SELECT * FROM tbl_user_assignment WHERE assign_user_fk = 36 AND create_date >= '2024-05-05 08:51:29'");

    // const car = { body:rows,name:"sss"};
    // console.log(rows)
    // res.status(200).json(car);
    // const users = await User.findOne();
    res.status(200).json(users);
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
