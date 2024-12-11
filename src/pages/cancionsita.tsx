import { useEffect, useState } from "react";
import BaileGif from "../assets/gif/baile.gif";
import { FaArrowRight } from "react-icons/fa6";
import { Modal } from "../components/modal";
import { Document, Page, pdfjs } from "react-pdf";
import { getMusicForToday, getPdfForToday, pdfRoutes } from "../constants/all-pdfs";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();


function Cancionsita() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [numPages, setNumPages] = useState(0);
    const [pdfPath, setPdfPath] = useState<string | null>('');
    const [song, setSong] = useState<string>('');
    const [allPdfs, setAllPdfs] = useState<string[]>([]);
    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    useEffect(() => {
        const getFormattedDate = () => {
            const date = new Date();
            const months = [
                "enero",
                "febrero",
                "marzo",
                "abril",
                "mayo",
                "junio",
                "julio",
                "agosto",
                "septiembre",
                "octubre",
                "noviembre",
                "diciembre",
            ];

            const day = date.getDate();
            const month = months[date.getMonth()];
            const year = date.getFullYear();

            return `Mensajito del día ${day} de ${month} de ${year}`;
        };

        setMessage(getFormattedDate());
    }, []);

    useEffect(() => {
        const todayPdf = getPdfForToday();
        const todaySong = getMusicForToday();
        setSong(todaySong);

        if (todayPdf === "no") {
            setPdfPath(null);
            const allPdfPaths = pdfRoutes.map((pdf) => pdf.path);
            setAllPdfs(allPdfPaths);
        } else {
            setPdfPath(todayPdf);
            setAllPdfs([]); 
        }
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen" id="cancion">
            <div className="w-full lg:max-w-4xl text-center">
                <div className="inline-block">
                    <button className="bg-pink-100 text-pink-400 font-semibold p-2 rounded-full flex justify-self-center" onClick={() => setIsModalOpen(true)}>{message}<FaArrowRight color="#f472b6" size={22} className="pl-2" /></button>
                    <img src={BaileGif} alt="Baile" className="w-1/2 justify-self-center mt-4 rounded-2xl" />
                    <iframe src="https://open.spotify.com/embed/track/2LwsunYgfRoqyIsNtgOCQx?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style={{ marginTop: 20 }}></iframe>
                </div>
            </div>
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="overflow-y-auto" style={{ maxHeight: "70vh", maxWidth: "100vw" }}>
                    {pdfPath ? (
                        <>
                            <Document file={pdfPath} onLoadSuccess={onDocumentLoadSuccess}>
                                {Array.from(new Array(numPages), (index) => (
                                    <Page
                                        key={`page_${index + 1}`}
                                        pageNumber={index + 1}
                                        scale={0.44}
                                        className="justify-items-center"
                                    />
                                ))}
                            </Document>
                        </>
                    ) : (
                        <div className="flex flex-col gap-2">
                            {allPdfs.map((path, index) => (
                                <a
                                    key={index}
                                    href={path}
                                    download
                                    className="text-blue-500 underline"
                                >
                                    Descargar mensaje {index + 1}
                                </a>
                            ))}
                        </div>
                    )}
                    <iframe
                        src={`https://open.spotify.com/embed/track/${song}?utm_source=generator`}
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        style={{ marginTop: 20 }}
                    ></iframe>
                </div>
                <button
                    className="px-4 py-2 mt-2 bg-pink-200 text-pink-400 rounded"
                    onClick={() => setIsModalOpen(false)}
                >
                    Cerrar
                </button>
            </Modal>
        </div>
    );

};

export default Cancionsita;