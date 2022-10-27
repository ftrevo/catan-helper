import { fetchData } from '../repository/repository';
import { useAsyncState } from './useAsyncState';

export const useGameData = () => useAsyncState(fetchData);
