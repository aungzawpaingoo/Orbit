import { Card } from '@mui/material'
import React from 'react'

const ChartViews = () => {
    return (
        <div className='bg-red-500'>

            <div className='flex justify-between'>
                <Card sx={styles.card} />

                <Card sx={styles.card} />
            </div>

        </div>
    )
};

const styles = {
    card: {
        height: '350px',
        width: '600px',
        boxSizing: 'border-box',
    }
};

export default ChartViews