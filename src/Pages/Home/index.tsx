import NavBar from 'Components/NavBar'
import SobreSection from 'Components/SobreSection'
import TopSection from 'Components/TopSection'
import 'Pages/Home/style.css'

const Home = () => {



    return (
        <>
            <NavBar />
            <main>
                <TopSection />
                <SobreSection />
            </main>
        </>
    );
}

export default Home;