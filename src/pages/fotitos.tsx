import { SwipeCarousel } from "../components/gallery";

function Fotitos() {

    return (
        <div className="flex flex-col items-center justify-center h-screen" id="fotitos">
            <div className="w-full lg:max-w-4xl text-center">
                <div className="inline-block">
                    <div className="p-4 rounded-full bg-pink-100  w-1/6 justify-self-center mb-6">
                        <h1 className="text-pink-400">Fotitos</h1>
                    </div>
                    <p className="text-gray-400 mb-5">Fotitos de juegos porque la gente de internet esta bien loca y me da miedo, vere si puedo poner mas porque tengo limitado el espacio creo jsjsjs</p>
                </div>
                <SwipeCarousel />
            </div>
        </div>
    );

};

export default Fotitos;