/** @format */

import { Button, Grid, TextField } from "@mui/material";
import SmallImageComponent from "../components/smallImageComponent";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import logo from "../logo.png";
import React from "react";
import { useNavigate } from "react-router-dom";
function HomePage() {
    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        generate();
    }, []);

    const search = (value) => {
        setFilteredList(
            list.filter((item) =>
                item.title.toLowerCase().includes(value.toLowerCase())
            )
        );
    };

    const generate = () => {
        const images = [];
        for (let i = 0; i < 100; i++) {
            images.push({
                url: faker.image.transport(null, null, true),
                title: `${faker.vehicle.manufacturer()} ${faker.vehicle.model()}`,
            });
        }
        setList(images);
        setFilteredList(images);
    };
    return (
        <Grid container>
            <Grid
                item
                xs={12}
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20%",
                }}
            >
                <img
                    src={logo}
                    alt=""
                    width="150px"
                    style={{ padding: "15px" }}
                />
                <TextField
                    autoComplete="off"
                    label="Araç arat"
                    onChange={(e) => search(e.target.value)}
                    style={{ width: "30%" }}
                />
                <Button
                    variant="contained"
                    onClick={() => navigate("/ilan-ver")}
                    sx={{
                        whiteSpace: "nowrap",
                        width: { xs: "30%", lg: "20%" },
                        textTransform: "none",
                        fontWeight: "700",
                        padding: "15px",
                        boxShadow: 0,
                    }}
                >
                    Ücretsiz İlan Ver
                </Button>
            </Grid>
            {filteredList.map((advert) => (
                <Grid item xs={2}>
                    <SmallImageComponent
                        url={advert.url}
                        title={advert.title}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

export default HomePage;
