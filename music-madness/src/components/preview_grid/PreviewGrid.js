import React, { useState, useEffect, useContext } from 'react';
import Grid from '@mui/material/Grid';

export default function PreviewGrid(props) {
    const [data, setData] = useState(props.data);
    console.log(data);

    return (
        <div>
            <Grid container spacing={4} columnSpacing={{xs: 2}}>
                {data.map(musicObject => (
                    <Grid item xs={3} key={musicObject.key}>
                    <div>
                        <img
                        style={{width:"100%"}}
                        src={musicObject.image}
                        alt={musicObject.name}
                        />
                    </div>
                    <h5>{musicObject.seed}</h5>
                    <h5>{musicObject.name}</h5>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}