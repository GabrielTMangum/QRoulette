import Link from 'next/link';

const Index = () => (
    <div>
        <Link href='/about' title ='About Page'>
            <a>About Page</a>
        </Link>
        <p>Hello Next.js</p>
        <h1>How are you?</h1>
    </div>
);

export default Index;