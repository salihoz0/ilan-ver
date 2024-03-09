/** @format */

import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const SmallImageComponent = ({ url, title }) => {
    const navigate = useNavigate();
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                padding: "4%",
            }}
            onClick={() =>
                navigate(`/ilan`, { state: { url: url, title: title } })
            }
        >
            <img src={url} style={{ borderRadius: "5px" }} />
            <Typography
                style={{
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "100%",
                }}
            >
                {title}{" "}
            </Typography>
        </div>
    );
};
export default SmallImageComponent;
