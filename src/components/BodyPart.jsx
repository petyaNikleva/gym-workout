import React from 'react';
import { Stack, Typography } from '@mui/material';
import AllIcon from '../assets/all.svg';
import BackIcon from '../assets/back.webp';
import CardioIcon from '../assets/cardio.svg';
import ChestIcon from '../assets/chest.svg';
import LowerArmIcon from '../assets/lower-arm.svg';
import LowerLegIcon from '../assets/lower-leg.svg';
import NeckIcon from '../assets/neck.svg';
import ShouldersIcon from '../assets/shoulders.svg';
import UppererArmIcon from '../assets/upper-arm.svg';
import UpperLegIcon from '../assets/upper-leg.svg';
import WaistIcon from '../assets/waist.svg';

const icons = {
  all: AllIcon,
  back: BackIcon,
  cardio: CardioIcon,
  chest: ChestIcon,
  ["lower arms"]: LowerArmIcon,
  ["lower legs"]: LowerLegIcon,
  neck: NeckIcon,
  shoulders: ShouldersIcon,
  ["upper arms"]: UppererArmIcon,
  ["upper legs"]: UpperLegIcon,
  waist: WaistIcon
}

const commonStyles = {
  background: '#fff',
  borderBottomLeftRadius: '20px',
  width: '270px',
  height: '282px',
  cursor: 'pointer',
  gap: '47px',
};

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  console.log('item', item)
  console.log(bodyPart)

  return <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ?
      { ...commonStyles, borderTop: '4px solid #FF2625' }
      : commonStyles}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={icons[item]} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
};

export default BodyPart;