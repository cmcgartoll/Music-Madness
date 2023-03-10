import React, { useState, useEffect, useContext } from 'react';
import Grid from '@mui/material/Grid';
import './PreviewGrid.css';

export default function PreviewGrid(props) {
    const [data, setData] = useState(props.data);
    console.log(data);

    return (
        <div className='preview-grid'>
            <Grid container spacing={1} columnSpacing={{xs: 3}}>
                {data.map(musicObject => (
                    <Grid item xs={6} key={musicObject.key} >
                    <div className='preview-grid-item'>
                        <div className='image'>
                            <img className='img'
                            src={musicObject.image}
                            alt={musicObject.name}
                            />
                        </div>
                        <div className='description'>
                            <p className='seed'>{musicObject.seed}.</p>
                            <p className='name'>{musicObject.name}</p>
                        </div>
                    </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}