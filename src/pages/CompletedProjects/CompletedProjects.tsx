import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLazyGetObjectsFinishedListQuery } from 'api/objects/objects.api';
import { IObjectsFinishedList } from 'types/common';
import Button from 'components/Button';
import CompletedCard from 'components/CompletedCard';
import PageHeading from 'components/PageHeading';
import Segment from 'components/Segment';

import { options } from './CompleteProjects.helpers';

import './styles.scss';

export const CompletedProjects = () => {


  return (
    <>
    </>
  );
};

