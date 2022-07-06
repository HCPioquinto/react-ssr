import { useDonations } from 'context/DonationsContext';
import React from 'react';
import { convertToReadableDate } from 'utils/helpers';

const Card = ({ animalDetails }) => {
  const {
    id,
    type,
    dataPerdido,
    petName,
    owner,
    ownerNumber,
    locality,
    donations = 0,
    disableDonation = true,
  } = animalDetails;

  const dateLost = convertToReadableDate(dataPerdido);
  const { openDonationModal } = useDonations();

  const onOpenDonationModal = () => openDonationModal(animalDetails);

  return (
    <div className="card">
      <div className="card-header">
        <h1 className="header">
          {petName} ({type}) -- #{id}
        </h1>
        <button id="share" className="btn share">
          Partilhar
        </button>
      </div>
      <div className="card-body">
        <div className="body-image">
          <img
            src={`http://placekitten.com/${id * 10}/${id * 10}`}
            alt="Kitten"
          />
        </div>
        <div className="body-description">
          <div className="description-row">
            <h3>Perdido</h3>
            <p>{dateLost}</p>
          </div>
          <div className="description-row">
            <h3>Dono</h3>
            <p>{owner}</p>
          </div>
          <div className="description-row">
            <h3>Localidade</h3>
            <p>{locality}</p>
          </div>
        </div>
        <div className="body-footer">
          <div className="description-row">
            <span>
              <h3>$ {donations}.00 </h3>
              doados
            </span>
            <button
              id="donate"
              className={`btn donate ${disableDonation ? 'disabled' : ''}`}
              onClick={() => onOpenDonationModal()}
              disabled={disableDonation}
            >
              Doar
            </button>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <a className="btn phone" id="phone" href={`tel:${ownerNumber}`}>
          (PHONE) LIGAR
        </a>
      </div>
    </div>
  );
};

export default Card;
