import React from 'react';

const SPACING_UNIT = 8;

const Container = ({
    children,
    m,
    mb,
    ml,
    mr,
    mt,
    p,
    pb,
    pl,
    pr,
    pt,
}) => {

    return (
        <div
            style={{
                ...(m ? { margin: `${m * SPACING_UNIT}px` } : undefined),
                ...(mb ? { marginBottom: `${mb * SPACING_UNIT}px` } : undefined),
                ...(ml ? { marginLeft: `${ml * SPACING_UNIT}px` } : undefined),
                ...(mr ? { marginRight: `${mr * SPACING_UNIT}px` } : undefined),
                ...(mt ? { marginTop: `${mt * SPACING_UNIT}px` } : undefined),
                ...(p ? { margin: `${p * SPACING_UNIT}px` } : undefined),
                ...(pb ? { marginBottom: `${pb * SPACING_UNIT}px` } : undefined),
                ...(pl ? { marginLeft: `${pl * SPACING_UNIT}px` } : undefined),
                ...(pr ? { marginRight: `${pr * SPACING_UNIT}px` } : undefined),
                ...(pt ? { marginTop: `${pt * SPACING_UNIT}px` } : undefined),
            }}
        >
            { children }
        </div>
    );
};

export default Container;
