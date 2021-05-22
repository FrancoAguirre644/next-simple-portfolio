import Navbar from './Navbar';
import Header from './Header';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NProgress from 'nprogress';

const Layout = ({ children }) => {

    const router = useRouter();

    useEffect(() => {

        const handleRouteChange = url => {
            NProgress.start();
        }

        router.events.on('routeChangeStart', handleRouteChange);

        router.events.on('routeChangeComplete', () => NProgress.done());

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        }

    }, [])

    return (
        <>
            <Navbar />
            <div className="container py-4">
                {children}
            </div>
            <Header />
        </>
    )

}

export default Layout;