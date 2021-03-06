import Head from "next/head";
import Banner from "../components/Banner";
import ExpertConnect from "../components/ExpertConnect";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Offering from "../components/Offering";
import SubFooter from "../components/SubFooter";
import WeDo from "../components/WeDo";
import WhyUs from "../components/WhyUs";

export default function Home() {
    return (
        <div className="overflow-x-hidden">
            <Head>
                <title>Walnut</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Banner />
            <div className="px-5 lg:px-12">
                <WhyUs />
                <Offering />
                <WeDo />
                <ExpertConnect />
            </div>
            <Faq />
            <Footer />
            <SubFooter />
        </div>
    );
}
