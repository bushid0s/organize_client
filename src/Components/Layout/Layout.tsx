import Footer from '../Footer/Footer.tsx';
import Navbar from '../Navbar/Navbar.tsx';

export default function Layout(props) {
    const { children } = props;
    return (
        <div className='page__container'>
            <Navbar />
            <div className='container my-2'>{children}</div>
            <Footer />
        </div>
    );
}
