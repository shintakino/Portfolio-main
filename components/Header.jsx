import Link from 'next/link';
import { Button } from './ui/button';

//Components
import Nav from './Nav';

const Header = () => {
  return (
  <header className='px-8 xl:py-12 text-white'>
    <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
      <Link href="/">
        <h1 className='text-4xl font-semibold'>
          Javier<span className='text-accent'>.</span>
        </h1>
      </Link>
      
      {/* Desktop Navagation and Hire me Navagation*/}
      <div className='hidden xl:flex items-center gap-8'>
        <Nav />
        <Link href='/contact'>
          <Button className='hover:text-accent '>Hire me</Button>
        </Link>
      </div>
      {/*Mobile nav */}
      <div className="xl:hidden">mobile nav</div>
    </div>
  </header>
  )
};

export default Header