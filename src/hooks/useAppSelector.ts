import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from 'api/index';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

