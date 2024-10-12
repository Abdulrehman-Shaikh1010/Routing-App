import Link from "next/link";
export default function About(){
    return(
      <div>
        <h1>This is a Router About page from <strong> AbdulRehman Shaikh</strong></h1>
        <ul>
          <li><Link href='Header'>Header</Link></li>
          <li><Link href='Navbar'>Navbar</Link></li>
          <li><Link href='Contact'>Contact</Link></li>
        </ul>
      </div>
    );
  }
  