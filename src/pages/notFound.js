/** @format */

const NotFound = () => {
    return (
        <div
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                display: "flex",
                mt: "10%",
                gap: 10,
            }}
        >
            <h1 style={{ gap: 1, display: "flex" }}>
                Aradığınız sayfa bulunamadı veya bu sayfayı görmeye yetkiniz
                yok.{"\t"}
            </h1>
            <h1>
                {" "}
                <a href="/">Anasayfaya git</a>
            </h1>
        </div>
    );
};

export default NotFound;
