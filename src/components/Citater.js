import React, { useState } from 'react';
import AddCites from '../components/AddCitats'
import uuid from 'uuid/v1';

const Citater = () => {
    const [citater, setCitater] = useState([
        { Overskrift:'Her er mit citat', citats:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Forfatter:'Frank', id:1 },
        { Overskrift:'Her er mit citat', citats:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Forfatter:'Frank', id:2 },
        { Overskrift:'Her er mit citat', citats:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Forfatter:'Frank', id:3 },
        { Overskrift:'Her er mit citat', citats:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Forfatter:'Frank', id:4 },
        { Overskrift:'Her er mit citat', citats:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Forfatter:'Frank', id:5 }
    ]);
    const addCites = (c) => {
        c.id = uuid()
        setCitater([...citater, c])
    }
    const deleteCite = (id) => {
        setCitater(citater.filter(c => c.id !== id))
    }
    return (
        <div className="citat-liste">
            <div>
                {citater.map( citat => {
                    return(
                        <div key={citat.id} className="card-panel hoverable citater">
                            <h4>{citat.Overskrift}</h4>
                            <i>{citat.citats}</i>
                            <b>{citat.Forfatter}</b><br />
                            <button className="btn orange" onClick={() => {deleteCite(citat.id)}}>Slet Citat</button>
                        </div>
                    );
                })}
            </div>
            <AddCites addCites={addCites} />
        </div>
    );
}

export default Citater;

