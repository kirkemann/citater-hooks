import React, { useState } from 'react';

const AddCites = ({addCites}) => {
    const [Overskrift, setOverskrift] = useState('');
    const [citats, setCitats] = useState('');
    const [Forfatter, setForfatter] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addCites({Overskrift, citats, Forfatter});
        setOverskrift('');
    }
    return (
        <form onSubmit={handleSubmit} className="card-panel hoverable">
            <label>Overskrift:</label>
            <input type="text" value={Overskrift} onChange={(e) => setOverskrift(e.target.value)}/>
            <label>Citats:</label>
            <input type="text" value={citats} onChange={(e) => setCitats(e.target.value)}/>
            <label>Forfatter:</label>
            <input type="text" value={Forfatter} onChange={(e) => setForfatter(e.target.value)}/>
            <input type="submit" value="Tilføj Citat" className="btn" />
        </form>
    )
}

export default AddCites;
