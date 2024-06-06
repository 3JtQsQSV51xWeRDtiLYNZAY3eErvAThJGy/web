import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState ,useReducer } from 'react';
const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';

export default function Home() {
  useEffect(()=>{
    console.log("data")
    // fetchData()
  },[])
  // async function fetchData() {
  //   const users = await User.findAll();
  //   // const response = await fetch('http://localhost:3000/api/hello');
  //   // const data = await response.json();
  //   console.log(users)
  // }

  return (
    <>
<table style={{ width: '100%' }}>
      <thead >
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      {/* <tbody>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </tbody> */}
    </table>
    <div className="bo">
  <h2>London</h2>
  <p>London is the capital city of England.</p>
  <p>London has over 13 million inhabitants.</p>
</div>
    </>
    
  );
}
