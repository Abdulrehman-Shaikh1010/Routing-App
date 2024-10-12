import Link from "next/link";
export default function Header(){
    return(
      <div>
        <h1>This is a Router Header page from <strong> AbdulRehman Shaikh</strong></h1>
        <ul>
          <li><Link href='About'>About</Link></li>
          <li><Link href='Navbar'>Navbar</Link></li>
          <li><Link href='Contact'>Contact</Link></li>
        </ul>
      </div>
    );
  }
  