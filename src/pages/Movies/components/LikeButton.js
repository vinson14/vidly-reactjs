import { useState } from "react";

const LikeButton = () => {
    const [liked, setLiked] = useState(false);

    const handleOnClick = () => {
        setLiked(!liked);
    };

    const style = {
        cursor: "pointer",
    };

    const getClass = () => {
        if (liked) {
            return "fas fa-heart";
        } else {
            return "far fa-heart";
        }
    };

    return <i style={style} className={getClass()} onClick={handleOnClick}></i>;
};

export default LikeButton;
