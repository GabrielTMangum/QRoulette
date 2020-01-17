import Link from 'next/link';

export default function About() {
    return (
      <div>
        <p>This is the about page</p>
        <Link href='/index' title='index page'>
         <a>Index Page</a>
        </Link>
      </div>
    );
  }