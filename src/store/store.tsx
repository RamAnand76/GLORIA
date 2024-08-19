import { create } from 'zustand';
import appStore from './actions';

export interface IStore {
  bulkRegisterData: IBulkRegister_R;
  setBulkRegisterData: (data: IBulkRegister_R) => void;
}

const useStore = create<IStore>()(appStore);

export default useStore;
