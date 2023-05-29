import React from 'react'
import { useLocation } from 'react-router-dom';

export default function DetailComp(props) {
    const location = useLocation();
    const propsData = location.state;
    return (
        <div>
            <h1>{propsData.judul}</h1>
            <h2>{propsData.id}</h2>
            <h3>{propsData.tanggal}</h3>
        </div>
    )
}
