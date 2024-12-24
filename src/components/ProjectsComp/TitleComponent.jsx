import { Select, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';

const TitleComponent = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        const newValue = event.target.value;
        setSelectedValue(newValue);
        console.log(newValue);
    };

    return (
        <div className="pt-0 pb-8 bg-white w-full border-t-0 border-l-0 border-r-0">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center sm:text-left">
                Projects
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 px-0 pt-2">
                <TextField
                    sx={{
                        width: '250px',
                        '& .MuiInputBase-root': {
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                        },
                    }}
                    placeholder="Search Projects"
                    inputMode="search"
                    id="standard-required"
                    variant="outlined"
                />

                <Select
                    value={selectedValue}
                    onChange={handleChange}
                    displayEmpty
                    sx={{
                        width: '250px',
                        height: '40px',
                        '& .MuiSelect-select': {
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                        },
                    }}
                >
                    <MenuItem value="" disabled>
                        Select a project
                    </MenuItem>
                    <MenuItem value="project1">Project 1</MenuItem>
                    <MenuItem value="project2">Project 2</MenuItem>
                    <MenuItem value="project3">Project 3</MenuItem>
                </Select>
            </div>
        </div>
    );
};

export default TitleComponent;
