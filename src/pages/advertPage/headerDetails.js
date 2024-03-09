/** @format */
import { Grid, Typography, Divider, Tooltip } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import React from "react";
const HeaderDetails = ({ url, title, detail }) => {
    return (
        <Grid container>
            <Grid xs={12} style={{ marginBottom: "1%" }}>
                <Typography
                    variant="h4"
                    style={{ textTransform: "uppercase", fontWeight: "bolder" }}
                >
                    {title}{" "}
                </Typography>
                <Divider sx={{ marginTop: "1%" }}></Divider>
            </Grid>
            <Grid
                xs={6}
                style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <img src={url} alt="" style={{ width: "100%" }} />
            </Grid>
            <Grid xs={6} sx={{ paddingLeft: "3%" }}>
                <Typography
                    sx={{
                        color: "blue",
                        fontWeight: "600",
                        alignItems: "center",
                        display: "flex",
                        gap: "7px",
                        fontSize: "20px",
                    }}
                >
                    170.000TL
                    <Tooltip title="Fiyat Tarihçesi">
                        <HistoryIcon sx={{ fontSize: "20px" }} />
                    </Tooltip>
                </Typography>
                <Typography sx={{ color: "blue", fontWeight: "600" }}>
                    İstanbul / Bahçelievler / Şirinevler Mah.
                </Typography>
                <Divider />
                {detail.subDetails.map((det) => (
                    <Grid container style={{ marginTop: "2%" }}>
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
                        <Divider width="100%" style={{}} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default HeaderDetails;
