/** @format */
import { Button, Divider, Grid, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderDetails from "./headerDetails";

import React from "react";
const AdvertPage = () => {
    const { state } = useLocation();
    const { url, title } = state;
    const [detail, setDetail] = useState({
        subDetails: [
            { title: "İlan No", value: "1525253" },
            { title: "İlan Tarihi", value: "04 mart 2024" },
            { title: "Araç tipi", value: "Panelvan" },
            { title: "Kimden", value: "Cüneyt'ten" },
        ],
        technicalProperties: [
            { title: "Araç Tipi", value: "SUV / Arazi aracı / I Segment" },
            { title: "Kasa Tipi / Kapı Sayısı", value: "SUV / 5 Kapı" },
            { title: "Motor Tipi", value: "	Dizel / 6 silindir" },
            { title: "Üretim Yılı (İlk / Son)", value: "2013 / 2018" },
        ],
        description:
            "Bu fiyata piyasanın en uygun  en temiz aracı,Absürd  teklifler etmeyin lütfen Muayene 2025 mart ayına kadar vardır.Ses sistemi mevcuttur.Şimdiden hayırlı olsun",
    });
    const [clickedButton, setClickedButton] = useState(0);

    return (
        <Grid container style={{ padding: "5%" }}>
            <HeaderDetails url={url} title={title} detail={detail} />
            <Grid xs={12} sx={{ marginTop: "4%" }}>
                <Button
                    variant="contained"
                    onClick={() => setClickedButton(0)}
                    sx={{
                        marginLeft: "1%",
                        textTransform: "none",
                        fontWeight: "700",
                        boxShadow: 0,
                        border: "1px solid black",
                        borderBottomWidth: "0px",
                        backgroundColor:
                            clickedButton === 0 ? "#FFC400" : "whitesmoke",
                        ":hover": {
                            backgroundColor:
                                clickedButton === 0 ? "#FFC400" : "white",
                            color: "black",
                            boxShadow: 0,
                        },
                        color: clickedButton === 0 ? "black" : "blue",
                    }}
                >
                    {" "}
                    İlan Detayları
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        textTransform: "none",
                        fontWeight: "700",
                        marginLeft: "1%",
                        boxShadow: 0,
                        border: "1px solid black",
                        borderBottomWidth: "0px",
                        backgroundColor:
                            clickedButton === 1 ? "#FFC400" : "whitesmoke",
                        ":hover": {
                            backgroundColor:
                                clickedButton === 1 ? "#FFC400" : "white",
                            color: "black",
                        },
                        color: clickedButton === 1 ? "black" : "blue",
                    }}
                    onClick={() => setClickedButton(1)}
                >
                    {" "}
                    Teknik Özellikler
                </Button>
                <Divider
                    sx={{ backgroundColor: "#FFC000", borderBottomWidth: 2 }}
                />
                <Grid
                    sx={{
                        border: "1px solid gray",
                        display: clickedButton === 0 ? "block" : "none",
                    }}
                >
                    <Typography
                        style={{
                            backgroundColor: "whitesmoke",
                            padding: "5px",
                        }}
                    >
                        Açıklama
                    </Typography>
                    <Typography style={{ padding: "1%" }}>
                        {detail.description}
                    </Typography>
                </Grid>
                <Grid
                    xs={12}
                    sx={{
                        padding: "5%",
                        paddingTop: "2%",
                        display: clickedButton === 1 ? "block" : "none",
                    }}
                >
                    <Typography
                        style={{
                            textTransform: "uppercase",
                            fontWeight: "bolder",
                        }}
                    >
                        {title}{" "}
                    </Typography>
                    <Typography
                        variant="h5"
                        style={{
                            color: "blue",
                        }}
                    >
                        Genel Bakış
                    </Typography>

                    {detail.technicalProperties.map((det, index) => (
                        <Grid
                            container
                            style={{
                                marginTop: "2%",
                                padding: "5px",
                                backgroundColor:
                                    index % 2 === 0 ? "whitesmoke" : "white",
                                height: "50px",
                                alignItems: "center",
                            }}
                        >
                            <Grid xs={6}>
                                <Typography
                                    sx={{
                                        fontWeight: "600",
                                    }}
                                >
                                    {det.title}{" "}
                                </Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography
                                    sx={{
                                        color: det.title.includes("İlan No")
                                            ? "red"
                                            : "black",
                                    }}
                                >
                                    {det.value}{" "}
                                </Typography>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AdvertPage;
