import { useState } from "react";
// import Navbar from '../components/navbar/navbar';
import Hero from '../components/Hero/Hero';
// import Footer from '../components/Footer/Footer';
import Movies from '../components/Movies/Movies';
// import Counter from '../components/Counter';
import AddMovieForm from '../components/AddMovie/AddMovie';
import data from '../utils/constans/data';
import Button from '../components/UI/Button/Index';
import Media from '../components/UI/Media/Index';
import FormComponents from '../components/UI/Form/Index';
import Typography from '../components/UI/Typography/Index';

function Home() {

    // const [movies, setMovies] = useState(data);
    // const [movies] = useState(data);
    return(
        <div>
            {/* <Navbar /> */}
            <main>
                <Hero />
                {/* <Button variant="primary">Lihat</Button>
                <Button variant="secondary" size="sm">Lihat</Button>
                <Button variant="secondary" size="lg">Lihat</Button> */}
                {/* <Movies movies={movies} setMovies={setMovies} /> */}
                <Movies/>
                <Typography.Heading>Heading</Typography.Heading>
                <Typography.Paragraph>Ini paragraf panjaaaangggg.</Typography.Paragraph>
                <FormComponents.Form>
                <FormComponents.Label>Email</FormComponents.Label>
                <FormComponents.Input type="email" id="email" />
                </FormComponents.Form>
                <Media.Image src="https://i.pinimg.com/736x/ec/dd/89/ecdd8940a2cfce8f18e0c004dfb109a9.jpg" alt="Gambar" />
                {/* <AddMovieForm movies={movies} setMovies={setMovies} /> */}
                {/* <Counter /> */}
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default Home;