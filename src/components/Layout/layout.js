import Footer from './Footer/footer';
import Header from './Header/header';

function Layout({ children }) {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;
