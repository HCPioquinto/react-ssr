import React, { useContext, useState, useEffect } from 'react';
import { useAnimals } from './AnimalContext';
import { useLoading } from './LoadingContext';
import { useLogin } from './LoginContext';
import { getUserDonations } from 'utils/apis';
import Modal from 'components/primitives/Modal';
import { Input } from 'components/primitives/Input';
import Button from 'components/primitives/Button';

const DonationsContext = React.createContext();

export const useDonations = () => {
  return useContext(DonationsContext);
};

export const DonationModal = (props) => {
  const { donoAnimal, showModal, setShowModal, submitDono } = props;
  const [amount, setAmount] = useState(0);

  const closeModal = () => {
    setShowModal(false);
  };

  const onSubmitDono = () => {
    submitDono(parseInt(amount));
    setAmount(0);
  };

  return (
    <Modal isShow={showModal} onClose={closeModal}>
      <>
        <h3>How much would you like to Donate to {donoAnimal.petName} : </h3>
        <p>You can only donate up to $10.000</p>
        <Input value={amount} onUpdate={setAmount} />
        <div className="modal_footer">
          <Button className="primary" action={onSubmitDono} label="Submit" />
          <Button className="warning" action={closeModal} label="Cancel" />
        </div>
      </>
    </Modal>
  );
};

export const DonationsProvider = ({ children }) => {
  const { setIsLoading, mockDelay } = useLoading();
  const { isLoggedIn, userId } = useLogin();
  const { addNewDono } = useAnimals();

  const [userDonos, setUserDonos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [donoAnimal, setDonoAnimal] = useState({
    petName: '',
    id: null,
  });

  useEffect(() => {
    if (isLoggedIn) {
      mockDelay(() => {
        setUserDonos(getUserDonations(userId));
      });
    } else {
      mockDelay(() => {
        setUserDonos([]);
      });
    }
  }, [isLoggedIn, userId]);

  const submitDono = (amount) => {
    if (amount < 1 || amount > 10) {
      alert('Please input a valid amount');
      return;
    }

    const newUserDonos = [
      ...userDonos,
      {
        idAnimal: donoAnimal.id,
        idUser: userId,
        amount,
        animalData: { ...donoAnimal },
      },
    ];

    const newAllDonos = {
      idAnimal: donoAnimal.id,
      idUser: userId,
      amount,
    };

    mockDelay(() => {
      alert('Donation sent. Thank you');
      setUserDonos(newUserDonos);
      addNewDono(newAllDonos);
      setShowModal(false);
    });
  };

  const openDonationModal = (animalDetails) => {
    if (animalDetails.id === null) return;
    setDonoAnimal(animalDetails);
    setShowModal(true);
  };

  const contextValues = {
    userDonos,
    openDonationModal,
  };

  return (
    <DonationsContext.Provider value={contextValues}>
      <DonationModal
        {...{
          donoAnimal,
          showModal,
          setShowModal,
          submitDono,
        }}
      />
      {children}
    </DonationsContext.Provider>
  );
};
