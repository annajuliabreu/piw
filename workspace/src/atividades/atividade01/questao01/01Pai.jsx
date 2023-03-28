import React, {Fragment} from "react";
import Filho from "./01Filho";

const Pai = () => {
    return(
        <Fragment>
            <Filho altura={1.8} peso={90} />
        </Fragment>
    )
}

export default Pai;