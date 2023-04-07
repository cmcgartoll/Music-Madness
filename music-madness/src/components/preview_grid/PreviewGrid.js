import React, { useState, useEffect, useContext } from 'react';
import Grid from '@mui/material/Grid';
import './PreviewGrid.css';

export default function PreviewGrid(props) {
    const [data, setData] = useState(props.data);
    console.log(data);

    return (
        <div className='preview-grid'>
            <p className='preview-title'>here's the seeding for your bracket!</p>
            <Grid container spacing={0} columnSpacing={{xs: 0}}>
                {data.map(musicObject => (
                    <Grid item xs={6} key={musicObject.key} >
                    <div className='preview-grid-item'>
                        <div className='preview-grid-item-box'>
                            <a href={musicObject.link}>
                                <div className='image'>
                                    <img className='img'
                                    src={musicObject.image}
                                    alt={musicObject.name}
                                    />
                                </div>
                            </a>
                            <div className='description'>
                                <p className='seed'>{musicObject.seed}</p>
                                <a className='name' href={musicObject.link}>{musicObject.name}</a>
                            </div>
                        </div>
                    </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}