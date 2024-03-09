/** @format */
import { Button, Divider, Grid, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderDetails from "./headerDetails";

import HistoryIcon from "@mui/icons-material/History";

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
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AdvertPage;
