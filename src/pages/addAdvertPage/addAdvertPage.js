/** @format */
import {
    Grid,
    Typography,
    Divider,
    Tooltip,
    TextField,
    MenuItem,
    Select,
    Button,
} from "@mui/material";
import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ImagesComponent from "../../components/imagesComponent";

const AddAdvertPage = () => {
    const [data, setData] = useState({
        subDetails: [
            { title: "İlan No", value: "" },
            { title: "İlan Tarihi", value: "" },
            { title: "Araç tipi", value: "" },
            { title: "Kimden", value: "sahibinden" },
        ],
        technicalProperties: [
            { title: "Araç Tipi", value: "" },
            { title: "Kasa Tipi / Kapı Sayısı", value: "" },
            { title: "Motor Tipi", value: "" },
            { title: "Üretim Yılı", value: "" },
        ],
        description: "",
        title: "",
        price: "",
        location: "",
        urls: [],
    });

    const handleSubDetailChange = (e) => {
        const updatedSubDetails = data.subDetails;
        const index = updatedSubDetails.findIndex(
            (item) => item.title === e.target.name
        );
        updatedSubDetails[index].value = e.target.value;
        setData({ ...data, subDetails: updatedSubDetails });
    };
    const handleTechnicalPropertiesChange = (e) => {
        const updatedTechnicalProperties = data.technicalProperties;
        const index = updatedTechnicalProperties.findIndex(
            (item) => item.title === e.target.name
        );
        updatedTechnicalProperties[index].value = e.target.value;
        setData({ ...data, technicalProperties: updatedTechnicalProperties });
    };
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const files = e.dataTransfer.files;

        console.log(files);

        const supportedTypes = ["image/jpeg", "image/png", "image/jpg"];
        for (const file of files) {
            const fileReader = new FileReader();
            fileReader.onload = (event) => {
                const base64Data = event.target.result;
                setData((prevData) => ({
                    ...prevData,
                    urls: [...prevData.urls, base64Data],
                }));
            };
            if (supportedTypes.includes(file.type)) {
                fileReader.readAsDataURL(file);
            }
        }
    };

    return (
        <Grid container>
            <Grid container sx={{ paddingTop: "5%" }}>
                <Grid
                    xs={6}
                    style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            height: "100%",
                            width: "100%",
                            opacity: 0.6,
                            display: data.urls.length > 0 ? "none" : "flex",
                            backgroundColor: "whitesmoke",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                        }}
                        onDrop={(e) => handleDrop(e)}
                        onDragOver={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                        onDragEnter={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                    >
                        <AddPhotoAlternateIcon sx={{ fontSize: "45px" }} />
                        <Typography
                            sx={{
                                color: "black",
                                opacity: 1,
                                fontSize: "24px",
                                fontWeight: "700",
                            }}
                        >
                            Resimleri buraya sürükleyin ve bırakın
                        </Typography>
                    </div>
                    <div
                        style={{
                            display: data.urls.length > 0 ? "flex" : "none",
                        }}
                    >
                        <ImagesComponent
                            urls={data.urls}
                            page="add"
                            setUrls={(value) =>
                                setData({ ...data, urls: value })
                            }
                        />
                    </div>
                </Grid>
                <Grid
                    xs={6}
                    sx={{
                        paddingLeft: "3%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                >
                    <TextField
                        value={data.title}
                        label="İlan Başlığı"
                        name="title"
                        sx={{ width: "60%" }}
                        onChange={(e) =>
                            setData({ ...data, title: e.target.value })
                        }
                    />
                    <NumericFormat
                        prefix={"₺"}
                        customInput={TextField}
                        value={data.price}
                        thousandSeparator={true}
                        onChange={(e) =>
                            setData({ ...data, price: e.target.value })
                        }
                        sx={{ width: "60%" }}
                        label="Fiyat"
                    />
                    <TextField
                        value={data.location}
                        label="Konum"
                        sx={{ width: "60%" }}
                        placeholder="İstanbul / Bahçelievler / Şirinevler Mah."
                        onChange={(e) =>
                            setData({ ...data, location: e.target.value })
                        }
                    />

                    <Divider />
                    {data.subDetails.map((det, index) => (
                        <Grid container style={{ marginTop: "2%" }}>
                            <TextField
                                name={det.title}
                                label={det.title}
                                sx={{
                                    display:
                                        det.title.includes("Araç tipi") ||
                                        det.title.includes("Kimden")
                                            ? "none"
                                            : "block",
                                }}
                                type={
                                    det.title.includes("Tarihi")
                                        ? "date"
                                        : "text"
                                }
                                onChange={(e) => handleSubDetailChange(e)}
                            />
                            <TextField
                                name={det.title}
                                label={det.title}
                                defaultValue="default"
                                sx={{
                                    display: det.title.includes("Araç tipi")
                                        ? "block"
                                        : "none",
                                }}
                                onChange={(e) => handleSubDetailChange(e)}
                                select
                            >
                                <MenuItem
                                    value="default"
                                    key="default"
                                    disabled
                                >
                                    <em>Araç Tipi Seçiniz</em>
                                </MenuItem>
                                <MenuItem value="Sedan">Sedan</MenuItem>
                                <MenuItem value="hatchback">Hatchback</MenuItem>
                                <MenuItem value="Kamyon">Kamyon</MenuItem>
                                <MenuItem value="Kamyonet">Kamyonet</MenuItem>
                                <MenuItem value="Motorsiklet">
                                    Motorsiklet
                                </MenuItem>
                            </TextField>
                            <Select
                                label="Kimden"
                                value={det.value}
                                sx={{
                                    display: det.title.includes("Kimden")
                                        ? "block"
                                        : "none",
                                }}
                            >
                                <MenuItem value="sahibinden">
                                    Sahibinden
                                </MenuItem>
                                <MenuItem value="galeriden">Galeriden</MenuItem>
                            </Select>
                        </Grid>
                    ))}
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        sx={{
                            width: "100%",
                            marginTop: "4%",
                        }}
                        label="Açıklama"
                        maxRows={10}
                        multiline
                        onBlur={(e) =>
                            setData({ ...data, description: e.target.value })
                        }
                    />
                </Grid>

                <Grid
                    item
                    xs={6}
                    sx={{
                        paddingLeft: "3%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        marginTop: "2.5%",
                    }}
                >
                    <Typography variant="h5">Teknik Özellikler</Typography>
                    <Grid container style={{ marginTop: "2%" }}>
                        {data.technicalProperties.map((det, index) => (
                            <Grid item xs={6} style={{ marginTop: "2%" }}>
                                <TextField
                                    style={{ width: "95%" }}
                                    name={det.title}
                                    label={det.title}
                                    type={"text"}
                                    onChange={(e) =>
                                        handleTechnicalPropertiesChange(e)
                                    }
                                />
                            </Grid>
                        ))}{" "}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                {" "}
                <Button
                    variant="contained"
                    onClick={() => console.log(data)}
                    sx={{
                        margin: "3% 0px 0px 45vw",
                        textTransform: "none",
                        fontSize: "30px",
                    }}
                >
                    {" "}
                    İlanı Kaydet
                </Button>
            </Grid>
        </Grid>
    );
};

export default AddAdvertPage;
