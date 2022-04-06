import React, {FC} from "react";
import "./index.css";
import {Oval} from "react-loader-spinner";

interface Props {
    isLoaded: boolean;
}

const Loader: FC<Props> = ({isLoaded}: Props) => {
    return (
        <>
            {!isLoaded &&
                (<div className={"App-spinner"}>
                    <Oval
                        color={"#00c"}
                        secondaryColor={"#3c3cff"}
                        strokeWidth={6}
                        height={180}
                        width={180}
                        visible={!isLoaded}/>
                </div>)}
        </>
    );
};

export default Loader;
