import { useDonations } from 'context/DonationsContext';
import React from 'react';

const Donations = () => {
  const { userDonos } = useDonations();

  return (
    <div className="donations_box">
      <p>Donations</p>
      <ul>
        {userDonos.map((dono, idx) => (
          <li key={`${idx}-${dono.amount}-${dono.idAnimal}`}>
            Donated ${dono.amount}.000 to {dono.animalData.petName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Donations;
