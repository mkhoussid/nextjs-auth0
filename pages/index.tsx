import React from 'react';
import axios from 'axios';

export default function Home() {
    const handleLogin = React.useCallback(async () => {
        try {
            await axios.get('/login');
        } catch (err) {
            console.log('Error caught!', err);
        }
    }, []);

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button onClick={handleLogin}>login</button>
        </div>
    );
}
