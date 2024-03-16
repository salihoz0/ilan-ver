/** @format */

import { Button, Grid } from "@mui/material";
import { useState, useEffect } from "react";

const ImagesComponent = ({ urls, page, setUrls }) => {
    const [list, setList] = useState(urls);
    const [imageChanged, setImageChanged] = useState(false);
    useEffect(() => {
        setList(urls);
        console.log("URLs", urls);
    }, [urls]);

    const handleClick = (currentIndex) => {
        const tempList = [...list];
        console.log(currentIndex);
        const selectedImage = tempList[currentIndex];
        tempList[currentIndex] = tempList[0];
        tempList[0] = selectedImage;

        setList(tempList);
        setImageChanged(true);
    };

    return (
        <Grid container style={{ overflow: "hidden" }}>
            <Grid xs={12}>
                <img
                    src={list[0]}
                    alt="ana resim"
                    style={{
                        borderRadius: "5px",
                        width: "100%",
                    }}
                />
            </Grid>
            <Grid item sx={{ display: "flex", gap: "5px", margin: "1%" }}>
                {list.map((url, index) => (
                    <div
                        onClick={() => {
                            handleClick(index);
                        }}
                        key={index}
                    >
                        <img
                            src={url}
                            alt="resim"
                            style={{
                                borderRadius: "5px",
                                display: index === 0 ? "none" : "flex",
                                width: "100px",
                            }}
                        />
                    </div>
                ))}
            </Grid>
            <Button
                sx={{
                    display: page == "add" && imageChanged ? "block" : "none",
                }}
                onClick={() => {
                    setUrls(list);
                    setImageChanged(false);
                }}
            >
                {" "}
                Ana resim olarak kaydet{" "}
            </Button>
        </Grid>
    );
};

export default ImagesComponent;
