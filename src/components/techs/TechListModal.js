import React, { useState, useEffect } from 'react';
import TechItem from './TechItem';

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch('/techs');
    const data = await res.json();
    setTechs(data);
    setLoading(false);
  };
  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <ul className="collection with-header">
          <li className="collection-header">
            <h4 className="center">
              <strong>Technicians</strong>
            </h4>
          </li>
          {!loading && techs.length === 0 ? (
            <p className="center">No Techs to show...</p>
          ) : (
            techs.map((tech) => <TechItem key={tech.id} tech={tech} />)
          )}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
